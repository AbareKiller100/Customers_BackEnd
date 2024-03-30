const {CustomersData}= require('../../db')

const createNewCustomer= async (form)=>{
    const {name, address, phone, email, rut, service_start, service_type}= form;

    if(!name || !address || !phone || !rut || !service_start || !service_type){
        throw new Error('Faltan datos requeridos');
    }

    const newCustomer={}
    
    if(email){
        newCustomer= {name, address, phone, email, rut, service_start, service_type}
    } else{
        newCustomer= {name, address, phone, rut, service_start, service_type}
    }

    const createCustomer= await CustomersData.create(newCustomer);
    
    return createCustomer;
}

module.exports= createNewCustomer;
