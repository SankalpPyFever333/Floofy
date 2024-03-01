const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserLoginCredentials",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PostsCollection",
    required: true,
  },
  createdAt: { type: String, default: new Date(Date.now()).toLocaleString() },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
