import express from 'express'
import userModel from './models/user.model.js'
import mongoose from 'mongoose'

const app = express()
app.use(express)

app.get('/', async(req,res) =>{
    try {
        const users = await userModel.find()
        res.send({result: 'success', payload: users})
    } catch (error) {
        console.error(error)
        res.setDefaultEncoding({result: 'error', error})
    }
})

const url = "mongodb+srv://yerlinrojas808:9bnPPAq9xBLloP4U@yerlincluster.pxzyemm.mongodb.net/?retryWrites=true&w=majority"
//conctar con la bd
mongoose.connect(URL, {
    dbName:'clase_09'
})
    .then(()=>{
        console.log('DB connected!!')
        app.listen(8080)
    })
    .catch(e=>{
        console.log("cant connect to DB")
    })



