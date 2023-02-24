let user = {
    name: "John"
};
  
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
console.log( JSON.stringify(descriptor, null, 2 ) );

let user2 = {};

Object.defineProperty(user2, "name", {
    value: "Lil"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, `name`);

console.log( JSON.stringify(descriptor2, null, 2) );

let user3 = {
    name: "bob"
};

Object.defineProperty(user3, "name", {
    writable: false
});

user3.name = "Pol";

console.log( user3.name ); // will be Bob, pol unable to redef

let user4 = {};
Object.defineProperty( user4, "name", {
    value: "Ron",
    enumerable: true,
    configurable: true
});

user4.name = "Bob";
console.log(user4.name); // will be Ron because writable = false as isential when is not defined\

// uncoutable
console.log("\nuncoutable")

let user5 = {
    name: "Holly",
    toString() {
        return this.name;
    }
}

for (let key in user5) console.log(key);

let user6 = {
    name: "Holly",
    toString() {
        return this.name;
    }
}

Object.defineProperty(user6, "toString", {
    enumerable: false
});

for (let key in user6) console.log(key); // no toString in numerable props
//console.log(Object.keys.apply(user6)); //the same

// unconfigurable
console.log("\nunconfigurable");

let descriptor3 = Object.getOwnPropertyDescriptor(Math, `PI`);
console.log( JSON.stringify(descriptor3, null, 2) );

let user7 = {
    name: "Will",
};

Object.defineProperty(user7, "name", {
    configurable: false
});

user7.name = "Nill"; // it works, because writable = true, prop of obj exist and have writable = true as isential
delete user7.name; // unable to delete
let descriptor4 = Object.getOwnPropertyDescriptor(user7, `name`);
console.log( JSON.stringify(descriptor4,null, 2) );

let user8 = {
    name: "Jill",
}

Object.defineProperty(user8, "name", {
    writable:false,
    configurable:false
});

// // user8.name = "Bill";
// // delete user8.name;
// Object.defineProperty(user8, "name", {value: "Bill"}); //user8.name is absolutly blocked for changes

console.log("/n proieS, destorS")

Object.defineProperties(user, {
    name: { value:"Jon", writable: false},
    surname: { value: "Smith", writable: false },
    //...
});

//Чтобы получить все дескрипторы свойств сразу, 
//можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj)); // to clone with flags

// Глобальное запечатывание объекта
// Дескрипторы свойств работают на уровне конкретных свойств.

// Но ещё есть методы, которые ограничивают доступ ко всему объекту:

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

// А также есть методы для их проверки:

// Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.

// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.

// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.