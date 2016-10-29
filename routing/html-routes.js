// ===============================================================================
// ROUTING
// ===============================================================================
// var path = require('path');
// var express = require('express');
// var router = express();

// module.exports = function (app) {
// 	// HTML GET Requests
// 	// Below code handles when users "visit" a page.
// 	// In each of the below cases the user is shown an HTML page of content
// 	// ---------------------------------------------------------------------------

// 	app.get('/', function (req, res) {
// 		res.sendFile(path.join(__dirname + '/../public/landing.html'));
// 	});

// 	app.get('/game', function (req, res) {
// 		console.log('hmmmm')
// 		res.sendFile(path.join(__dirname + '/../public/home.html'));
// 	});

	// app.post('/player/:userName', function (req, res) {
		
		// console.log(req.body);
		// res.sendFile(path.join(__dirname + '/../public/home.html'));
	// });

	// If no matching route is found default to home
	// app.use(function (req, res) {
	// 	console.log(req);
	// 	res.sendFile(path.join(__dirname + '/../public/home.html'));
	// });
};