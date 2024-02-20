require("dotenv").config();
const cors = require("cors");
const express =  require("express");
const connectDB = require("./connectDb");

const Flight = require("./models/FlightData");
  
   const app = express();

   const PORT = process.env.PORT || 8001;

   connectDB();
    // MiddleWare

 app.use(cors());
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 

 // creating a route 
 app.get("/api/flight",async(req,res) =>{
    
    try {
       const data =  await Flight.find({});
       res.json(data);
     
    } catch (error) {
        res.status(500).json({error : "An error occurred while fetching flight."})
    }
})

   app.get("/",(req,res)=>{
       res.json("Hello Capstone!");
   });

    app.get("*",(req,res)=>{
           res.sendStatus("404");
    });
     
  
    app.listen(PORT,()=>{
        console.log(`server is running on PORT:S{PORT}`)  ;
    });
 