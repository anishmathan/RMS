const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,

    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    Password: {
        type: String,
        required: true,
    },
    ConfirmPassword: {
        type: String,
        required: true,
    },
    Qualification:{
        type:String,
        required:true,
    },
    Skills:{
        type:String,
        required:true,
    },
    YearOfPassing:{
        type:Date,
        // required:true,
        

    },
    Experience:{
        type:Number,
        required:true,

    },
    Language:{
        type:String,
        required:true,

    }
})
module.exports=mongoose.model("users",userSchema);