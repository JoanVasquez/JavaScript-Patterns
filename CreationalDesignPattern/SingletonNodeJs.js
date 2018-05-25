//REQUIRED FROM main.js
var repo = function(){
  console.log('repo...');
  var count = 0;
  var twice = function(){
    count++;
    console.log('twice... ' + count);
  }
  return {
    twice
  }

}

module.exports = repo(); //It is going to share same repo every time we require it!
