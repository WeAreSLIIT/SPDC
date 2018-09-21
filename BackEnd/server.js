const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const medicines =require('./routes/medicines');
const medicines =require('./routes/orders');
const medicines =require('./routes/users');

const config = require('./config/config');

app.use(bodyParser.json());
mongoose.connect (config.db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("connected", () => {
    console.log(`connected to database ${config.db}`);
  });
  mongoose.connection.on("error", err => {
    console.log(`database connection failed ${err}`);
  });

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