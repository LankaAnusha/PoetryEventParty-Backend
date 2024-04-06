const {Schema}=require('mongoose')
const EventSchema=new Schema({
    imgURL:String,
    title:String,
    content:String
})
module.exports=EventSchema