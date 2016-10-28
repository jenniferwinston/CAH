var deck = require('./../assets/cards.js');
var path = require('path');
var express = require('express');
var router = express.Router();
var player = require('../models/')["player"];
var playersArray = [];

	router.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/landing.html'));
	});

	router.post('/player/:playerName', function(req, res) {

		var userData = req.body;
		console.log(userData);
		var userName = userData.name;
		console.log("..." + userName + "...");
		playersArray.push(userName);
		player.create({player_name: userName, gameWins: 0}).then(function(){
			console.log('think this works');

			res.send({redirectUrl: "/game"});
		});
	});

	router.get('/game', function(req, res){
		console.log('this is working');
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
// };



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

module.exports = router;