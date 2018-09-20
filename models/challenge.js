module.exports = function(sequelize, DataTypes) {
  var Challenge = sequelize.define("Challenge", {
    // Giving the Author model a name of type STRING
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue : true
    }
  });
  Challenge.associate = function(models){
    Challenge.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false,
      }
    });
    Challenge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
      as:"challenger"
    });
    Challenge.belongsTo(models.User,{
      foreignKey:{
        allowNull: false,
      },
      as: "ToBeChallenge"
    });
  };

  return Challenge;
};