//1 - SIMPLE WAY OF CREATING AN OBJECT
var objOne = {
  name: 'Joan'
}

objOne.age = 30;
objOne['my email'] = 'test@test.com'; //Key with spaces
objOne.myNameAndAge = function(){
  return this.name + ' ' + this.age;
}
console.log('objOne ==> ', objOne);

//2 - CREATING AN OBJECT WITH Object.create()
var objTwo = Object.create(Object.prototype); //CREATE A PLAIN OBJECT WITH PROTOTYPE
objTwo.name = 'Joan';
console.log('objTwo ==> ', objTwo);

//3 - CREATING AN OBJECT WITH new Object() - not very used, especially in ES6 where we have class
var objThree = new Object();
objThree.name = 'Joan';
console.log('objThree ==> ', objThree);

//4 - ES5 DEFINING PROPERTIES WITH defineProperty();
var book = {
  name: 'Book One',
  author: 'Test'
}
Object.defineProperty(book, 'toString', {
  value: function(){
    return this.name + ' ' + this.author;
  },
  writable: false, //prevent to override toString value - cannot make toString.= 'new value'
  enumerable: false, // won't show toString key when console.log(Object.keys(book));
  configurable: false
});

//if configurable: true
Object.defineProperty(book, 'toString', {
  value: function(){
    return this.name + ' ' + this.author;
  },
  enumerable: true
});
