const {CustomersData}= require('../../db')

const createNewCustomer= async (form)=>{
    const {customer_name, customer_address, customer_phone, customer_email, customer_rut, service_start, service_type}= form;

    if(!customer_name || !customer_address || !customer_phone || !customer_email || !customer_rut || !service_start || !service_type){
        throw new Error('Faltan datos requeridos');
    }

    // if(!customer_name){
    //     throw new Error('Faltan datos requeridos (name)');
    // }

    // if(!customer_address){
    //     throw new Error('Faltan datos requeridos (address)');
    // }

    // if(!customer_phone){
    //     throw new Error('Faltan datos requeridos (phone)');
    // }

    // if(!customer_rut){
    //     throw new Error('Faltan datos requeridos (rut)');
    // }

    // if(!service_start){
    //     throw new Error('Faltan datos requeridos (service_start)');
    // }

    // if(!service_type){
    //     throw new Error('Faltan datos requeridos (service_type)');
    // }

    let newCustomer={}
    
    if(customer_email){
        newCustomer= {customer_name, customer_address, customer_phone, customer_email, customer_rut, service_start, service_type}
    } else{
        newCustomer= {customer_name, customer_address, customer_phone, customer_rut, service_start, service_type}
    }

    const createCustomer= await CustomersData.create(newCustomer);
    
    return createCustomer;
}

module.exports= createNewCustomer;
