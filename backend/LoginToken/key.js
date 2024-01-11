const crypto = require("crypto");
const secratekey = crypto.randomBytes(64).toString("binary");
console.log(secratekey);
