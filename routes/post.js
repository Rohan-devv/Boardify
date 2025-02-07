const mongoose = require('mongoose');
//const plm = require("passport-local-mongoose")//nahi chaiye

//mongoose.connect("mongodb://127.0.0.1:27017/Boardify");//nahi chaiye

const postSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
    
  },
  title: String,
  description: String,
  image: String
 // email: String,
 // description: String,
 // profileImage: String,
 // contact: Number,
 // boards: {
  //  type: Array,
 //   dafault:[]
 // }

})

//userSchema.plugin(plm);

module.exports = mongoose.model("post", postSchema);