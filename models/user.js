import moongoose from 'mongoose';

let userData=new moongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},{timeStamp:true})

export const userSchema=moongoose.model("userSchema",userData);