const postModel = require("../../Modals/ContentModels/postSchema.modal");

const fetchFetchNumberOfLikes = async(req, res) =>{
      const {postId} = req.body;
      try {
        const posts = await postModel
          .find({_id: postId})
          .populate("userId likedBy commentedBy").exec();
        return res.status(200).json({
          message: "post fetched succesfully",
          AllPost: posts,
          
        });
      } catch (error) {
        console.log("Error in fetching post", error);
        res.status(500).json({ message: "Server Error!" });
      }
}

module.exports = fetchFetchNumberOfLikes;
