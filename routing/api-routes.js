var deck = require('./../assets/cards.js');
module.exports = function(app){
	app.get('/api/cards', function(req, res){
		for (var i = 0; i <= 4; i++) {
			Things[i]
		}
		res.json(deck);
	});
}