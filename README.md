# About the package
check file present on  scheduled time.

processing >> first you will get this message.
true >> file is present on a scheduled time.
false >> fiie not present on a scheduled time.

possible values
* processing(initializing time only)
* true
* false

# Installation

`npm install scheduledFileChecker` or ` npm i scheduledFileChecker`


# usage 

const scheduledFileChecker = require(`scheduledFileChecker`);

let checker = scheduledFileChecker(path, `* * * * *`);

checker >> true or false;

# default

* path is mandatory 

* time >> `* * * * *` // every minutes

