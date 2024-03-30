const express= require('express');
const router= express.Router();
const {createConsumptionHandler}= require('../../handlers/Consumption/CreateConsumptionHandler');

router.post('/post', createConsumptionHandler);

module.exports= router;
