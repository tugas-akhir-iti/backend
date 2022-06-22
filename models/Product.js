'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Product.belongsTo(models.Category,{
        foreignKey: 'category_id'
      });

      Product.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Product.hasMany(models.User, {
        foreignKey: 'user_id'
      });
    }
  }
  Product.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};