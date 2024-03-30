const {PaymentRecords, CustomersData}= require('../../db')

const createNewPay= async (form)=>{
    const {payment_date, payment_amount, pay_method}= form

    if(!payment_amount || !pay_method){
        throw new Error('Faltan datos requeridos')
    }

    const newPayment= {payment_date, payment_amount, pay_method};
    const createPayment= await PaymentRecords.create(newPayment);

    if(form.customer){
        const customer= await CustomersData.findByPk(form.customer);
        if(!customer){
            throw new Error('Este cliente no está registrado');
        } else{
            await createPayment.setCustomersData(customer);
        }
    }

    return createPayment;
}

module.exports= createNewPay;