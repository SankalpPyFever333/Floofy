const express =  require('express');
const getSingleProductFromDb = require('../../Controllers/ShopController/getProductUsingId.controller');
const router = express.Router();

router.post("/getSingleProduct" , getSingleProductFromDb );

module.exports = router;
