const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    username : {
        type:String,
    },
    role:{
        type:String,
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})



exports.User = mongoose.model("user",userSchema)