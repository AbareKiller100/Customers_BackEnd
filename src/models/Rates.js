const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Rates',
    {
      rate_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      service_type: {
        type: DataTypes.ENUM('Luz', 'Agua'),
        allowNull: false
      },
      rate_consumption_unit: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      fixed_rate: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      monthly_fixed_charge: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      consumption_hourly_charge: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      operating_expenses: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
};
