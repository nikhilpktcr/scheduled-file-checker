# About the package
check file present on  scheduled time.

true >> file is present on a scheduled time.
false >> fiie not present on a scheduled time.

# Installation

`npm install scheduledFileChecker` or ` npm i scheduledFileChecker`


# usage 

const scheduledFileChecker = require(`scheduledFileChecker`);

let checker = scheduledFileChecker(path, `* * * * *`);

checker >> true or false;

# default

* path is mandatory 

* time >> `* * * * *` // every seconds

