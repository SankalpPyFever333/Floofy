// fetch the data from the database and check whether it matches with enterd data or not.
const generateToken = require("../../LoginToken/generateToken");
const userLoginModel = require("../../Modals/LoginCredentials.modal");
const bcrypt = require("bcrypt");

const fetchloginData = async (req, res) => {
  const { username, password, userType } = req.body;

  try {
    const loginData = await userLoginModel.findOne({ username });
     if (!loginData) {
       return res.status(401).json({ message: "Invalid Username" });
     }
    console.log(loginData.password);

    bcrypt.compare(password, loginData.password, (err, result) => {
      if (err) {
        return res.status(401).json({ message: `error occured ${err}` });
      } else if (result) {

          if (loginData.userType !== userType) {
            return res.status(401).json("invalid user type");
          }


        const token = generateToken(loginData);
        console.log("userid is: ", loginData._id);
        res.status(200).json({
          message: "Login Successfull",
          userId: loginData._id,
          username: loginData.username,
          Token: token,
        });
      } else {
        return res.status(401).json({ message: "passowrd is incorrect" });
      }
    });


  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `Error in fetching data ${error}` });
  }
};

module.exports = fetchloginData;
