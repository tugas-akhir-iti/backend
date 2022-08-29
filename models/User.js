"use strict";
const {
  Model,
  INTEGER
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: "user_id",
      });
      this.hasMany(models.Order, {
        foreignKey: "user_id",
      });
      this.hasMany(models.Notification, {
        foreignKey: "user_id",
      });
      this.hasMany(models.Question, {
        foreignKey: "user_id",
      });
      this.hasMany(models.Cart, {
        foreignKey: "user_id",
      });
      this.belongsTo(models.Bank, {
        foreignKey: "bank_id",
      });
      this.belongsTo(models.Role, {
        foreignKey: "role_id",
      });
    }
  }
  User.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_province: DataTypes.STRING,
    user_regency: DataTypes.STRING,
    user_address: DataTypes.TEXT,
    user_phone: DataTypes.STRING,
    bank_id: DataTypes.INTEGER,
    user_rekening: DataTypes.STRING,
    user_rekening_name: DataTypes.STRING,
    user_image: DataTypes.TEXT,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "User",
  });
  return User;
};