const express = require('express')
const mongoose= require('mongoose')
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')
const router = require('./src/routes/route') //

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) //data should be in json format

const port =8080
const url = 'mongodb+srv://recho123:Mriphone6@cluster0.zgcafzv.mongodb.net/students'//
app.use(express.json())
app.use('/', router)


mongoose.connect(url).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`) //
    })
}).catch(error=>{
    console.log('error occured at: ',error)
})