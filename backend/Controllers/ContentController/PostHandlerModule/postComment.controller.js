const  Comment = require("../../../Modals/ContentModels/PostComment.model");
const postModel = require("../../../Modals/ContentModels/postSchema.modal");

const addCommentToPost = async(req, res)=>{
      const { post, content, user } = req.body;
      try {
            const Findpost = await postModel.findOne({_id : post})
            if (!Findpost) {
              return res.status(401).json({ message: "No post found" });
            }

            const comment = new Comment({content:content , post:post , user: user});
            await comment.save();

            await postModel.findByIdAndUpdate(post, {
              $push: { commentedBy: comment._id },
            });

            res.status(200).json({message:"Commented Successfully" , comments: comment})
      } catch (error) {
            console.log("error in commenting" , error)
            res.status(500).json({message:"Server error"})
      }
}

module.exports = addCommentToPost;

