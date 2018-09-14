module.exports = function (sequelize, DataTypes) {
  var challenge = sequelize.define("challenge", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });
  return challenge;
};
