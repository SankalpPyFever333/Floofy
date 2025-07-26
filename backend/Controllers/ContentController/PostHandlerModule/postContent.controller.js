const postModel = require("../../../Modals/ContentModels/postSchema.modal");

const postContent = async (req, res) => {
  const { title, caption, userId, hashTag, likedBy } = req.body;
  const file = req.file;

  console.log("reqbody:", req.body);
  console.log("fileobject: ", req.file);

  try {
    const newpost = new postModel({
      title: title,
      caption: caption,
      Image: `${base_api}/uploads/${file.originalname}`,
      userId: userId,
      hashTag: hashTag,
      likedBy: likedBy,
    });

    await newpost.save();

    console.log("Post has been added to the database");

    res.status(200).json({ messgae: "Post created successfully" });
  } catch (error) {
    console.log("Error in creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postContent;
