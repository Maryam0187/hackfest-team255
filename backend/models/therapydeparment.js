'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class therapyDeparment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  therapyDeparment.init({
    name: DataTypes.STRING,
    amount_per_session: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'therapyDeparment',
  });
  return therapyDeparment;
};