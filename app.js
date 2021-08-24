const express=require('express');
const app=express();

const path =require('path');
const dotenv=require('dotenv');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const employeeRoutes=require('./routes/employees')
 dotenv.config({path:'./config.env'})
// connecting to mongodb database



mongoose.connect(process.env.DATABASE_LOCAL,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 app.set('views',path.join(__dirname,'views'));  
 app.set('view engine','ejs');
 app.use(express.static('public'));

app.use(employeeRoutes);
const port=process.env.PORT;
app.listen(port,()=>{

    console.log('server is started');
})