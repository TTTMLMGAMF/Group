require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const bcrypt = require('bcryptjs');
const authCtrl = require('./authCtrl');
const socket = require('socket.io');
const endpointCtrl = require('./endpointCtrl');
const dummyData = require('./dummyData');
const cloneDeep = require('clone-deep');


const app = express();
app.use(bodyParser.json());

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET
} = process.env;



massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log('DB says "What is ____?"')
    })
    .catch((err) => {
        console.log(err);
    })

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))


// Auth endpoints
app.post(`/auth/register`, authCtrl.register);
app.post(`/auth/login`, authCtrl.login);
app.delete(`/auth/logout`, authCtrl.logout);

app.get(`/api/games`, endpointCtrl.retrieveGames)
app.get(`/api/accountInfo/:account_id`, endpointCtrl.retrieveAccountInfo)
// app.put(`/api/class/:classroom_id`, endpointCtrl.updateClassroom)
// app.delete(`/api/class/:classroom_id`, endpointCtrl.removeClassroom)
// app.post(`/api/students`, endpointCtrl.addStudents);
// app.get(`/api/game/:game_id`, endpointCtrl.getGame);

app.post('/api/creategame', async (req, res) => {
    // console.log('req.body: ',req.body);
    const db = app.get("db");
    let qa = await db.get_QAs([req.body.gameId]);
    qa.map(question => { question.visible = false, question.disabled = false })
    // console.log('questions:', qa)
    let questionList = { qa };

    let categories = { cOne: qa[0].category, cTwo: qa[7].category, cThree: qa[12].category }
    console.log(categories);
    let game = { ...req.body, ...questionList, ...categories }
    // console.log(game);
    games[req.body.room + '_qa'] = cloneDeep(game)
    // games[req.body.room + '_qa'].room = req.body.room
    res.end()
})

app.delete(`/api/game/:game_id/:game_name`, endpointCtrl.deleteGame);

app.post(`/api/game`, endpointCtrl.addGame);
app.put(`/api/game/:game_id`, endpointCtrl.addCategories);



let games = {}


const io = socket(app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} is ready to teach!!!`)
}));


io.on('connection', socket => {

    socket.on('join room', data => {
        console.log(socket.id)
        console.log('room joined', data.room)
        socket.join(data.room);
        io.to(data.room).emit('game state', games[data.room + '_qa'])
    })


    socket.on('question click', data => {
        let i = games[data.state.room + '_qa'].qa.findIndex(id => id.question_answer_id === data.id)
        games[data.state.room + '_qa'].qa[i].visible = true

        io.to(data.state.room).emit('game state', games[data.state.room + '_qa'])
        io.to(data.state.room).emit('question open')
    })
    socket.on('question close', data => {
        let i = games[data.state.room + '_qa'].qa.findIndex(id => id.question_answer_id === data.id)
        games[data.state.room + '_qa'].qa[i].visible = false
        io.to(data.state.room).emit('game state', games[data.state.room + '_qa'])
        io.to(data.state.room).emit('show answer', false)
    })

    socket.on('handle score', data => {
        if (data.add === true) {
            let e = games[data.state.room + '_qa'].qa.findIndex(id => id.question_answer_id === data.id)
            let newTeams = Object.assign({}, games[data.state.room + '_qa']);
            newTeams.teams[data.i].score += data.state.qa[e].points
            newTeams.qa[e].disabled = true
            io.to(data.state.room).emit('game state', newTeams)
        } else if (data.add === false) {
            let e = games[data.state.room + '_qa'].qa.findIndex(id => id.question_answer_id === data.id)
            let newTeams = Object.assign({}, games[data.state.room + '_qa']);
            newTeams.teams[data.i].score += - data.state.qa[e].points
            io.to(data.state.room).emit('game state', newTeams)
        }
    })

    socket.on('show answer', data => {
        // let e = games[data.state.room + '_qa'].qa.findIndex(id => id.question_answer_id === data.id)

        io.to(data.state.room).emit('show answer', true)
    })
})