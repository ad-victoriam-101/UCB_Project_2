module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    // Giving the Author model a name of type STRING
    gameScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Score.associate = function(models) {
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  Score.associate = function(models) {
    Score.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Score;
};
