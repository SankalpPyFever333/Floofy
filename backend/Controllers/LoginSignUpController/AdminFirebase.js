const admin = require("firebase-admin");
const { getAuth, SignInWithPhoneNumber } = require("firebase-admin/auth");
// const serviceAccount = require("../../floofy_Service_Account.json");
// Initialize Firebase Admin SDK (you need to have a service account JSON file)
admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
  ),
});

const auth = getAuth();

async function verifyOtp(phoneNumber, enteredOtp) {
  try {
    const user = await admin
      .auth()
      .getUserByPhoneNumber(phoneNumber)
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          return admin.auth().createUser({ phoneNumber: phoneNumber });
        }
        throw error;
      });

    const verificationResult = await SignInWithPhoneNumber(
      auth,
      phoneNumber,
      enteredOtp
    );

    // If there's no error, the OTP is valid
    console.log("OTP is valid:", verificationResult);

    // You can also get the user ID from `user.uid`
    console.log("User ID:", user.uid);

    return true;
  } catch (error) {
    // OTP verification failed
    console.error("Error verifying OTP:", error);
    return false;
  }
}

module.exports = verifyOtp;
