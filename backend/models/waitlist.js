'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaitList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  WaitList.init({
    patient_id: DataTypes.INTEGER,
    remarks: DataTypes.TEXT,
    status: DataTypes.STRING,
    entryTime: DataTypes.DATE,
    archive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'WaitList',
  });
  return WaitList;
};