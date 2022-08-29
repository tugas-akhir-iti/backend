'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Order.belongsTo(models.Order_Status, {
        foreignKey: 'status_id'
      });

      Order.hasMany(models.Order_Detail, {
        foreignKey: 'order_id'
      });
    }
  }
  Order.init({
    order_price: DataTypes.INTEGER,
    order_transfer_image: DataTypes.STRING,
    status_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};