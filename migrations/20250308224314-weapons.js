"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("weapons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "vehicles", // Name of the referenced table
          key: "id", // Key in the referenced table
        },
        onDelete: "CASCADE", // Action to take when the associated user is deleted
        onUpdate: "CASCADE", // Action to take when the associated user is updated
      },
      weapon: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      attack: {
        type: Sequelize.STRING,
      },
      range: {
        type: Sequelize.STRING,
      },
      ammo: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      crewFired: {
        type: Sequelize.BOOLEAN,
      },
      slots: {
        type: Sequelize.FLOAT,
      },
      specialRules: {
        type: Sequelize.STRING,
      },
      cost: {
        type: Sequelize.FLOAT,
      },
      sponsor: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("weapons");
  },
};
