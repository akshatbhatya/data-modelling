import mongoose, { Mongoose } from "mongoose";

const todoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true});

const todo=mongoose.model('todo',todoSchema);