'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reminder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reminder.belongsTo(models.Users, {foreignKey: 'user_id'});
    }
  }
  Reminder.init({
    user_id: DataTypes.INTEGER,
    judul_pengingat: DataTypes.STRING,
    deskripsi_pengingat: DataTypes.STRING,
    waktu_pengingat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reminder',
  });
  return Reminder;
};