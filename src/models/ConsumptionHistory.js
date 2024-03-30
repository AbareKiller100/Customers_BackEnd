const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'ConsumptionHistory',
    {
      cunsumption_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      meter_reading: {
        type: DataTypes.DECIMAL(7,2),
        allowNull: false
      },
      meter_reading_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
};
