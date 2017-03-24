const express = require('express');
const bodyParser = require('body-parser');

const BienController = require('./controllers/bien');
const UserController = require('./controllers/User');

// Set up the express app
const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'application/json, Content-Type');

    // Pass to next layer of middleware
    next();
});

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

app.get('/api/objets', BienController.list);
app.post('/api/ajoutobjet', BienController.create);
app.delete('/api/supprimerobjet/:id', BienController.delete );


app.post('/api/newuser', UserController.create );


module.exports = app;

