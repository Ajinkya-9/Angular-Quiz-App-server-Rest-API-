const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require('./routes/api');
var cors = require('cors');
const app= express();
//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
//set up expres app:


//connect to mongodb

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//intialize routes
app.use('/api',require('./routes/php'));
 app.use('/api',require('./routes/api'));
 app.use('/api',require('./routes/participentRoutes'));
 
// Error handling middleware 
app.use(function(err,req,res,next){
res.status(422).send({errr: err.message});
});

//listen request
app.listen(process.env.port || 4000,function(){

console.log('now listening for requests');

});