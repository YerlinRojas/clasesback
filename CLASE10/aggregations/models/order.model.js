import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    name:String,
    size: {String,
    type:String,
    enum:["small","medium","large"],
    default:"medium"
},
price:Number,
quantity: Number,
date: Date
})

const orderModel = mongoose.model('orders', orderSchema)

export default orderModel

//clave: 
//9bnPPAq9xBLloP4U