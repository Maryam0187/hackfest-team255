'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnrolledList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EnrolledList.init({
    patient_id: DataTypes.INTEGER,
    slot_id: DataTypes.INTEGER,
    therapyType_id: DataTypes.INTEGER,
    therapyStatus: DataTypes.STRING,
    payment_id: DataTypes.INTEGER,
    archive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'EnrolledList',
  });
  return EnrolledList;
};