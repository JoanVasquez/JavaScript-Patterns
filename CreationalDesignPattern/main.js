var Repo = require('./ModulePattern');
var taskOne = Repo.get(1);

console.log(taskOne);

var SingletonNodeJsOne = require('./SingletonNodeJs');
var SingletonNodeJsTwo = require('./SingletonNodeJs');

SingletonNodeJsOne.twice();
SingletonNodeJsTwo.twice();
