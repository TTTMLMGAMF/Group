require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');


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

    app.listen(SERVER_PORT, () => {
        console.log(`Port ${SERVER_PORT} is ready to teach!!!`)
    });
