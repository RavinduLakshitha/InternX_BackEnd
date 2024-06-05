const mongoose = require("mongoose")

const LogInShema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

const collection = new mongoose.model("Collection1",LogInShema)

module.exports = collection