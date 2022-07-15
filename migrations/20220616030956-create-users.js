'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING(50)
      },
      user_email: {
        type: Sequelize.STRING(50)
      },
      user_password: {
        type: Sequelize.STRING
      },
      user_province: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      user_regency: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      user_address: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_phone: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      user_image: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_role: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Users');
  }
};