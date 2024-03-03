const  postModel = require("../../../Modals/ContentModels/postSchema.modal");

const getAllPost = async(req, res)=>{
      try {
            const posts = await postModel
              .find()
              .populate("userId likedBy commentedBy");
             return res.status(200).json({message:"post fetched succesfully" , AllPost: posts})

      } catch (error) {
            console.log("Error in fetching post" , error);
            res.status(500).json({ message : "Server Error!" })
      }
}

module.exports = getAllPost;