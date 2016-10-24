var express = require('express');
var mysql = require('mysql');
var path = require('path');
var cards = require('./assets/cards.js')
var app = express();

require('./routing/html-routes.js')(app);


var routes = require('./routing/html-routes.js');

// connect the routes
app.use('/', routes);
app.use(express.static(process.cwd() + '/public'));
app.use('/update', routes);
app.use('/create', routes);


var port = process.env.PORT || 3000;
app.listen(port, function(err){
	if (err) throw err;
	console.log('listening as ' + port)
});

