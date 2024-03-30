const {createNewRate}= require('../../controllers/payment/CreatePay');

const createRateHandler= async(req, res)=>{
    try{
        const {rate_consumption_unit, fixed_rate, monthly_fixed_charge, consumption_hourly_charge, operating_expenses}= req.body;
        const response= await createNewRate({rate_consumption_unit, fixed_rate, monthly_fixed_charge, consumption_hourly_charge, operating_expenses});
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

module.exports= createRateHandler;