'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HealthStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HealthStatistic.belongsTo(models.Users, {foreignKey: 'user_id'});
    }
  }
  HealthStatistic.init({
    user_id: DataTypes.INTEGER,
    berat_badan: DataTypes.STRING,
    tinggi_badan: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    umur: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HealthStatistic',
  });
  return HealthStatistic;
};