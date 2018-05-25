//TOOL OF BOX - SIMPLE WAY TO ENCAPSULATE METHODS
var repo = function(){
  return{
    get: function(id){
      console.log(`Getting task with Id: ${id}`);
      return {
        name: 'New Task from DB'
      }
    }
  }
}

//ANOTHER WAY, HELP TO SEE THE KEYS AVAILABLES OF THE REPO
var repo = function(){
  var get = function(id){
    console.log(`Getting task with Id: ${id}`);
    return {
      name: 'New Task from DB'
    }
  }
  return{
    get
  }
}

module.exports = repo();
