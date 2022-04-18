const mongoose = require('mongoose')    
const AccountUser = mongoose.Schema({
    
    tentaikhoan : {
        type : String,
        require: true
    },
    tennguoidung : {
        type : String,
        require: true
    },
    matkhau : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
})
module.exports =  mongoose.model( 'account_user' , AccountUser)