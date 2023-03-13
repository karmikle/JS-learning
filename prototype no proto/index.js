// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.

let animal = {
  eats: true,
};

let rabbit = Object.create(animal);

console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {});

let animal2 = {
  east:true,
};

let rabbit2 = Object.create(animal2, {
  jumps: {
    value: true
  }
});

console.log(rabbit2.jumps);

let clone = Object.create(Object.getPrototypeOf(rabbit2), Object.getOwnPropertyDescriptors(rabbit2)); //продвинутого» клонирования объекта, более мощного, чем копирование свойств в цикле for..in:
console.log(clone.jumps);

// простейший обьект
let obj = Object.create(null);

let key = prompt("?", "__proto__");
obj[key] = "some value";
console.log(obj[key]); 

// Ещё методы:

// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
// Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.
// Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.
// Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.
// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.