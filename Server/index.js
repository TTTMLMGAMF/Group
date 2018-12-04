require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const bcrypt = require('bcryptjs');
const authCtrl = require('./authCtrl');
const endpointCtrl = require('./endpointCtrl');


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

app.get(`/api/games/:account-id`, endpointCtrl.retriveGames)
app.get(`/api/accountInfo/:account-id`, endpointCtrl.retrieveAccountInfo)
app.put(`/api/class/:classroom-id`, endpointCtrl.updateClassroom)
app.delete(`/api/class/:classroom-id`, endpointCtrl.removeClassroom)
app.post(`/api/students`, endpointCtrl.addStudents);
app.get(`/api/game/:game-id`, endpointCtrl.getGame);
app.delete(`/api/game/:game-id`, endpointCtrl.deleteGame);

app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} is ready to teach!!!`)
});
