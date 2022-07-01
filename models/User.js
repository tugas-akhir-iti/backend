"use strict";
const { Model, INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: "user_id",
      });
      this.hasMany(models.Order, {
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_regency: DataTypes.STRING,
      user_address: DataTypes.TEXT,
      user_phone: DataTypes.STRING,
      user_image: DataTypes.TEXT,
      user_role: DataTypes.INTEGER,
      user_province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
