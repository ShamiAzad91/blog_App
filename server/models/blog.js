const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    image:{
        type:String
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true}) ;

module.exports = mongoose.model("Blog",blogSchema);