// While deleting a particular user , delete all the rest of the things associated with him like reviews, his cart , orders etc.

const Comment = require("../../../Modals/ContentModels/PostComment.model");
const postModel = require("../../../Modals/ContentModels/postSchema.modal");
const DoctorModel = require("../../../Modals/DoctorModals/Doctor.modal");
const AppointmentModel = require("../../../Modals/DoctorModals/DoctorAppointment.modal");
const DoctorReviewModel = require("../../../Modals/DoctorModals/DoctorsReview.model");
const userLoginModel = require("../../../Modals/LoginCredentials.modal");
const ProductOrder = require("../../../Modals/ProductOrder/ProductOrder.modal");
const productReviwModal = require("../../../Modals/productReview/ProductReview.modal");


const deleteUserFromDb = async (req, res)=>{
      const deleteUserIds = req.body;
      console.log(deleteUserIds);

      try {
            // before deleting these users, delete all the data associated with him.

            // see other models also like invoice and bill model

            await Comment.deleteMany({
              user: {$in : deleteUserIds}
            }).exec();

            await postModel.deleteMany({ userId : {$in: deleteUserIds}});
            await DoctorModel.deleteMany({
              Username: {$in: deleteUserIds}
            });

            await AppointmentModel.deleteMany({
              Doctor: {$in: deleteUserIds}
            });

            await DoctorReviewModel.deleteMany({
              User: {$in: deleteUserIds}
            });

            await productReviwModal.deleteMany({
              User: {$in: deleteUserIds}
            });

            await ProductOrder.deleteMany({
              User: {$in: deleteUserIds}
            });

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
