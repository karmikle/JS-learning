// class MyClass {
//   prop = value; // свойство
//   constructor(...) { // конструктор
//     // ...
//   }
//   method(...) {} // метод
//   get something(...) {} // геттер
//   set something(...) {} // сеттер
//   [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//   // ...
// }

class User {
  constructor(name) {
    this.name = name;
  } //no coma between methods

  sayHi() {
    console.log(this.name);
  }
};

let user = new User("Mike");
user.sayHi();

class User2 {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

console.log(typeof User2);
console.log( User2 === User2.prototype.constructor);
console.log(User2.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User2.prototype));

class User3 {
  constructor() {}
}

console.log(User3); // class User { ... }, methods enumereble, always is striked!!!

//Class expressions

let User4 = class MyClass {
  sayHi() {
    console.log(MyClass); //is seen only inside class
  }
}

new User4().sayHi();
//console.log(MyClass); //is not defined

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    };
  };
}

let User5 = makeClass("hiiii");
new User5().sayHi();

class User6 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if(value.length < 4) {
      console.log("too short");
      return;
    }
    this._name = value;
  }
}

let user6 = new User6("Bobby");
console.log(user6.name);

user6 = new User6("");

// При объявлении класса геттеры/сеттеры создаются на User.prototype, вот так:

// Object.defineProperties(User.prototype, {
//   name: {
//     get() {
//       return this._name
//     },
//     set(name) {
//       // ...
//     }
//   }
// });

class User7 {

  ['say' + 'Hi']() {
    console.log("Привет");
  }

}

new User7().sayHi();

//props of class

class User8 {
  name = "Lylly";

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

new User8().sayHi();




// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }


// let clock = new Clock({template: 'h:m:s'});
// clock.start();