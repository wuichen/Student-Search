var Reflux = require('reflux');
var StudentActions = Reflux.createActions(
    ["search","getAll", "setGPA", "setMajor"]
);
module.exports = StudentActions;