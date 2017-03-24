

module.exports = {
  up: (queryInterface, Sequelize) => 
     queryInterface.createTable('Users', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, 
      },
      emailUser: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      passwordUser: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE, 
      }, 
     }),   
 
  down: (queryInterface /* , Sequelize */) => 
    
    queryInterface.dropTable('Users'), 
  
};