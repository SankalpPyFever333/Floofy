const LikeModel = require("../../../Modals/ContentModels/LikeSchema.model");
const postModel = require("../../../Modals/ContentModels/postSchema.modal");

const LikeUnlikecontoller = async(req, res)=>{
      const {postId , userId} = req.body;
      console.log(postId , userId)
      try {
            const post = await postModel.findOne({ _id: postId });
            console.log(post)
            const alreadyLiked = post.likedBy.includes(userId);
            let likes = 0;
            if(post){
                   if (alreadyLiked) {
                     // User has already liked the post, so unlike it
                     likes -= 1; // Decrement like count
                     post.likedBy = post.likedBy.filter((id) => id !== userId); // Remove user ID from likedBy array
                   } else {
                     // User is liking the post
                     likes += 1; // Increment like count
                     post.likedBy.push(userId); // Add user ID to likedBy array
                   }

                   await post.save();
                   res.status(200).json({message:"post like updated" , likes: post.likedBy.length , isLiked:!alreadyLiked});

            }else{
                  res.status(401).json('This Post is not exist');
            }
      } catch (error) {
            console.log("Error in like controller : ", error);
            res.status(500).json({message:"Server error!!"})
      } 
}

module.exports = LikeUnlikecontoller;
