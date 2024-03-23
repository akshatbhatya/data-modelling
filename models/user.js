import moongoose from 'mongoose';

let userData=new moongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    }
    
},{timeStamp:true})