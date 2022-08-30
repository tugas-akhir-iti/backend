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
        type: Sequelize.STRING(50),
        allowNull: false
      },
      user_email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false
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
      bank_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'Banks'
          },
          key: 'id',
        } 
      },
      user_rekening: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      user_rekening_name: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      user_image: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Roles'
          },
          key: 'id',
        } 
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