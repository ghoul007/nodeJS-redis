var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('config')


var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.3:27017/dogs')

app.use(bodyParser.json())
var catCrud = require('./routes/dog_routes')(app)

app.get('/ping', function(req,res){
    var status= {
        success: true,
        address: server.address().address,
        port: server.address().port
    }
    res.send(status)
})



var server = app.listen(3002, function () {
    console.log('Server running   http://127.0.0.1:3002')
})