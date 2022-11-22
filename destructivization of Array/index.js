let arr = ["John", "Weak"];
let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

let [firstName2, surname2] = "John Weak2".split(" ");
console.log(firstName2, surname2)

let [firstName3, , , surname3] = ["John", "mike", "bob", "Weak3", "Bill"]; // , , , coma is like a missing of an elem position
console.log(firstName3,surname3);

let [a, b, c] = "abc";
console.log(a, b, c);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three);

let user = {};
[user.name, user.age] = "John 30".split(" "); // adding prop to obj, and so on
console.log(user.name, user.age);

let user22 = {
  name: "John22",
  age: 322,
}
for (let[key, value] of Object.entries(user22)) {
  console.log(`${key}:${value}`);
}

let user33 = new Map();
user33.set("name", "John33");
user33.set("age", 333);
for (let [key, value] of user33) {
  console.log(`${key}:${value}`);
};

let guest = "Jane";
let admin = "Bob";
[guest, admin] = [admin, guest]; // exchange of ~ trick
console.log(guest, admin);

let [name1, name2, ...rest] = ["John4", "Weak4", "bob", "billi"];
console.log(rest); //rest is array of the elems that wernt added to ~
console.log(name1) // is a ~ taken from array

let [name4 = "Guest", surname4 = "Anonimus"] = ["John44"]; // by default, could be even function
console.log(name4, surname4);

let [name5 = prompt("name?"), surname5 = prompt("surname?")] = [ , "Weak5"]; //name5 - undefined so will be requester by func prompt
console.log(name5, surname5);

