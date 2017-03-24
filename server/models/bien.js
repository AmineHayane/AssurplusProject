
module.exports = function(sequelize, DataTypes) {
  var biens = sequelize.define('biens', {
    prixachat: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    description: DataTypes.STRING,
    dateachat: DataTypes.STRING,
    evaluation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  return biens;
};

