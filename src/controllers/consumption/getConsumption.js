const {ConsumptionHistory, CustomersData}= require('../../db');

const getConsumptionHistory= async(id)=>{
    const customerConsumption= await ConsumptionHistory.findOne({
        where: {
            customer_id: id
        }
    });

    return customerConsumption;
}

module.exports= {getConsumptionHistory}