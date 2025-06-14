'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('markdown', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contentHTML: {
        type: Sequelize.TEXT('long'),
        allowNull: false
     },
      contentMarkdown: {
            type: Sequelize.TEXT('long'),
            allowNull: false
      },
        description: {
            type: Sequelize.TEXT('long'),
            allowNull: false
        },
        doctorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            
        },
        specialtyId: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        clinicId: {
            type: Sequelize.INTEGER,
            allowNull: true,
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
    await queryInterface.dropTable('markdown');
  }
};