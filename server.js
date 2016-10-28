var express = require('express');
var mysql = require('mysql');
var path = require('path');
var cards = require('./assets/cards.js')
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var models = require('./models')

// sync the models
models.sequelize.sync();

var routes = require('./controllers/controller.js');

// connect the routes

// app.use(express.static(__dirname + '/public'));
app.use(express.static(process.cwd() + '/public'));
app.use('/', routes);
// app.use('/game', routes);
// app.use('/create', routes);
// app.use('/', routes);
// app.use('/update', routes);
// app.use('/create', routes);


var port = process.env.PORT || 3000;
app.listen(port, function(err){
	if (err) throw err;
	console.log('listening as ' + port)
});

