const {spawn} = require("child_process");
const path = require("path");


const DB_NAME = "AnimalWelfareApp";

const ARCHIVE_PATH = path.join(__dirname, "./WelfareAppDBBackup" , `${DB_NAME}.gzip`);

const backupMongoDb = ()=>{
      const child = spawn("mongodump" , [
            `--db=${DB_NAME}`,
            `--archive=${ARCHIVE_PATH}`,
            "--gzip"
      ]);

      child.stdout.on("data" , (data)=>{
            console.log("stdout: \n" , data);
      })

      child.stderr.on("data" , (data)=>{
            console.log("stdout: \n" , data)
      });

      child.on("error" , (error)=>{
            console.log("Error: \n" , error);
      })

      child.on("exit" , (code, signal)=>{
            if(code){
                  console.log("Process exit with code: " , code);
            }
            else if(signal){
                  console.log("Process killed with signal: " , signal)
            }
            else{
                  console.log("backup is successfull");
            }
      })
}

module.exports = backupMongoDb;
