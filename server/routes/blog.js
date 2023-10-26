const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/token");

const {addBlog,getAllBlog,getSingleBlog,updateBlog,removeBlog,myBlogs} = require("../controllers/blog");


router.post("/add",verifyToken,addBlog);
router.get("/all",getAllBlog);
router.get("/single/:blogId",getSingleBlog);
router.put("/update/:blogId",verifyToken,updateBlog);
router.delete("/remove/:blogId",verifyToken,removeBlog);
router.get("/myblog",verifyToken,myBlogs);




module.exports = router;