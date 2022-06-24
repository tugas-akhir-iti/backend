'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
     static associate(models) {
      Category.hasMany(models.Category, {
        foreignKey: 'category_id',
      });
    }
  }
  Category.init({
    category_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};