'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      DOB: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      guardian_name: {
        type: Sequelize.STRING
      },
      guardian_relation: {
        type: Sequelize.STRING
      },
      guardian_cnic: {
        type: Sequelize.STRING
      },
      guardian_phone: {
        type: Sequelize.STRING
      },
      guardian_mobile: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      archive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patients');
  }
};