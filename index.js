require("dotenv").config()
const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors');
const DB_URL=process.env.MONGODB_URL
const EventModel=require('./Models/EventModel')
const app=express()
app.use(cors())
app.use(bodyParser.json())
const data=[
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285cda678b1829dc43227a_Art_Circle_AdobeCreativeCloudExpress%20(1).gif",
        title:"The Art Circle",
        content:"Standing in a corner alone is not allowed at PHP! Throw the awkwardness out of the window and get ready for some amazing activities, stories, poems and laughter. You can share your thoughts, and listen to interesting stories that others share."
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afac38bbc65b28058d7_Music_therapy_AdobeCreativeCloudExpress.gif",
        title:"Music Therapy",
        content:"PHP Music Therapy comes with a twist. Yes, there is music and there is singing but not the boring way. You have to sing with all your heart. So, go loud and don't worry about anyone judging you because we'll all join you. Just feel happy with every beat!"
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afab760cc735e363846_Dabba_Party_AdobeCreativeCloudExpress.gif",
        title:"The Dabba Party",
        content:"Remember school's lunch time when everyone would share their dabbas? We bring back those times at PHP with our exclusive potluck party. Bring your favourite dish to share and end up with a feast!"
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afa72174b68c65943ac_Friend_AdobeCreativeCloudExpress.gif",
        title:"Find your friend-mate",
        content:"Our house party vibe can turn strangers into friends in no time. Don't believe? Attend a party and see for yourself. You will find people from different fields whose thoughts and vibes match yours. And our interesting party events will make sure you find one quickly!"
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afaa0603f8505532ca2_Stage_AdobeCreativeCloudExpress.gif",
        title:"Feel The Stage",
        content:"Enjoy the stunning performances of amazing poets, singers, artists and people like you! Yes, it's a people's party and we open the stage for everyone who wants to show their hidden talent. So, leave your hesitation aside and get on the stage!"
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afa8bc591724b7f8b2c_Party_games_AdobeCreativeCloudExpress.gif",
        title:"P.S. We Love Games",
        content:"And trust us, you are going to love them too! There are ice-breakers, hilarious games and then there are games that will keep the good vibes alive! We love surprises and that's why we'll keep the games a surprise. Join us to experience them."
    }
]
//data is inserted when a server restarts...so make sure to execute the following lines only once
// for(let i of data)
// {
//     const Event=new EventModel(i)
//     Event.save()
// }
app.get('/geteventsdata',async (req,res)=>{
    const getData=await EventModel.find({})
    res.json(getData)
})
app.listen(3002,()=>{
    mongoose.connect(DB_URL)
    console.log("Server Started")
})