const mongoose  = require("mongoose");

const postSchema  = new mongoose.Schema({
      title:{
            type:String,
            required:true,

      },
      caption:{
            type:String
      },
      Image:{
            type: String,
            required: true
      },
      userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Doctor"
      },
      hashTag:{
            type: [String],

      }
})


const postModel = new mongoose.model("PostsCollection" , postSchema);

module.exports = postModel;
