import mongoose from 'mongoose'

const userCollection = 'users'

//crear esqema de usuarios 
const userSchema = new mongoose.Schema({
    firts_name: String,
    last_name: String,
    email:{
        type: String,
        unique: true
    },
})

mongoose.set('strictQuery', false)

//crear modelo conexion con la BD
const userModel = mongoose.model(userCollection, userSchema)

export default userModel