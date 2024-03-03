const mongoose  = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
  Image: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserLoginCredentials",
  },

  likedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "UserLoginCredentials",
  },
  commentedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
  },

  hashTag: {
    type: [String],
  },
});


const postModel = new mongoose.model("PostsCollection" , postSchema);

module.exports = postModel;
