"use strict";

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', function(req,res){
    console.log('peticion a /');
    res.send('Hello world');
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('App arrancada en el puerto:', port);
})