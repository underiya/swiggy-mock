const mongoose= require("mongoose");

const postSchema=mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:"users", required:true },
    title:{type:String , maxlength:100},
    category:{
        type:String,
        enum:['Development', 'Design', 'Innovation', 'Tutorial', 'Bussiness']
    },
    content:{type: String},
    media:{type:[String]},
    likes:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments:[{
        user_id:{type: mongoose.Schema.Types.ObjectId, ref:"users"},
        comment:{type:String, require: true},
        created_at:{type:Date, default: Date.now}
    }],
    created_at:{type:Date, default: Date.now}

})

const postModel= mongoose.model("posts", postSchema);
module.exports={
    postModel
}