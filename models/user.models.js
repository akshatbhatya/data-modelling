import mongoose, { Mongoose } from "mongoose";

const userSchema=new Mongoose.schema({
    username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        min:[6,"password must be 6 characters"],
        max:12
    }
},{timestamps:true});

export const user=mongoose.model('user',userSchema)