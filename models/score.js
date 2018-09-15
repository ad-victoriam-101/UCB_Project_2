module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    // Giving the Author model a name of type STRING
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Score.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Score;
};
