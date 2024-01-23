// logic for otp verification 
const verifyOtp = require("./AdminFirebase")

const FirebaseOtpVerification = async(req,res)=>{
      const {userMobileNumber , EnteredOtp} = req.body;
      try {
            const isOtpVerified = await verifyOtp(userMobileNumber , EnteredOtp);
            if(isOtpVerified){
                  console.log("OTP verification successfull")
                  res.status(200).json({message:"OTP Successfull"})
                  
            }
            else{
                  console.log("OTP unsuccessfull")
                  res.status(400).json({message:"error"})
                  
            }

      } catch (error) {
            console.log(`error is  `,error)
            res.status(500).json({message:"Internal server error"})
      }

}

module.exports = FirebaseOtpVerification;
