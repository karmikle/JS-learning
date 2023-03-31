// примесь
let sayHiMixin = {
  sayHi() {
    console.log(`Привет, ${this.name}`);
  },
  sayBye() {
    console.log(`Пока, ${this.name}`);
  }
};

// использование:
class User {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!
new User("Вася").sayBye();



let sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};

let sayHiMixin2 = {
  __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)

  sayHi() {
    // вызываем метод родителя
    super.say(`Привет, ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Пока, ${this.name}`); // (*)
  }
};

class User2 {
  constructor(name) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User2.prototype, sayHiMixin2);

// теперь User может сказать Привет
new User2("Вася2").sayHi(); // Привет, Вася!