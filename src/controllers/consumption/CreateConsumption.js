const {ConsumptionHistory, CustomersData}= require('../../db');

const createNewConstumption= async (form)=>{
    const {meter_reading, meter_reading_date}= form;

    if(!meter_reading || !meter_reading_date){
        throw new Error('Faltan datos requeridos');
    }

    const newConsumption= {meter_reading, meter_reading_date};

    const createConumption= await ConsumptionHistory.create(newConsumption);

    if(form.customer){
        const customer= await CustomersData.findByPk(form.customer);
        
        if(!customer){
            throw new Error('Este cliente no está registrado');  
        } else{
            await createConumption.setCustomersData(customer);
        }
    }

    return createConumption;
}

module.exports= createNewConstumption;