//new key word makes available the use of this in JS
var Book = function(name){ //Book is going to be an OBJ
  this.name = name; //this makes a reference to the OBJ that is calling Book var any = new Book('test');
  this.getAge = function(){
    return 30;
  }
}

var book1 = new Book('Book1');
var book2 = new Book('Book2');
var book3 = new Book('Book3');
var book4 = new Book('Book4');

console.log(book1.name);
console.log(book2.name);
console.log(book3.name);
console.log(book4.name);

//PROTOTYPE
var SuperHero = function(name){
  this.showHeroName = function(){
    console.log(name);
  }
}

SuperHero.prototype.showUniverse = function(universe){ //CAN BE INHERITED AND EXIST ONLY ONE
  console.log(universe);
}

var superHeroOne = new SuperHero('Super Man'); //Own Copy of the SuperHero showHeroName() function
var superHeroTwo = new SuperHero('Batman'); //Own Copy of the SuperHero showHeroName() function
superHeroOne.showHeroName();
superHeroTwo.showHeroName();
superHeroOne.showUniverse('DC');
superHeroTwo.showUniverse('MARVEL');
