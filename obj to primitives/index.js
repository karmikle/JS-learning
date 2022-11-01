"use strict";

let user = {
    name: "Vital",
    money: 1000000,

    [Symbol.toPrimitive](hint) {                                                //Symbol.toPrimitive(hint)
        console.log(`hint: ${hint}`);
        return hint == "string" ?  `{name: "${this.name}"}` : this.money;
    }
};
console.log(user);
// alert(user);
console.log(+user);
// alert(+user)
console.log(user + 1000000);
// alert(user + 50000000);

let user2 = {
    name: "Alina",
    money: 2000,

    toString() {                            // to string + valueOf
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    },
}

console.log(user2);
console.log(+user2);
console.log(user2 + 200);

