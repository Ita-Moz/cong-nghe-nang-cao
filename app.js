const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://manh123:a123@cluster0.c2cz4.mongodb.net/productADMIN?retryWrites=true&w=majority" , { useNewUrlParser : true, useUnifiedTopology : true},(err)=>{
    if(err){
        console.error("Error ket noi")
    }else{
        console.log("Connect thanh cong MONGODB!!!")
    }
})


//public static
app.use('/public',express.static('public'));

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//views engine
app.set('view engine', 'ejs');
app.set('views', "./views");

//router
app.use('/admin',require('./routes/index'));

app.listen(3000,()=>{
    console.log('Server running!!!')
})