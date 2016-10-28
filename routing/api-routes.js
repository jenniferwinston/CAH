var deck = require('./../assets/cards.js');
var express = require('express');
var router = express.Router();
var player = require('../models/')["player"];
module.exports = function(app){

	function startGame (arrayOfPlayers) {
		giveEachPlayerFiveCards(player_data);
		pickTheFirstJudge(player_data);
		newRound();
	};

	function pickTheFirstJudge (arrayOfPlayers) {
		var randomNumber = Math.floor(Math.random() * arrayOfPlayers.length);
		judge = arrayOfPlayers[randomNumber];
	};

	function newRound (arrayOfPlayers) {
		
		// PICK A BLACK CARD
		// *****

		// ROTATE WHO THE JUDGE IS && REFILL EACH PLAYER'S HAND
		for (var i = 0; i < arrayOfPlayers.length; i++) {
			
			// ROTATE WHO THE JUDGE IS
			if (judge == arrayOfPlayers[i]) {
				if (i != arrayOfPlayers.length) {
					var judge = arrayOfPlayers[i++];
				}else{
					var judge = arrayOfPlayers[0];
				};
			};
			
			// REFILL EACH PLAYER'S HAND
			if(arrayOfPlayers[i].hand.length < 5) {
				pickOneCard(arrayOfPlayers[i])
			};

			// DISPLAY BLACK CARD

		};
	};

	function giveEachPlayerFiveCards (allPlayers) {
		for(var i = 0; i <= allPlayers.length; i++) {
			var playerCards = []
			giveOnePlayerFiveCards(allPlayers[i].player_name)
		};
	};

	function giveOnePlayerFiveCards (playerName) {
		var hand = [];
		for(var p = 1; p <=5; p++){
			pickOneCard(hand);
		};
		var playerName = new playerWithCards(playerName, hand);
	};

	function pickOneCard (hand) {
		var randomNumber = Math.floor(Math.random() * 50);
		for (var j = 0; j <= usedCards.length; j++) {
				// IF CARD HAS BEEN PICKED, START AGAIN
				if (usedCards[j].id == randomNumber) {
					pickOneCard();
				}
				else{
					if (j === usedCards.length) {
						return false;
					};					
				};
		};	
		hand.push(deck[randomNumber]);	
	};

	function playerWithCards (playerName, hand) {
		this.name = playerName,
		this.hand = hand,
		this.score = 0
	};

	// get route, edited to match sequelize
	router.get('/game/:playerName', function(req,res) {
		// replace old function with sequelize function
		player.findAll();
		// use promise method to pass the burgers...
		.then(function(player_data){
			console.log(player_data);
			// into the main index, updating the page
			startGame(player_data);
		}).then(function(player_data, cards) {
			for (var i = 0; i < player_data.length; i++) {
				if (player_data[i].player_name == req.params.playerName) {
					res.json()
				};
			};
		})
	});

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
};

// app.get('/game', function(req, res){
// 	res.json();
// });

	// app.get('/game/:username', function(req, res){
// 	giveEachPlayerFiveCards(req.params.username);
// 	res.json(everyonesCards);
// });