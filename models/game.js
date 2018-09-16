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
  Game.associate = function(models) {
    // Associating User with scores
    // When an user is deleted, also delete any associated Posts
    Game.hasMany(models.Challenge, {
      onDelete: "cascade"
    });
  };
  return Game;
};
