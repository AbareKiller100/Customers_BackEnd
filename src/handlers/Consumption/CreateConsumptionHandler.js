const createNewConsumption= require('../../controllers/consumption/CreateConsumption');
const { getConsumptionHistory } = require('../../controllers/consumption/getConsumption');

const createConsumptionHandler= async(req, res)=>{
    try{
        const form= req.body;
        const response= await createNewConsumption(form);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getHistoryHandler= async(req, res)=>{
    try{
        const {id}= req.params;
        const response= await getConsumptionHistory(id);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

module.exports= {createConsumptionHandler, getHistoryHandler};