const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  image: { type: String, required: true },
  Published: { type: Date, default: Date.now },
  userId: {
    type: String,
    required: true
  }
});

const blogModel = mongoose.model("blog", blogSchema)
module.exports=blogModel