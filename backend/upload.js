const multer = require("multer");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const baseUrl = "http://localhost:3000";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Save the file with its original name
  },
});

const uploads = multer({ storage: storage });

module.exports = uploads;
