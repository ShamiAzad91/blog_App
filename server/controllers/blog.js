const Blog = require("../models/blog");
const User = require('../models/user');


exports.addBlog = async(req,res)=>{
    try {
        const {title,description,image} = req.body;

        if(!title || !description || !image)
        return res.status(422).json({error:'plz included all fileds',status:'failed'});
        
        const blog = new Blog({
            title,
            description,
            image,
            author:req.userId
        });

        const savedBlog = await blog.save();
        return res.status(201).json({blog:savedBlog,message:'successfully created blog',status:'success'})

        
    } catch (err) {
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    }

        
    }

    
exports.getAllBlog = async(req,res)=>{
    try {

       const allBlog = await Blog.find().populate("author","-password").sort({ createdAt: -1 });
       if(allBlog.length <= 0)
       return res.status(400).json({message:'there is no blog',status:'failed'})


        return res.status(200).json({blog:allBlog,message:'successfully listed all blog',status:'success'})

        
    } catch (err) {
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    }

        
    }


    exports.getSingleBlog = async(req,res)=>{
        try {
    
            const id = req.params.blogId
           const myBlog = await Blog.findById(id).populate('author','name email')
           if(myBlog === 'null')
           return res.status(400).json({message:'there is no blog',status:'failed'})
            return res.status(200).json({blog:myBlog,message:'successfully listed all blog',status:'success'})
            
        } catch (err) {
            return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
        }
    
            
        }
    

exports.updateBlog = async(req,res)=>{
try {
    const blogId = req.params.blogId;
    const userId = req.userId;
    // const { title, description,image } = req.body;
    
    const blog = await Blog.findById(blogId).populate('author','name');
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }

       // Check if the authenticated user is the owner of the blog
    if (blog.author._id.toString() !== userId) {
        return res.status(403).json({ error: 'Permission denied' });
      }

    // Save the updated blog to the database
    const updatedBlog = await Blog.findByIdAndUpdate(blogId,{$set:req.body},{new:true})
    return res.status(200).json({blog:updatedBlog,message:'successfully updated all blog',status:'success'})

} catch (err) {
    return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
    
    
}
}



exports.removeBlog = async(req,res)=>{
    try {
        const blogId = req.params.blogId;
        const userId = req.userId;
        
        const blog = await Blog.findById(blogId).populate('author','name');
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
          }
    
           // Check if the authenticated user is the owner of the blog
        if (blog.author._id.toString() !== userId) {
            return res.status(403).json({ error: 'Permission denied' });
          }
    
        //  remove blog to the database
        const result = await Blog.findByIdAndDelete(blogId)
        if(!result)
        return res.status(400).json({error:"Unable to delete the blog",status:"failed"});
        return res.status(202).json({message:"successfully deleted the blog",status:"success"})
    
    } catch (err) {
        return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
        
        
    }
    }


    exports.myBlogs = async(req,res)=>{
        try {
    
            const id = req.userId
        const myBlog = await Blog.find({author:id});
           if(myBlog === 'null')
           return res.status(400).json({message:'there is no blog',status:'failed'})
            return res.status(200).json({blog:myBlog,message:'successfully listed all blog',status:'success'})
            
        } catch (err) {
            return res.status(500).json({err:err.message,message:"Something went wrong",status:"failed"})
        }
    
            
        }