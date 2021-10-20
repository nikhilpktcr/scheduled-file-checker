# About the package
check file present on scheduled time.

processing >> first you will get this message.
true >> file is present on a scheduled time.
false >> fiie not present on a scheduled time.

possible values
* processing(initializing time only)
* true
* false


# Installation

`npm install fileChecker` or ` npm i fileChecker`


# usage 

const scheduledFileChecker = require(`fileChecker`);

let checker = scheduledFileChecker(path, `* * * * *`);

checker >> true or false;

# default

* path is mandatory 

* time >> `* * * * *` // every minutes

