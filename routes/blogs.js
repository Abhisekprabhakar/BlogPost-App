const express=require('express');

const router = express.Router();

const Blog = require('../models/BlogPostModel');

//add new blog 
router.get('/add',(req,res)=>{
    res.render("addblog");
});

router.post('/add',(req,res)=>{
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            console.log("post request error:",err);
            res.render("errorpage",{error:err});
        }else{
          res.redirect("/blogs/"+newBlog._id);
        }
    });
});

//update
router.get('/edit/:id',(req,res)=>{
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            console.log("get request error:",err);
            res.redirect('/');
        }else{
            res.render("editblog",{blog:foundBlog});
        }
});
});

router.put("/edit/:id",function(req,res){
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updateBlog){
        if(err){
            console.log("put request error:",err);
            res.redirect("errorpage",{errors:err})
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    });

});

//delete post
router.delete('/delete/:id',(req,res)=>{
    Blog.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log("delete request error:",err);
            res.redirect("/");
        }
        else{
            res.redirect("/");
        }
    })
})


//View Blog
router.get('/:id',(req,res)=>{
    Blog.findById(req.params.id,function(err, foundBlog){
        
        if(err){
            console.log("get request error:",err);
            res.redirect("/");
        }else{
           res.render("blog",{blog: foundBlog})
        }
    })
});

router.get('*', function(req, res){
    res.redirect("/");
  });

module.exports = router;