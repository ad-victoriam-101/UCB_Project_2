module.exports = function(sequelize, DataTypes) {
  var score = sequelize.define("score", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  return score;
};
