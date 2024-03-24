import mongoose from "mongoose";

const subTodoSchema=new mongoose.Schema({

    content:{
        type:String,
        required:[true,"title is required"]
    },
    iscompleted:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Typesype.ObjectId,
        ref:"user"

    },
    subtodo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }

    ]

},{timestamps:true});

export  const subtodo=mongoose.model("subtodo",subTodoSchema);