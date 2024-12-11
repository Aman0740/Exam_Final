const blogModel = require("../model/blog.model");


const getpost = async(req, res) => {
    try {
        const data = await blogModel.find()
        res.json(data)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

const createPost = async (req, res) => {
   
    if (!req.body.title || !req.body.discription || !req.body.image)
    {
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try {
         const post = await blogModel.create({ ...req.body, userId: req.user._id })


         res.status(200).json({post, message:"post create succesfully"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const updatepost = async(req, res) => {
    if (req.user._id != req.params.userId) {
        return res
            .status(400)
            .json({ message: "You are not authorized to update this post" });
    }

    try {
        const post = await blogModel.findById({ _id: req.params.blogId })
        
        if (!post)
        {
            return res.status(400).json({message:error.message})
        }
        const updatepost = await blogModel.findByIdAndUpdate(req.params.blogId,{$set:{...req.body}})
        console.log(updatepost);
         res
           .status(200)
           .json({ message: "post update succesfully", updatepost });
    
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
    
}  

const deletepost = async(req, res) => {
   
    try {

        

        const post = await blogModel.findById({ _id: req.params.blogId });
       
        if (!post) {
          return res.status(404).json({ message: "Post not found" });
        }
        
        const deletedPost = await blogModel.findByIdAndDelete(
          req.params.blogId
        );
        res
          .status(200)
          .json({ message: "Post deleted Succesfully", deletedPost });
        
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
module.exports = { createPost, updatepost, deletepost, getpost };