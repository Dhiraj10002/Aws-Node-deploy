const express = require('express');
const app = express();

app.get('/api/get',(req, res) => {
    res.send({message: "hello i am from backend"})
})

app.listen(8000, () =>{
    console.log("server is running on port 8000");
})