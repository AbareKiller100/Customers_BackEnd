const {createNewConsumption}= require('../../controllers/consumption/CreateConsumption');

const createConsumptionHandler= async(req, res)=>{
    try{
        const {meter_reading, meter_reading_date}= req.body;
        const response= await createNewConsumption({meter_reading, meter_reading_date});
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

module.exports= createConsumptionHandler;