// logic for otp verification 
const verifyOtp = require("./AdminFirebase")

const FirebaseOtpVerification = async(req,res)=>{
      const {userMobileNumber , EnteredOtp} = req.body;
      try {
            const response = verifyOtp(userMobileNumber , EnteredOtp);
            res.status(400).json({message:"We get the response: "+response})
      } catch (error) {
            res.status(200).json({message:"Error in matching the otp"})
      }

}

module.exports = FirebaseOtpVerification;
