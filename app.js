const express=require('express');
const mongoose = require('mongoose');
const path=require('path');
const methodOverride=require("method-override");
const routes = require('./routes/blogs');
const Blog = require('./models/BlogPostModel');
require('dotenv').config();
const app=express();
mongoose.connect(process.env.MongoDb_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose not connected!!!!');
    
});
app.use(express.static(path.join(__dirname,'/public/')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set('views','./views');
app.set('view engine','ejs');
app.use('/blogs', routes);


var port = process.env.PORT||3000;
//List of Blogs
app.get('/',(req,res)=>{
    Blog.find({},function(err,Blog){
        if(err){
            console.log(err);
        }else{
            res.render("index",{blogs:Blog});
        }

});
});
app.get('*', function(req, res){
    res.redirect("/");
  });

var server=app
  .listen(port, () => {
    console.log(`Server running http://localhost:${port}/`);
  })
  .on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      port++;
      console.log('Address in use, retrying on port ' + port);
      app.listen(port, () => {
        console.log(`Server running http://localhost:${port}/`);
      });
    }
  });

  