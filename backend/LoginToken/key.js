const crypto = require("crypto");
const secratekey = crypto.randomBytes(64).toString("hex");
console.log(secratekey);
