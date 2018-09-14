module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    // Giving the Author model a name of type STRING
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Game;
};
