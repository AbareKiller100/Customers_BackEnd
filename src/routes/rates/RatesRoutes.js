const express= require('express');
const router= express.Router();
const {createRateHandler}= require('../../handlers/Rates/CreateRateHandler');

router.post('/post', createRateHandler);

module.exports= router;
