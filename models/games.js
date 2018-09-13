module.exports = function(sequelize, DataTypes) {
  var game = sequelize.define("game", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });



  return game;
};
