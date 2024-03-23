import mongoose from "mongoose";


const userModel=new mongoose.Schema({},{});


export const userData=mongoose.model("userData",userModel);