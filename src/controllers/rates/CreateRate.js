const {Rates, CustomersData}= require('../../db');

const createNewRate= async(form)=>{
    const {rate_consumption_unit, fixed_rate, monthly_fixed_charge, consumption_hourly_charge, operating_expenses}= form

    if (!rate_consumption_unit || !fixed_rate || !monthly_fixed_charge || !consumption_hourly_charge || !operating_expenses) {
        throw new Error('Faltan datos requeridos')
    }

    let service_type=''
    let customer=null;

    if(form.customer){
        customer= await CustomersData.findByPk(form.customer);
        if(!customer){
            throw new Error('Este cliente no está registrado')  
        }
        service_type= customer.dataValues.service_type
    }

    const newRate= {service_type, rate_consumption_unit, fixed_rate, monthly_fixed_charge, consumption_hourly_charge, operating_expenses}

    const createRate= await Rates.create(newRate)

    if(customer){
        await createRate.setCustomersData(customer);
    }

    return createRate;
}

module.exports= createNewRate;