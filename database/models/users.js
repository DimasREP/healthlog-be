'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.HealthStatistic, {foreignKey: 'user_id'})
      Users.hasMany(models.Reminder, {foreignKey: 'user_id'})
    }
  }
  Users.init({
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};