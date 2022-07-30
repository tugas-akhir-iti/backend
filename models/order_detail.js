'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Detail extends Model {
    static associate(models) {
      Order_Detail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
      Order_Detail.belongsTo(models.Order, {
        foreignKey: 'order_id'
      });
    }
  }
  Order_Detail.init({
    order_detail_qty: DataTypes.INTEGER,
    order_detail_price: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Detail',
  });
  return Order_Detail;
};