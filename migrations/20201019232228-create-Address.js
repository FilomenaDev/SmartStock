'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Addresses', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId:{
        type:Sequelize.INTEGER,
        references:{model:'Users',key:'id'},
        onUpdete:'CASCADE',
        onDelete:'CASCADE'
      },
      main:{
        type:Sequelize.INTEGER
      },
      second:{
        type:Sequelize.INTEGER
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Addresses');
     
  }
};
