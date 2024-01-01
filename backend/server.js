const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const port = 3000

const app = express();
const upload = multer({dest:"AvatarUpload/"})

app.use(express.json())
app.use(bodyparser.urlencoded({
      extended: true
}))

app.use(cors);

mongoose.connect("mongodb://localhost:27017/AnimalWelfareApp")
.then(()=>{
      console.log("Connected successfully")
})
.catch((err)=>{
      console.log(`Error in connecting ${err}`);
})

//store the username and password of all user of all type.
const commonUser = mongoose.model("Commonuser" , {
      UserName: String,
      Password: String
})

app.get("/",(req,res)=>{
      res.send("It is an animal app");
})

// It will store the username, avatar and password of every user upon signup.
app.post("/CommonUserDetails" , upload.single("image") , (req, res)=>{
      const {username, password} = req.body;
      const image = req.file.filename;
      const user = new commonUser({
            username, password , image
      });
      user.save().then(()=>{
            alert("data saved successfully")
      }).catch((err)=>{
            console.log(err)
      })
})

// ////////////////////////////////////////////////////////////////////////////////////

// data stored in this comes when doctor write about it in the dialog box that appears when he clicks on the edit btn on his profile.
const Doctor = mongoose.model("Doctor" , {
      Name: String,
      Username: String,
      Phone: String,
      Email: String,
      Experience: Number,
      Education: String,
      Specialization :String,
      SocialMediaLink: String

});
// From above data , we display only the necessary details on the his profile.

// Write post to save data in this collection and write get to display this data in the bio on his profile.

app.post("/SaveDoctorBioDetails" , (req, res)=>{
      const {Name, Username, Phone ,Email, Experience , Education, Specialization, SocialMediaLink} = req.body;
      const doctor = new Doctor({
            Name , Username , Phone, Email, Experience , Education , Specialization , SocialMediaLink
      })
      doctor.save().then(()=>{
            alert("Doctors details saved in the collection")
      }).catch((err)=>{
            console.log("Error in saving doctor details")
      })
});

// get doctor details

app.get("/getSavedDoctorDetails" , (req, res)=>{
      Doctor.find()
      // Not getting the logic for identifying the particular data of doctor.
})


// /////////////////////////////////////////////////////////////////////////

// Normal user collection:

const normalUser = mongoose.model("NormalUser" , {
      Username : String,
      Name:String,
      Bio:String,

})

app.post("/saveNormalUserBioDetails" , (req, res)=>{
      const {Name , Username , Bio} = req.body;
      const newNormalUser = new normalUser({Name, Username , Bio});
      newNormalUser.save().then(()=>{
            console.log("Normal user data saved successfully")
      })
      .catch((err)=>{
            console.log(`Error in saving the data of normal user: ${err}`);
      })
})



// /////////////////////////////////////////////////

// Creating a collection for Rescuer:
const RescuePerson = mongoose.model("RescuePerson", {
      Name: String,
      Username: String,
      Phone: String,
      Email: String,
      Experience: Number,
      Education: String,
      Specialization: String,
      SocialMediaLink: String,
      Transporting: String,
      Equipments: String
});

app.post("/saveRescuePersonBioDetails",(req, res)=>{
      const {Name, Username, Phone, Email, Experience , Education , Specialization, SocialMediaLink, Transporting , Equipments } = req.body;
      const newResuerPerson = new RescuePerson({
        Name,
        Username,
        Phone,
        Email,
        Experience,
        Education,
        Specialization,
        SocialMediaLink,
        Transporting,
        Equipments,
      });

      newResuerPerson.save().then(()=>{
            console.log("new rescuer saved successfully")
      }).catch((err)=>{
            console.log(`Error in saving data:${err}`)
      })
})

// get the above saved data to display on the profile.

app.get("/getRecuePerson" , (req, res)=>{

})

// ///////////////////////////////////

// From all the above types of user(Doctor , normal user, rescuer), display its username that is stored in CommonUser collection.



// ///////////////////////////////////////////////////////////////

// storing products in the collection:

const ShopModel = mongoose.model("ShopDatabase" , {
      ProductName : String,
      Price : Number,
      Category : String,
      Description : String,
      ImagePath : String,
      Quantity:Number ,
      DiscountTag: Boolean
})

// User who registered thmeselves as a Seller can add product in the shop database.

app.post("/AddProdInShop" , (req,res)=>{
      const { ProductName, price,  DiscountTag , Category , Description , ImagePath , Quantity } = req.body;
      const AddProd = new ShopModel({
        ProductName,
        price,
        DiscountTag,
        Category,
        Description,
        ImagePath,
        Quantity,
      });
      AddProd.save().then(()=>{
            res.send("Product saved")
      }).catch((err)=>{
            res.send("Error in saving the product")
      })

})


app.get("/getProductFromShop" , async (req, res)=>{
      // get all the product and display in shop.
      // Give category as a select option and display product according to teh category.
      try {
            const products = await ShopModel.find();
            console.log(products)
             if (!products || products.length === 0) {
               return res.status(404).json({ msg: "No Products Found!" });
             }
            res.json(products);
      } catch (error) {
            res.status(500).json({message:"Internal server error"})
      }


})









app.listen(port , ()=>{
      console.log(`app running at port ${port}`)
})