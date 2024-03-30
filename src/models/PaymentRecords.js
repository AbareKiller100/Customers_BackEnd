const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "PaymentRecords", {
      pay_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      payment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      payment_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      pay_method: {
        type: DataTypes.ENUM('Efectivo', 'Transferencia'),
        allowNull: false
      },
      pay_status: {
        type: DataTypes.ENUM('Pendiente', 'Pagado', 'Vencido'),
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
};
