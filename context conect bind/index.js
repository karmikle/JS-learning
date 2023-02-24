let user = {
    firstName: "Joe",
    sayHi() {
        console.log(`Hi, ${this.firstName}`);
    },
};

setTimeout(function() {
    user.sayHi()
}, 1000);

// or!!!

setTimeout(() => user.firstName = "mike", 1500);

setTimeout(() => user.sayHi(), 2000); // but during 2s firstName could be changed so use bind ->>


// bind
let user2 = {
    firstName: "Joe2",
};

function func2(phrase) {
    console.log(phrase + ', ' + this.firstName);
}

let funcUser2 = func2.bind(user2);
funcUser2("Hi");

let user3 = {
    firstName: "Bob",
    sayHi() {
        console.log(`Hi, ${this.firstName}`);
    },
}

let sayHi = user3.sayHi.bind(user3)

sayHi(); //called individualy or
setTimeout(sayHi, 3000); //by setTimeout

let user4 = {
    firstName: "lil",
    say(phrase) {
        console.log(`${phrase}, ${this.firstName}`);
    },
}

let say = user4.say.bind(user4);

say("Pyvit");
say("Dopobachennya");

// bind ALL

// for (let key in user) {
//   if (typeof user[key] == 'function') {
//     user[key] = user[key].bind(user);
//   }
// }

function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2); // null as context
console.log( double(2) );
console.log( double(5) );
console.log( double(7) );

function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

let user5 = {
    firstName: "ken",
    say(time, phrase) {
        console.log(`${time} ${this.firstName}: ${phrase}`);
    }
}

user5.sayNow = partial( user5.say, new Date().getHours() + ':' + new Date().getMinutes() );

user5.sayNow("Kuku");