const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect("mongodb+srv://ldplayer:ldplayer@cluster0.c2cz4.mongodb.net/productADMIN?retryWrites=true&w=majority" , { useNewUrlParser : true, useUnifiedTopology : true},(err)=>{
    if(err){
        console.error("Error ket noi")
    }else{
        console.log("Connect success with MongoDB!!!")
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
app.use('/Storey',require('./routes/index'));

app.listen(port, function(err){
    if (err) console.log(err);
    console.log(`Server listening on PORT http://localhost:${port}`);
  }); 