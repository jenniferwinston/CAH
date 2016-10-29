var deck = require('./../assets/cards.js');
var path = require('path');
var express = require('express');
var router = express.Router();
var player = require('../models/')["player"];
var playersArray = [];
var game = require('./game.js');

	router.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/landing.html'));
	});

	router.post('/player/:playerName', function(req, res) {

		var userData = req.body;
		
		// console.log("userData: " + userData.name);
		var userName = userData.name;
		// console.log("..." + userName + "...");
		playersArray.push(userName);
		player.create({player_name: userName, gameWins: 0}).then(function(){
			// console.log('think this works');

			res.send({name: userName, array: playersArray});
		});
	});

	router.get('/home', function(req, res){
		// console.log('this is working');
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
// };



module.exports = router;