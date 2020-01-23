// build a basic server
const express = require('express');

// init express
const app = express();

// Create your endpoints/route handlers
app.get('/', function(req, res){
    res.send('Hello world!');
});

// Handling reqests/routes is simple
// app.get('/', function(req, res){
    // Fetch from database
    // Load Pages
    // return JSON
    // Full access to request & response
// });

// listen on a port
app.listen(5000);