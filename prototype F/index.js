let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
};

Rabbit.prototype = animal;

let rabbit = new Rabbit("White one");

console.log(rabbit.eats);

function Rabbit2() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

console.log( Rabbit2.prototype.constructor == Rabbit2 ); // true

function Rabbit3() {}
let rabbit3 = new Rabbit3();
console.log(rabbit3.constructor == Rabbit3);

function Rabbit4() {}
Rabbit4.prototype = { //overwritten prop so => will be false in console
  jumps: true,
  constructor: Rabbit4, // adding => true in next console
};

let rabbit4 = new Rabbit4();
console.log(rabbit4.constructor === Rabbit4); // false

//По умолчанию все функции имеют F.prototype = { constructor: F }, 
//поэтому мы можем получить конструктор объекта через свойство "constructor".