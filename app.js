const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('nothing');
});

app.get('/name',(req,res)=>{
    res.send('name')
});

app.get('/abc',(req,res)=>{
    res.send('abc');
});

app.use((req,res)=>{
    res.send('Hello world');
});

app.listen(5000);