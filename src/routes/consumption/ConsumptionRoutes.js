const express= require('express');
const router= express.Router();
const {createConsumptionHandler, getHistoryHandler}= require('../../handlers/Consumption/CreateConsumptionHandler');

router.post('/post', createConsumptionHandler);
router.get('/:id', getHistoryHandler);

module.exports= router;
