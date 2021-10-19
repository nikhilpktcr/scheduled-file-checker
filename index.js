import fs from 'fs';
import cron from 'node-cron';

const scheduledFileNameChecker  = async(path, checkTime) =>{
    cron.schedule(checkTime, () =>{
        if (fs.existsSync(path)) {
            return true;
        }
        return false;
    });
}

module.exports.scheduledFileNameChecker = scheduledFileNameChecker;