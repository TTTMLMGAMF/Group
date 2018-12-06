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

app.get(`/api/games/:account-id`, endpointCtrl.retrieveGames)
app.get(`/api/accountInfo/:account-id`, endpointCtrl.retrieveAccountInfo)
app.put(`/api/class/:classroom-id`, endpointCtrl.updateClassroom)
app.delete(`/api/class/:classroom-id`, endpointCtrl.removeClassroom)
app.post(`/api/students`, endpointCtrl.addStudents);
app.get(`/api/game/:game-id`, endpointCtrl.getGame);
app.post('/api/game', (req, res) => {
    games[req.body.room + '_qa'] = { ...dummyData, room: req.body.room }
    res.end()
})
app.delete(`/api/game/:game-id`, endpointCtrl.deleteGame);



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
        io.to(data.room).emit('room joined');
    })

    socket.on('question click', data => {
        // console.log(data)
        io.to(data.room).emit('question open', data)
    })
    socket.on('question close', data => {
        io.to(data.room).emit('question close', data)
    })
})