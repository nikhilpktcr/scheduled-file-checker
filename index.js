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
        result = schedulerFn(path);
        console.log(result);
    });
    if(!result){
        result = 'processing'
        return(result);
    }
  return result;
}

let check = scheduledFileChecker('D:/Vscode/scheduledFileChecker/package.json');
console.log(check);

module.exports.scheduledFileChecker = scheduledFileChecker;