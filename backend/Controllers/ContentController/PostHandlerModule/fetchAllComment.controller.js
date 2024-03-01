const Comment = require("../../../Modals/ContentModels/PostComment.model");

const fetchAllcomments = async(req, res)=>{
      const {postId} = req.body;
      try {
            const AllComment = await Comment.find({ post: postId }).populate(
              "user post"
            ).exec();
            console.log(AllComment);
            res.status(200).json({message:"All comments fetched" , AllComments:AllComment})
      } catch (error) {
            console.log(error);
            res.status(500).json({msg:"Internal Server Error"});
      }
}

module.exports = fetchAllcomments;

