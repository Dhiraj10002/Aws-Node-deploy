const express = require('express');
const app = express();

app.get('/api/get',(req, res) => {
    res.send({message: "hello i am from backend"})
})

app.get('/api/get_user_details',(req, res) => {
    res.send({
        user:{
            name: "Dhiraj",
            age: 24,
            city: "Bangalore"
        }
    })
})


app.listen(8000, () =>{
    console.log("server is running on port 8000");
})