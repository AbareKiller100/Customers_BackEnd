const { where, Op } = require('sequelize');
const {CustomersData}= require('../../db');
const diacriticless = require('diacriticless');

const getAllCustomers= async ()=>{
    const customers= await CustomersData.findAll();

    return customers;
}

const getCustomersByID= async(id)=>{
    const customer= await CustomersData.findByPk(id);

    return customer;
}

const getCustomerByName= async(name)=>{
    // Remover las tildes del nombre proporcionado
    const nombreSinTilde= diacriticless(name);

    // Buscar clientes cuyo nombre incluya el string proporcionado, sin importar mayúsculas o minúsculas
    const customers= await CustomersData.findAll({
        where: {
            customer_name:{
                [Op.iLike]: `%${name}%`
            }
        }
    })

    // Si no se encuentran clientes que coincidan con el nombre proporcionado,
    // buscar entre todos los clientes y filtrar aquellos cuyos nombres sin tilde
    // incluyan el nombre proporcionado
    if(!customers){
        const customersDB= await CustomersData.findAll();

        // Remover las tildes de los nombres de todos los clientes en la base de datos
        const clientesSinTilde= customersDB.map((cust)=> cust.dataValues.SecondName= diacriticless(cust.dataValues.customer_name));
        
        // Filtrar los clientes cuyos nombres sin tilde incluyan el nombre proporcionado
        customers= clientesSinTilde.filter((cliente)=> cliente.dataValues.SecondName.includes(nombreSinTilde));
    }

    return customers;
}

module.exports= {getAllCustomers, getCustomersByID, getCustomerByName};