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


// /////////////////////////////////////////////////////////////////////


// user end routes

app.use("/api" , require("./Routes/AuthorizeationRoutes/LoginSign.Routes"))
app.use("/api" , require("./Routes/ShopDatabseRoutes/AddProdInShop.Routes"))
app.use("/api" , require("./Routes/ShopDatabseRoutes/getProdFromDb.router"))
app.use("/api" , require("./Routes/ProfileRoutes/EditProfileDoctor.Router"))
app.use("/api" , require("./Routes/AuthorizeationRoutes/LoginOfUsers.Routers"))
app.use("/api" , require("./Routes/AuthorizeationRoutes/FirebaseOtpVerify.router"))
app.use("/api" , require("./Routes/AuthorizeationRoutes/FetchLoginCredentials.route"))
app.use("/api" , require("./Routes/AuthorizeationRoutes/UpdatePassword.route"))



// /////////////////////////////////////////////////////////////////////////////////////////////

// Admin end routes

app.use("/api" , require("./Routes/AdminRouters/AdminShopRoute/getProductinDbAdmin.route"))
app.use("/api" , require("./Routes/AdminRouters/AdminShopRoute/updateProductInDbAdmin.route"))
app.use("/api" , require("./Routes/AdminRouters/AdminShopRoute/deleteProductByAdmin.route"))
app.use("/api" , require("./Routes/AdminRouters/AdminShopRoute/addProductInDbAdmin.route"))


// ////////////////////////////////////////////////////////////////////////////////



// product reviews
app.use("/api" , require("./Routes/ProductReviewRoutes/postProductReview.route"))
app.use("/api" , require("./Routes/ProductReviewRoutes/getProductReview.route"))
app.use("/api", require("./Routes/ProductReviewRoutes/deleteProductReviewe.route"))
app.use("/api" , require("./Routes/ProductReviewRoutes/getProductReviewWithUsers.routes"))
app.use("/api" , require("./Routes/AdminRouters/ProductOrderRoutes/fetchProductOrder.route"))


// ///////////////////////////////////////////////////////////////////////////////////



// Product Order Routes for admin and user both
app.use("/api" , require("./Routes/PlaceOrderRoutes/placeOrderUser.route"))




// ////////////////////////////////////////////////////////////////////////////


// route for the invoice generation:
app.use("/api", require("./Routes/InvoiceGenerationRoutes/TotalBillGeneration.route"));





// ////////////////////////////////////////////////////////////////////////////////////


// show overview

app.use("/api" , require("./Routes/AdminRouters/OverviewRoutes/countNewUserLastMonth.route"));
app.use("/api" , require("./Routes/AdminRouters/OverviewRoutes/countProductPurchase.route"))
app.use("/api" , require("./Routes/AdminRouters/OverviewRoutes/totalRevenueCalculate.route"))



// ///////////////////////////////////////////////////////////////////////////////////////

// Manage doctors by admin
app.use("/api" , require("./Routes/AdminRouters/ManageDoctortsRoute/showDoctorsListAdmin.route"))
app.use("/api" , require("./Routes/AdminRouters/ManageDoctortsRoute/fetchAppointmentHistory.route"))
app.use("/api" , require("./Routes/AdminRouters/ManageDoctortsRoute/removeDoctor.route"))
app.use("/api", require("./Routes/AdminRouters/ManageDoctortsRoute/deleteDoctorReview.route"))
app.use("/api" , require("./Routes/AdminRouters/ManageDoctortsRoute/fetchDoctorReviewsAdmin.route"))
app.use("/api" , require("./Routes/AdminRouters/ManageDoctortsRoute/getTotalRevenueDoctor.route"))


// ////////////////////////////////////////////////////////////////////////////////

// Doctors Module Handling:

app.use("/api" , require("./Routes/DoctorsRoutes/DoctorAppointmentRoutes/fixAppointment.route"))
app.use("/api" , require("./Routes/DoctorsRoutes/DoctorsReviews/postReviewToDoctor.route"))




// ////////////////////////////////////////////////////////////////

// Rescuer module handling:
app.use("/api" , require("./Routes/RescuerRoutes/FixedAppointmentRescuer/fixAppointment.rescuer.route"))




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