const mongoose = require('mongoose')
let schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    soluong: {
        type: String,
        require: true,
    },
    price: Number,
    describe: String

})
module.exports = mongoose.model('products_admin', schema)