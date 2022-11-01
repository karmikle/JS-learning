let id = Symbol("id"); // name
console.log(id.toString()); // чтобы преобразоватьб сами по себе не преобразовываються
console.log(id.description); //

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

const user = {
    name: "Mike",
};

let id3 = Symbol("id");

user[id3] = 1;

console.log(user[id3]);

let id4 = Symbol("id");

let user2 = {
    name: "Pete",
    [id4]: 123 // [] needed, just id4: 123 will not work
}
console.log(user2[id4]);

let id5 = Symbol("id");
let user3 = {
    name: "Jane",
    age: 25,
    [id]: 222,
}

for (let key in user3) console.log(key); // [id] no acsess
console.log( "direct: " + user3[id] ); // direct acsess enabled

let id6 = Symbol("id");
let user8 = {
    [id]: 333,
};

let clone = Object.assign({}, user8); // coped all prop of an object

console.log("user6: " + clone[id]);

let sym = Symbol.for("name");
let sym2 = Symbol.for("id")

console.log( Symbol.keyFor(sym) );
console.log( Symbol.keyFor(sym2) ); // will not work for NON-Global symbols

let globalSymbol = Symbol.for("name name");
let localSymbol = Symbol("name name");

console.log( Symbol.keyFor(globalSymbol) );
console.log( Symbol.keyFor(localSymbol) );