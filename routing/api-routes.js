var deck = require('./../assets/cards.js');

var express = require('express');
var router = express.Router();
var player = require('../models/')["player"];
module.exports = function(app){

	function giveEachPlayerFiveCards (allPlayers) {
		for(var i = 0; i <= allPlayers.length; i++) {
			var playerCards = []
			giveOnePlayerFiveCards(allPlayers[i].player_name)
		}
	}

	function giveOnePlayerFiveCards (playerName) {
		for(var p = 1; p <= ){
			card[p] = "whatever"
		}
		var playerName = new playerWithCards(card1, card2, card3, card4, card5);
	}

	function playerWithCards (playerName, card1, card2, card3, card4, card5) {
		this.name = playerName,
		this.cards = [card1, card2, card3, card4, card5],
		this.score = 0
	}



	// get route, edited to match sequelize
	router.get('/game/:playerName', function(req,res) {
		// replace old function with sequelize function
		player.findAll()
		// use promise method to pass the burgers...
		.then(function(player_data){
			console.log(player_data);
			// into the main index, updating the page
			giveEachPlayerFiveCards(player_data)
		}).then(function(player_data, cards) {
			for (var i = 0; i < player_data.length; i++) {
			if (player_data[i].player_name == req.params.playerName) {
				res.json()
			}
		}
		})
		
	});

	// app.get('/game', function(req, res){
		
	// 	res.json();
	// });

		// app.get('/game/:username', function(req, res){
	// 	giveEachPlayerFiveCards(req.params.username);
	// 	res.json(everyonesCards);
	// });

	router.post('/player/register', function(req, res) {
	// edited burger create to add in a burger_name
	player.create({player_name: req.body.player_name, gameWins: 0})
	// pass the result of our call
	.then(function(newPlayer){
		// log the result to our terminal/bash window
		console.log(newPlayer);
		// redirect
		res.redirect('/game');
	});
});
}