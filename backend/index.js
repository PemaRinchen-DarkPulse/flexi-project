const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello I am Pema Rinchen Please leave a message")
})

app.listen(3000,()=>{
    console.log("Server Unning on Port 3000")
})