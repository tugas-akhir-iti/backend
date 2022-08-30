'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery extends Model {
    static associate(models) {
      Delivery.hasMany(models.Order, {
        foreignKey: 'delivery_id'
      });
    }
  }
  Delivery.init({
    delivery_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Delivery',
  });
  return Delivery;
};