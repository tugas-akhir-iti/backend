'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING(50)
      },
      product_price: {
        type: Sequelize.INTEGER
      },
      product_description: {
        type: Sequelize.TEXT
      },
      product_image: {
        type: Sequelize.STRING
      },
      product_available: {
        type: Sequelize.BOOLEAN
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories'
          },
          key: 'id',
        }        
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
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
    await queryInterface.dropTable('Products');
  }
};