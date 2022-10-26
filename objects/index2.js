const user = {name: "Vitalik"};

let permissins1 = {car: true};
let permissins2 = {bike: true};

console.log(user);

Object.assign(user, permissins1, permissins2, {name: "Vit"});

console.log(user);

let clone = Object.assign({}, user)

console.log(clone)

const user2 = {
    name: "Vitalik",
    age: 35,
    sayYo: function () { // как варриант
        console.log("Yo");
    },
    sayNo() { // то же что и выше
        console.log("No");
    },
}

user2.sayHi = function() {
    console.log("Hi")
}
console.log(user2)
user2.sayHi()

const user3 = {
    name: "karmikle",
    age: 35,
    sayHi() {
        console.log(this.name);
    },
    // sayHi() { //то же что и вышеб использывав внешнюю ~
    //     console.log(user3.name);
    // },
}
user3.sayHi();

const cat = {
    name: "Cat",
}
const dog = {
    name: "Dog",
}

function sayKva() {
    console.log(this.name, "KVA - KVA")
};

cat.voice = sayKva;
dog.voice = sayKva;

console.log(cat);
console.log(dog);

cat.voice();
dog.voice();

function User(name, age) {
    this.name = name;
    this.age = age;
}

let shmuser = new User("vital", 35);
console.log(shmuser.name, shmuser.age);

function Shuser(name) {
    if (!new.target) {              // if without new below
        return new Shuser(name);
    }
    this.name = name;
}

let mike = Shuser("mike");
console.log(mike.name);

function User2(name) {
    this.name = name;
    this.sayHi = function() {                               // Method - function in object
        console.log("my name is " + this.name + ". Hi!!!")
    };
}

let merry = new User2("Marry");

merry.sayHi();

// let user4 = {};
// console.log(user4.adress.street); // mistake of no such prop =>

let user5 = {};
console.log(user5.adress ? user5.adress.street : undefined);

let user6 = {};
console.log(user6.adress && user6.adress.street && user6.adress.street.name);

let user7 = {};
console.log(user7?.adress?.street);

let userAdmin = {
    isAdmin() {
        console.log("Hello Admin " + true)
    }
};

let userNotAdmin = {};

userAdmin.isAdmin?.();
userNotAdmin.isAdmin?.(); // nothing happend, because no such method in this user( no isAdmin )