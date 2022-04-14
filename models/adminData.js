const mongoose = require('mongoose')
let schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        default:"Storey-name"
    },
    image:String,
    soluong: {
        type: Number,
        require: true,
        default:1
    },
    price:{
        type: Number,
        require: true,
        default:1000
    },
    describe:{
        type: String,
        default:"..."
    },

})
module.exports = mongoose.model('products_admin', schema)