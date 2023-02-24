let obj = {
  get propName() {
  }, // when read

  set propName(value) {
  }, // when written obj.propName = value
}

let user = {
  name: "Joe",
  surname: "Mr",

  get fullName() {
    return `${this.surname} ${this.name}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ")
  } 
};

console.log(user.fullName);

user.fullName = "Vitaliy Galyko";

console.log(user.name);
console.log(user.surname);

console.log(user.fullName);

// get – функция без аргументов, которая сработает при чтении свойства,
// set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
// enumerable – то же самое, что и для свойств-данных,
// configurable – то же самое, что и для свойств-данных.

let user2 = {
  name: "John",
  surname: "Doe",
};

Object.defineProperty(user2, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(user2.fullName);

for (let key in user2) console.log(key);

//smart get/set

console.log("\nsmart get/set");

let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("too short name, needed 4 and more");
      return
    }
    this._name = value;
  }
};

user3.name = "Mike";
console.log(user3.name);

user3.name = "1234"
console.log(user3.name);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let vita = new User("vita", new Date(1987, 5, 22));

console.log( vita.birthday );
console.log( vita.age );
