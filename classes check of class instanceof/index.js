class Rabbit {};
let rabbit = new Rabbit;
console.log(rabbit instanceof Rabbit); //true

function Rabbit2() {};
console.log( new Rabbit2() instanceof Rabbit2 ); //true

let arr = [1, 2, 3];
console.log(arr instanceof Array); //true
console.log(arr instanceof Object); //true

class Animal {
  static [Symbol.hasInstance](obj) {
    if(obj.canEat) return true;
  }
}

let obj = { canEat: true };
console.log( obj instanceof Animal ); //true

class Animal3 {}
class Rabbit3 extends Animal3 {}

let rabbit3 = new Rabbit3();
console.log(rabbit3 instanceof Animal3); // true

function Rabbit4() {};
let rabbit4 = new Rabbit4();

Rabbit4.prototype = {};

console.log( rabbit4 instanceof Rabbit4 ); //false

// Согласно спецификации встроенный метод toString может быть позаимствован у объекта и вызван в контексте любого другого значения. И результат зависит от типа этого значения.
// Для числа это будет [object Number]
// Для булева типа это будет [object Boolean]
// Для null: [object Null]
// Для undefined: [object Undefined]
// Для массивов: [object Array]
// …и т.д. (поведение настраивается).

let objectToString = Object.prototype.toString;

let arr2 = [];

console.log( objectToString.call(arr) ); // [object Array]

let s = Object.prototype.toString;

console.log( s.call(123) ); //[object Number]
console.log( s.call(null) ); // [object Null]
console.log( s.call(alert) ); // [object Function]

let user = {
  [Symbol.toStringTag]: "User"
};

console.log( {}.toString.call(user) ); // [object User]

console.log( window[Symbol.toStringTag]); // window
console.log( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

console.log( {}.toString.call(window) ); // [object Window]
console.log( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
