const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    username :{
        type:String,
        minlength:3,
        maxlength:30,
        required: true,
        unique: true,
    },
    email :{
        type:String,
        // match: /@/,
        required: true,
        unique: true,
    },
    password : {
        type:String,
        required: true,
    },
    avatar :{
        type:String,
        
    },
    created_at :{
        type: Date,
        default:Date.now()
    },
    updated_at :{
        type: Date,
        default:Date.now()
    }
})


const userModel= mongoose.model("users", userSchema);

module.exports={
    userModel
}