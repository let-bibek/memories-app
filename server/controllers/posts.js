import PostMessage from "../models/posts.js";

export const getPosts=async (req,res)=>{
    
    try {

        const postMessage=await PostMessage.find();
        res.status(200).json(postMessage);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost=async (req,res)=>{
    const content=req.body;
    const newPost=new PostMessage(content);
       try {
         await newPost.save();
         res.status(201).json(newPost);
       } catch (error) {
        res.status(409).json({message:error.message});
       }
}