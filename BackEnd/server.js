const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const medicines =require('./routes/medicines');
const orders =require('./routes/orders');
const users =require('./routes/users');
const points =require('./routes/points');

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
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hellow World");
});
app.get("/user",(req,res)=>{
    res.send("Users are here.");
});

app.use('/medicines' , medicines);
app.use('/users' , users);
app.use('/orders' , orders);
app.use('/points' , points);

app.listen(process.env.port || config.app.port ,()=>{
    console.log("Server is listening in port 3000 !");
});