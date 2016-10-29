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
var io = require('socket.io').listen(server);
var socketCount = 0;
var server = require('http').createServer(app);
var player = require('./models/')["player"];

server.listen(process.env.PORT || 3000, function(){
	console.log('listening on: ' + 3000)
});

var models = require('./models');

// sync the models
models.sequelize.sync();

var routes = require('./controllers/controller.js');
var Game = require('./controllers/game.js');
// connect the routes

// app.use(express.static(__dirname + '/public'));
routes.use(express.static(process.cwd() + '/public'));
// routes.use('/game', routes);
// app.use('/game', routes);
// app.use('/create', routes);
// app.use('/', routes);
// app.use('/update', routes);
// app.use('/create', routes);

var io = require('socket.io')(server);
io.on('connection', function(socket){
	console.log('connectionnn');
  socket.on('user', function(data){
  	console.log('HEYOOOOOOOOO');
  	io.emit('user', data);
  	if (data.array.length >= 2) {
  		Game.startGame(data.array, function(game){
  			console.log(game);
  			io.emit('hey', game);
  		});
  		// res.json(newGame);
  		
  	}
  });
  socket.on('choice', function(html) {
  	io.emit('choice', html);
  });
});

// app.post('/add', function (req, res) {
//     var newGame = Game.addGame(req.body);
//     res.json(newGame);
//     io.emit('gameAdded', 'TREVOR');
// });
// io.on('connection', function(socket){
  // console.log('a user connected');
  // socket.on('chat message', function(data){
  	// console.log('for the love of god')
  // })
  // socket.on('disconnect', function(){
    // console.log('user disconnected');
  // });
// });

// var home = io
//   .of('/home')
//   .on('connection', function (socket) {
//   	console.log("GOD")
//     socket.emit('a message', {
//         that: 'only'
//       , '/home': 'will get'
//     });
//     home.emit('a message', {
//         everyone: 'in'
//       , '/home': 'will get'
//     });
//   });
// var lobbySocket = io
//     .of('/home')
//     .on('connection', function(socket) {
//         console.log('lobby socket connect');
//         // var gameList = Game.list();
//         // socket.emit('lobbyJoin', gameList);
//     });
// io.on('connection', function(socket){
// 	io.emit('stupid', 'work')
//   socket.on('chat message', function(msg){
//   	console.log('I GOT THIS')
//   	console.log(msg)
//     io.emit('chat message', msg);
//   });
// });
// io.on('new user', function(msg){
//   	console.log("THIS THIS")
//   	console.log(msg)
//     io.emit('new user', msg);
//   });

  // socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
// io.on('connection', function(socket){
// 	console.log('user connected to lobby');
// });
  
//   socket.on('disconnect', function(){
//     console.log('user disconnected from lobby');
//   });
// });


// io.on('new user', function(user){
// 	console.log(user)

  // socket.on('chat message', function(msg){
    // io.emit('chat message', msg);
  // });
// });

// io.on('connection', function(socket) {
    // socketCount+=1;
    // console.log('*****SocketCount: ' + socketCount);
    // socket.emit('news', 'yo')
    // socket.on('connectToGame', function(data) {
    //     console.log('server: connectToGame');
    //     var game = Game.getGame(data.gameId);
    //     if(game){
    //       if(!players[data.gameId]) {
    //           players[data.gameId] = { };
    //       }
    //       socket.gameId = data.gameId;
    //       socket.playerId = data.playerId;
    //       players[data.gameId][data.playerId] = socket;
    //       broadcastGame(data.gameId);
    //     } else {
    //         socket.emit('gameError', 'Invalid Game ID');
    //     }
  // });
// socket.on('disconnect', function() {
// 	socketCount-=1;
// 	if(socket.playerId && socket.gameId){
// 	    console.log('socket disconnect ' + socket.playerId);
// 	    delete players[socket.gameId][socket.playerId];
// 	    Game.departGame(socket.gameId, socket.playerId);
// 	    lobbySocket.emit('gameAdded', Game.list());
// 	}
// });

	app.use('/', routes)
	// app.get('/home', routes)