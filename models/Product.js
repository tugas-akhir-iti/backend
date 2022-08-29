'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });

      Product.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Product.hasMany(models.Order_Detail, {
        foreignKey: 'product_id'
      });

      Product.hasMany(models.Question, {
        foreignKey: 'product_id'
      });

      Product.hasMany(models.Cart, {
        foreignKey: 'product_id'
      });
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_stock: DataTypes.INTEGER,
    product_min_order: DataTypes.INTEGER,
    product_description: DataTypes.TEXT,
    product_image: DataTypes.STRING,
    product_available: DataTypes.BOOLEAN,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};