'use strict';
module.exports = function(sequelize, DataTypes) {
  var player = sequelize.define('player', {
    player_name: DataTypes.STRING,
    gameWins: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return player;
};