const express = require('express');
const app = express();

app.use('/user',(req,res,next)=>{
    next();
    res.send('Hello world');
},(req,res)=>{
    res.send('2nd Response');
}); 

app.listen(5000);