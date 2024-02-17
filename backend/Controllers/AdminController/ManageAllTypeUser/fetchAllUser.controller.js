const  userLoginModel = require("../../../Modals/LoginCredentials.modal");

const fetchAllUsers = async (req, res)=>{
      try {
            const usersDataBase = await userLoginModel.find({ userType :{$ne:"Admin"}});
             return res.status(201).json({messgae:"All users fetched" , users: usersDataBase})
      } catch (error) {
            console.log("Error in Fetching all users : ", error);
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports =  fetchAllUsers;
