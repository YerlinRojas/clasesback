import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

//hora 15hrs 
//paginacion desde el backend

const userSchema = new mongoose.Schema({
    firts_name:{
        type: String,
        index: true
    },
    las_name: String,
    email:String,
    gender:String
})

userSchema.plugin(mongoosePaginate)

export default mongoose.model('users',userSchema)

