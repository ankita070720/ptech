const mongoose =require('mongoose');
//Schema
const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    emaiId:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    },
   },
   {timestamps:true}
)
//model
const User=mongoose.model("user",UserSchema);
module.exports =User;