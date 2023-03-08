import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    user:String,
    tags:[String],
    selectedFile:String,
    reactionCount:{
        type:Number,
        default:0,

    },
    createdAt:{
        type:Date,
        default:new Date(),
    },

});

const PostMessage=mongoose.module('PostMessage',postSchema);
export default PostMessage;