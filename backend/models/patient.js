'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    DOB: DataTypes.DATE,
    gender: DataTypes.STRING,
    guardian_name: DataTypes.STRING,
    guardian_relation: DataTypes.STRING,
    guardian_cnic: DataTypes.STRING,
    guardian_phone: DataTypes.STRING,
    guardian_mobile: DataTypes.STRING,
    address: DataTypes.STRING,
    archive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};