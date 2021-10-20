const fs = require('fs');
const cron = require('node-cron');

const schedulerFn  = (path) =>{
    if (fs.existsSync(path)) {
        return true;
    }else{
        return false;
    }
}


const fileChecker = (path, checkTime) =>{
    let result;
    cron.schedule( checkTime ? checkTime : `* * * * *`, () =>{
        result = schedulerFn(path);
        console.log(result);
    });
    if(!result){
        result = 'processing'
        return(result);
    }
  return result;
}

module.exports.fileChecker = fileChecker;