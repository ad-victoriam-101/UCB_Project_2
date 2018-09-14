module.exports = function (sequelize, DataTypes) {
  var Challenge = sequelize.define("Challenge", {
    // Giving the Author model a name of type INTEGER
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    firstUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    secondUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });
  return Challenge;
};
