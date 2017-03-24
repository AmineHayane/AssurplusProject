

module.exports = function(sequelize, DataTypes)  {

  const User = sequelize.define('User', {
    emailUser: {

      type: DataTypes.STRING, 
      allowNull: false,
  
}, 


    passwordUser: {type: DataTypes.STRING, allowNull: false,}, 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }, {
    
  });
  return User;
}; 

