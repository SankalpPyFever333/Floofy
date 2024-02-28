const postModel = require("../../../Modals/ContentModels/postSchema.modal");

const postContent = async(req, res)=>{
      const {title , caption, Image , userId , hashTag} = req.body;
      try {
            const newpost = new postModel({
              title,
              caption,
              Image,
              userId,
              hashTag,
            });

            await newpost.save();
            
            console.log('Post has been added to the database');

            res.status(200).json({messgae:"Post created successfully"});

      } catch (error) {
            console.log("Error in creating post:", error);
            res.status(500).json({message:"Internal server error"});
      }
}

module.exports = postContent;
