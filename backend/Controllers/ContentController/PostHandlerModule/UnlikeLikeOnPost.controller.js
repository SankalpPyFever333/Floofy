const LikeModel = require("../../../Modals/ContentModels/LikeSchema.model");
const postModel = require("../../../Modals/ContentModels/postSchema.modal");

const LikeUnlikecontoller = async (req, res) => {
  const { userId } = req.body;
  const { postId } = req.params;
  console.log(postId, userId);

  try {
    const post = await postModel.findOne({ _id: postId });
    console.log(post);

    if (post) {
      
      const likedBySet = new Set(post.likedBy.map((userId)=> userId.toString() ));
      
      if (likedBySet.has(userId)) {
      
        likedBySet.delete(userId); // Remove user ID from Set
        post.likedBy = Array.from(likedBySet); // Convert Set back to array
      } else {
      
        likedBySet.add(userId); // Add user ID to Set
        post.likedBy = Array.from(likedBySet); // Convert Set back to array
      }

      await post.save();
      res.status(200).json({
        message: "Post like updated",
        likes: post.likedBy.length,
        isLiked: likedBySet.has(userId),
      });
    } else {
      res.status(401).json("This Post is not exist");
    }
  } catch (error) {
    console.log("Error in like controller:", error);
    res.status(500).json({ message: "Server error!" });
  }
};

module.exports = LikeUnlikecontoller;
