'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.FLOAT
      },
      gear: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.STRING
      },
      handling: {
        type: Sequelize.FLOAT
      },
      crew: {
        type: Sequelize.FLOAT
      },
      slots: {
        type: Sequelize.FLOAT
      },
      key_words: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicles');
  }
};