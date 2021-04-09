import { Model, DataType } from 'sequelize-typescript';

export default (sequelize, DataTypes: typeof DataType) => {
  class Cashier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Cashier.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      yearsOfExpiriense: DataTypes.INTEGER,
      sex: DataTypes.INTEGER,
      cityWork: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Cashier',
    },
  );
  return Cashier;
};
