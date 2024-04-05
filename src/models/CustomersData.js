const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  const CustomersData= sequelize.define(
    'CustomersData',
    {
      customer_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      customer_phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      customer_email: {
        type: DataTypes.STRING,
        unique: true,
      },
      customer_rut: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      service_start: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      service_type: {
        type: DataTypes.ENUM('Luz', 'Agua'),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  CustomersData.beforeCreate((customerData, options)=>{
    const digVerif= calculo(customerData.customer_rut);
    customerData.customer_rut += `-${digVerif}`;
  })
  
  const calculo= (rut)=>{
    let factor=1;
    let sum=0;
    let resto=0;
  
    for(let i = 0; i < rut.length; i++){
      factor+=1
      
      if(factor>7){
        factor=2;
      }
      rut[i]= Number(rut[i]);
      rut[i]*(factor);
  
      sum= sum+rut[i];
    }
  
    resto= sum%11;
  
    if(resto === 0){
      return '0';
    } else if(resto === 1){
      return 'K'
    } else{
      return String(resto)
    }
  }
};

