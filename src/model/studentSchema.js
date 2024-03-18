const mongoose = require('mongoose')
const schema = mongoose.Schema

const studentRegSchema = new schema({
    username:{
        type:'string',
        required:true
    },
    email:{
        type:'string',
        required:true
    },
    password:{
        type:'string',
        required:true
    }
})

const studentRegistration = mongoose.model('StudentDetails',studentRegSchema) //name and informing it which schema to use
module.exports= studentRegistration // makes the schema available to other files