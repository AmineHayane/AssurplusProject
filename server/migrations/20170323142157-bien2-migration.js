'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
        return queryInterface.createTable('biens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prixachat: {
        type: Sequelize.STRING
      },
      imageurl: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      dateachat: {
        type: Sequelize.STRING
      },
      evaluation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

   down: (queryInterface /* , Sequelize */) =>
 
   queryInterface.dropTable('biens'), 
  
};
