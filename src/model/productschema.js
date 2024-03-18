const mongoose = require('mongoose')
const schema = mongoose.Schema

const productsDetailSchema = new schema({
    productname:{
        type:'string',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const productschema = mongoose.model('productdetails',productsDetailSchema)
module.exports= productschema