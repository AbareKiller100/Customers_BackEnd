const express= require('express');
const router= express.Router();
const {createCustomerHandler, getCustomersHandler, getCustomersByIDHandler, getCustomerByNameHandler}= require('../../handlers/Customers/CreateCustomerHandler');

router.post('/post', createCustomerHandler);
router.get('/getAll', getCustomersHandler);
router.get('/:id', getCustomersByIDHandler);
router.get('/name', getCustomerByNameHandler);

module.exports= router;
