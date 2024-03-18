const express = require('express')
const router = express.Router()
const studentSchema = require('../model/studentSchema')

router.post('/registerStudent', async(req,res)=>{
    const data = req.body //pick my data from the body

    try{
        const studentData = new studentSchema(data) //while using the student schema pick the data from the body
        await studentData.save() //keyword await proccess must flow 
        return res.send(data).status(200)
    }
    catch(error){
        res.send(error).status(400)
    }
}) //asyncronusn function request and response
module.exports = router
