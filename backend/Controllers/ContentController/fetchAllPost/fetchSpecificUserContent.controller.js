const  postModel = require("../../../Modals/ContentModels/postSchema.modal");

const fetchSpecificUserPost = async(req,res)=>{
      const {userId} = req.body;
      try {
            const  userPosts = await postModel.find({userId:userId});
            if(!userPosts){
                  console.log("No post found")
            } 
            res.status(200).json({message:"All pst fetched", UserPost: userPosts})
      } catch (error) {
            console.log(error);
            res.status(500).json({
                  
                  message:"Server Error!"
            });
      } 
}

module.exports = fetchSpecificUserPost;
