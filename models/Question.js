'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Question.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  Question.init({
    question: DataTypes.STRING,
    answare: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};