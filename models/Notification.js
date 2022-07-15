'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Notification.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });

      Notification.belongsTo(models.Order, {
        foreignKey: 'order_id'
      });
    }
  }
  Notification.init({
    notification_title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    mark_as_read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};