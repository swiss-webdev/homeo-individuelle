var http = require('http');
var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// all environments
var app = express();

app
    .set('port', 8080)
    .set('ip', 'localhost')
    .use(express.static(__dirname))
    .set('view engine', 'pug')
    .set('views', path.join(__dirname, 'views'))
    .use(favicon(__dirname + '/img/favicon.png'))
    .use(methodOverride())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))




//Website


.get('/', function (req, res) {
    res.render('index');
})

.get('/yoga', function (req, res) {
    res.render('yoga');
})

.get('/homeopathie', function (req, res) {
    res.render('homeopathie');
})

.get('/metakinebiologie', function (req, res) {
    res.render('metakinebiologie');
})

var server = http.createServer(app);
server.listen(app.get('port'), app.get('ip'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});