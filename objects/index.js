const obj = {
    name: "vitalik",
    surname: "galyko",
    print: () => {
        console.log( `${obj.name}, ${obj.surname}` );
    }
}
console.log( obj );

const copyObj = obj;

const obj2 = new Object( {
    name: "vitalik",
    surname: "galyko",
    print: () => {
        console.log( obj.name );
    }
})
console.log( obj2 );

console.log ( obj === obj2);

console.log( copyObj === obj );

console.log( obj["name"] ); //same as obj.name

obj.print();

const car = {
    type: "megane",
    age: "2013",
    color: "white",
}

obj.car = car;

console.log(obj);

for (plase in obj) {
    console.log(plase)
}

const user = {
    name: "Vitalik",
    age: 35,
}

user["like beer"] = true;

console.log(user);

delete user["like beer"];

console.log(user);

let like = "like wiskey";
user[like] = true;
console.log(user);


let key = prompt (" ? ", "name")
console.log( user[key] );

let fruit = prompt ( "?", "apple");
let bag = {
    [fruit]: 5,
}

console.log(bag.apple);


function makeUser (name, age) {
    return {
        name:name, // possible just "name,"
        age:age, // same , possible just age and s.o.
    }

}

let user2 = makeUser("Vitalik2", 35);
console.log(user2.name, user2.age);
console.log("name" in user2);
console.log("car" in user2);

let user3 = {
    name3: "vitalik3",
    age3: 35,
    "like wiskey": true
  };
for (let key in user3) {
    console.log(key);
    console.log(user3[key]);
}

let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    "1": "США"
}
for (let code in codes) {
    console.log(code);
}

let codes2 = {
    "+49": "Германия", // added "+" чтобы уйти от преобразования в целочисленные значения, => выводит в порядке создания
    "+41": "Швейцария",
    "+44": "Великобритания",
    "+1": "США"
}
for (let code in codes2) {
    console.log(+code);
}
