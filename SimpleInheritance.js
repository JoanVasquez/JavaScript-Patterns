var role = {
  name: 'Admin'
}

//SIMPLE WAY TO CREATE INHERITANCE
var urgenTask = Object.create(role);
Object.defineProperty(urgenTask, 'toString', {
  value: function(){
    return this.name + ' ' + 'is urgent';
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(urgenTask.toString());
