const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: {
     type: "string",
     minLength:[3,'title must be greater than 3 letters'],
     maxLength:[50,'title must be smaller than 50 letters'],
     required:[true,'title is required']
    } ,
    category: {
      type: "string",
      minLength:[3,'category must be greater than 3 letters'],
      maxLength:[15,'category must be smaller than 15 letters'],
      required:[true,'category is required']
     } ,
    content: {
      type: "string",
      minLength:[255,'content must be greater than 255 letters'],
      required:[true,'content is required']
    },
    created: {type: "Date",default: Date.now()}
  });

  var Blog=mongoose.model("Blog",blogSchema);

  module.exports=Blog;