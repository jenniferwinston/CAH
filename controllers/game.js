var deck = require('./../assets/cards.js');

var Game = {
	addGame: function () {
		var game = {
			players: [],
		  	// history: [];
			isOver: false,
			winnerId: null,
			winningCardId: null,
			isStarted: false,
			deck: Game.deck,
		currentBlackCard: "",
			isReadyForScoring: false,
			isReadyForReview: false,
			pointsToWin: 1,
			maxPlayers: 5,
		// gameList.push(game);
		}


		// game.players = [];
		//   // game.history = [];
		// game.isOver = false;
		// game.winnerId = null;
		// game.winningCardId = null;
		// game.isStarted = false;
		// game.deck = Game.deck;
		// game.currentBlackCard = "";
		// game.isReadyForScoring = false;
		// game.isReadyForReview = false;
		// game.pointsToWin = 1;
		// game.maxPlayers = 5;
		// gameList.push(game);
		// console.log("*********HERE*********" + game)
		// for(var key in game){
		// 	console.log("KEY: " + key)
		// }
		return game;
	},

	joinGame: function (game, player) {
	    var joiningPlayer = {
	    id: player.id,
	    name: player.name,
	    isReady: false,
	    cards : [],
	    selectedWhiteCardId: null,
	    suckyPoints: 0,
	    isDealer: false
	    };

	    // for(var i = 0; i < config.whiteCardsPerHand; i++) {
	    //     drawWhiteCard(game, joiningPlayer);
	    // }

	    // game.players.push(joiningPlayer);

	    // Need to add a start game button, not just start automatically
	    if(game.players.length === config.minPlayers) {
	        if(!game.isStarted){
	            startGame(game);
	        } else {
	            //someone may have dropped and rejoined. If it was the Dealer, we need to re-elect the re-joining player
	            var currentDealer = _.find(game.players, function(p) {
	                return p.isDealer === true;
	            });
	            if(!currentDealer){
	                game.players[game.players.length - 1].isDealer = true;
	            }
	        }
	    }

	    return game;
	},

	usedCards: [deck.whiteCards[1]],

	startGame: function (player_data, cb) {
		var newGame = new Game.addGame;
		Game.giveEachPlayerFiveCards(player_data, newGame, function(data){
			newGame.players = data
			Game.pickTheFirstJudge(newGame, function(game){
				Game.newRound(game, function(game){
					cb(game);
				});
			});
		});
	},

	giveEachPlayerFiveCards: function (allPlayers, game, cb) {
		objectList = [];
			for(var i = 0; i < allPlayers.length; i++) {
				var playerCards = []
				Game.giveOnePlayerFiveCards(allPlayers[i], objectList)
				// console.log("I NEED TO SEE THIS" + JSON.stringify(objectList));
			};
			game.players = objectList;
			console.log("I NEED TO SEE THIS: " + JSON.stringify(game.players));
			// for(var key in objectList) {
			// 	console.log("YOOO" + key)
			// }
			

		cb(objectList);
	},

	giveOnePlayerFiveCards: function (playerName, array) {
		var hand = [];
		for(var p = 1; p <=5; p++){
			console.log('about to run game.pickOneCard' + p)
			Game.pickOneCard(hand);
		};
		var player = new Game.playerWithCards(playerName, hand);
		console.log("OK: " + player)
		array.push(player);
	},

	pickTheFirstJudge: function  (game, cb) {
		console.log("FIRST: " + JSON.stringify(game));
		// console.log("SECOND: " + game.players);
		var randomNumber = Math.floor(Math.random() * game.players.length);
		game.players[randomNumber].isJudge = true;
		cb(game)
	},

	newRound: function (game, cb) {
		// console.log("TEST IN NEWROUND: " + game)
			
		// PICK A BLACK CARD
		// *****

		// ROTATE WHO THE JUDGE IS && REFILL EACH PLAYER'S HAND
		for (var i = 0; i < game.players.length; i++) {
			
			// ROTATE WHO THE JUDGE IS
			if (game.players[i].isJudge) {
				if (i != game.players.length) {
					game.players[i].isJudge = false;
					game.players[i++].isJudge = true;
				}else{
					game.players[0].isJudge = true;
				};
			};
			
			// REFILL EACH PLAYER'S HAND
			console.log("******THIS*******" + game.players[i])
			if(game.players[i].hand.length < 5) {
				pickOneCard(game.players[i])
			};

			// DISPLAY BLACK CARD
			var randomNumber = Math.floor(Math.random() * 50);
			game.currentBlackCard = deck.blackCards[randomNumber].text
			;
		};
		cb(game)
	},

	pickOneCard: function (hand) {
		
		var randomNumber = Math.floor(Math.random() * 50);
		for (var j = 0; j < Game.usedCards.length; j++) {
			// IF CARD HAS BEEN PICKED, START AGAIN
			if (Game.usedCards[j] == randomNumber) {
				Game.pickOneCard();
			}
			else{
				if (j === Game.usedCards.length) {
					return false;
				};					
			};
		};
		console.log("NEW WHITE CARD: " + deck.whiteCards[randomNumber])
		hand.push(deck.whiteCards[randomNumber]);
		console.log("HAND END pickOneCard: " + hand)	
	},

	playerWithCards: function (playerName, hand) {
		this.name = playerName,
		this.isJudge = false,
		this.hand = hand,
		this.score = 0
	},

	reset: function (){
  		gameList = [];
	}
}
module.exports = Game;