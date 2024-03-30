const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const customersRouter= require('./customers/CustomersRoutes');
const consumptionRouter= require('./consumption/ConsumptionRoutes');
const paymentRouter= require('./payment/PaymentRoutes');
const rateRouter=require('./rates/RatesRoutes')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/Customer', customersRouter);
router.use('/Consumption', consumptionRouter);
router.use('/Payment', paymentRouter);
router.use('/Rate', rateRouter);

module.exports= router;