const {createNewPay}= require('../../controllers/payment/CreatePay');

const createPaymentHandler= async(req, res)=>{
    try{
        const {payment_date, payment_amount, pay_method}= req.body;
        const response= await createNewPay({payment_date, payment_amount, pay_method});
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

module.exports= createPaymentHandler;