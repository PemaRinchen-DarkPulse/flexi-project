const express=require('express')
const path=require('path')
const app=express()
require('dotenv').config({path:path.resolve(__dirname,'../.env')})

const port=process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello from Home");
});

app.get('/about', (req, res) => {
    res.send("Hello from About");
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});