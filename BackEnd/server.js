const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const medicines =require('./routes/medicines');

const config = require('./config/config');

app.use(bodyParser.json());
mongoose.connect (config.db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.get("/",(req,res)=>{
    res.send("Hellow World");
});
app.get("/user",(req,res)=>{
    res.send("Users are here.");
});

app.use('/medicines' , medicines);

app.listen(process.env.port || config.app.port ,()=>{
    console.log("Server is listening in port 3000 !");
});