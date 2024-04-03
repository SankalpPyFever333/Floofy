const cron = require("node-cron");
const backupMongoDb = require("./DBbackupProcess");

cron.schedule("*/5 * * * * *" , ()=>{
      console.log("Running backup task")
      backupMongoDb();
})

