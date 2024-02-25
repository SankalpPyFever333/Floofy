// While deleting a particular user , delete all the rest of the things associated with him like reviews, his cart , orders etc.

const userLoginModel = require("../../../Modals/LoginCredentials.modal");

const deleteUserFromDb = async (req, res)=>{
      const deleteUserIds = req.body;
      console.log(deleteUserIds);

      // before deleting the user , delete all the reviews , orders, cart items and other data associated with that user.

      // for now, deleteing the user only:

      try {
            const deleteUsers = await userLoginModel.deleteMany({_id : {$in : deleteUserIds}}).exec();
      
            if(deleteUsers.deleteCount > 0){
                  res.status(200).json({message:"Selected user deleted" , deletedUsers: deleteUsers})
            }
            else{
                  res.status(200).json({message:"error in deleting user" , deletedUsers:[]})
            }
      } catch (error) {
            console.log("Error in deletion is: " , error);
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = deleteUserFromDb;
