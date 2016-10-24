var express = require('express');
var mysql = require('mysql');
var app = express();
var cards = require('./assets/cards.js')

app.get('/', function(req,res){
	res.redirect('/home')
});
app.get('/home', function(req,res){
	res.json(cards)
})

var port = process.env.PORT || 3000;
app.listen(port, function(err){
	if (err) throw err;
	console.log('listening as ' + port)
});