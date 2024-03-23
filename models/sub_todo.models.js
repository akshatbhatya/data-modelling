import mongoose, { Mongoose } from "mongoose";

const userSchema=new Mongoose.schema({
    username:{
            type:String,
            required:true,
            unique:true,

    }
},{});

export const user=mongoose.model('user',userSchema)