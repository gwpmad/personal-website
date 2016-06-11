require('dotenv').config();
var express = require('express');
var app = express();
var routes = require('./app/routes')
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8080);
routes(app);
