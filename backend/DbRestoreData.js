const { exec } = require("child_process");
const path = require("path")
// Restore MongoDB database
const restoreDatabase = () => {
  const backupDir = path.join(__dirname, "./WelfareAppDBBackup")

  // Use mongorestore command to restore the database
  exec(`mongorestore --drop ${backupDir}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Restoration failed: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Restoration failed: ${stderr}`);
      return;
    }
    console.log(`Restoration completed successfully`);
  });
};

// Call the restore function
restoreDatabase();
