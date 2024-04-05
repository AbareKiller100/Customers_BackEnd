const {CustomersData, ConsumptionHistory}= require('../../db');

const createNewConstumption= async (form)=>{
    const {meter_reading, meter_reading_date}= form;

    console.log(form)

    if(!meter_reading || !meter_reading_date){
        throw new Error('Faltan datos requeridos');
    }

    const newConsumption= {meter_reading, meter_reading_date};

    const createConsumption= await ConsumptionHistory.create(newConsumption);

    console.log(createConsumption);

    if(form.CustomersDatumCustomerId){
        const customer= await CustomersData.findByPk(form.CustomersDatumCustomerId);
        console.log(customer);
        if(!customer){
            throw new Error('Este cliente no está registrado');  
        } else{
            createConsumption.CustomersDatumCustomerId = customer.dataValues.customer_id;
            await createConsumption.save();
        }
    } else{
        throw new Error('Este historial no corresponde a ningún cliente');
    }

    return createConsumption;
}

module.exports= createNewConstumption;