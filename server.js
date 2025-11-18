const express = require('express');
const app = express();
require('dotenv').config();

app.get('/api/get',(req, res) => {
    res.send({message: "hello i am from backend"})
})

app.get('/api/get_user_details',(req, res) => {
    res.send({
        user:{
            name: "Dhiraj",
            age: 24,
            city: "Bangalore"
        },env:process.env.NAME
    })
})


app.listen(process.env.PORT, () =>{
    console.log("server is running on port 8000");
})