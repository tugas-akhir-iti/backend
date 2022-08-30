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
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_min_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      product_image: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      product_available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Categories'
          },
          key: 'id',
        }        
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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