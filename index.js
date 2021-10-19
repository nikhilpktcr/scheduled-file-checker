const fs = require('fs');
const cron = require('node-cron');

const schedulerFn  = (path) =>{
    if (fs.existsSync(path)) {
        return true;
    }else{
        return false;
    }
}


const scheduledFileChecker = (path, checkTime) =>{
    let result;
    cron.schedule( checkTime ? checkTime : `* * * * *`, () =>{
        result =  schedulerFn(path);
        console.log(result);
        return result;
    });
    
}


module.exports.scheduledFileChecker = scheduledFileChecker;