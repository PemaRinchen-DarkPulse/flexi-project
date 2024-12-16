const express=require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path');
dotenv.config({path:path.resolve(__dirname,'./config/.env')});
const port=process.env.PORT;
const mongo_url=process.env.MONGO_URL;

app.get("/",(req,res)=>{
    res.send("Hello from the port")
})

app.listen(port,()=>{
    console.log(port);
})