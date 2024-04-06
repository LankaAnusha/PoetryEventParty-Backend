const EventSchema=require('../Schemas/EventSchema')
const mongoose=require('mongoose')
const EventModel=mongoose.model("Event",EventSchema)
module.exports=EventModel