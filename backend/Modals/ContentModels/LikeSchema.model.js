const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserLoginCredentials",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "PostsCollection",
  },
  Like: {
    type: String,
  },
});

const LikeModel = new mongoose.model("LikeModel" , LikeSchema);
module.exports = LikeModel;

