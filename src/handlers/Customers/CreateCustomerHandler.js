const createNewCustomer= require('../../controllers/customers/CreateCustomer');
const { getAllCustomers, getCustomersByID, getCustomerByName } = require('../../controllers/customers/getCustomers');

const createCustomerHandler= async(req, res)=>{
    try{
        const {customer_name, customer_address, customer_phone, customer_email, customer_rut, service_start, service_type}= req.body;
        const response= await createNewCustomer({customer_name, customer_address, customer_phone, customer_email, customer_rut, service_start, service_type});
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getCustomersHandler= async(req, res)=>{
    try{
        const response= await getAllCustomers();
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getCustomersByIDHandler= async(req, res)=>{
    try{
        const {id}= req.params;
        const response= await getCustomersByID(id);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getCustomerByNameHandler= async(req, res)=>{
    try{
        const {name}= req.query;
        const response= await getCustomerByName(name);
        res.status(200).json(response);
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

module.exports= {createCustomerHandler, getCustomersHandler, getCustomersByIDHandler, getCustomerByNameHandler};