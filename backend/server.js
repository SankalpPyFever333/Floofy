const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

const port = process.env.PORT || 3000;
const MONGO_CONN_STRING = process.env.MONGO_CONN_STRING;

const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.urlencoded({
      extended: true
}))
app.use(express.json())
app.use("/api" , require("./Routes/AuthorizeationRoutes/LoginSign.Routes"))
app.use("/api" , require("./Routes/ShopDatabseRoutes/AddProdInShop.Routes"))
app.use("/api" , require("./Routes/ShopDatabseRoutes/getProdFromDb.router"))
app.use("/api" , require("./Routes/ProfileRoutes/EditProfileDoctor.Router"))
app.use("/api" , require("./Routes/AuthorizeationRoutes/LoginOfUsers.Routers"))
app.use("/api" , require("./Routes/AuthorizeationRoutes/FirebaseOtpVerify.router"))

mongoose.connect(MONGO_CONN_STRING)
.then(()=>{
      console.log(`database connected successfully`)
})
.catch((err)=>{
      console.log(`Error in connecting ${err}`);
})




app.listen(port , ()=>{
      console.log(`app running at port ${port}`)
})