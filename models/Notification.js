'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {

    static associate(models) {
      Notification.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  }
  Notification.init({
    notification_title: DataTypes.STRING,
    notification_desc: DataTypes.STRING,
    notification_link: DataTypes.STRING,
    mark_as_read: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};