const mongoose = require('mongoose')
let schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image:String,
    soluong: {
        type: Number,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    describe: String

})
module.exports = mongoose.model('products_admin', schema)