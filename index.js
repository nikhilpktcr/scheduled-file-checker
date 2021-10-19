
const scheduledFileChecker  = async(path, checkTime) =>{
    if(path !==null){
        let timer = checkTime ? checkTime : `* * * * *`
        const fs = require('fs');
        const cron = require('node-cron');
        cron.schedule(timer, () =>{
            if (fs.existsSync(path)) {
                return true;
            }
            return false;
        });
    }
}

module.exports.scheduledFileChecker = scheduledFileChecker;