'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
     static associate(models) {
      Product.belongsTo(models.Category,{
        foreignKey: 'category_id',
      });

      Product.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Product.hasMany(models.Order, {
        foreignKey: 'product_id'
      });
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_description: DataTypes.TEXT,
    product_image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};