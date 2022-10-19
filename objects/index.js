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
