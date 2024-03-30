const express= require('express');
const router= express.Router();
const {createPaymentHandler}= require('../../handlers/Payment/CreatePaymentHandler');

router.post('/post', createPaymentHandler);

module.exports= router;
