let animal = {
  eats: true,
  walk() {
    console.log("animal walk")
  },
};
let rabit = {
  jumps: true,
  __proto__: animal
};

let longEars = {
  earLenght: 10,
  __proto__: rabit,
};

console.log(rabit.eats);
console.log(rabit.jumps);
rabit.walk();
longEars.walk();
console.log(longEars.jumps);

let rabit2 = {
  __proto__: animal
};

rabit2.walk = function() {
  console.log("bouce-bounce"); // own method for rabit2
}
rabit2.walk(); 

let user = {
  name: "lil",
  surname: "doe",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ")
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
}

console.log(admin.fullName);
admin.fullName = "alice coop";
console.log(admin.name);
console.log(admin.surname);
console.log(admin.fullName);

//this
let animal2 = {
  walk() {
    if(!this.isSleeping) {
      console.log("I'm walkng");
    }
  },
  sleep() {
    this.isSleeping = true
  }
};

let rabit3 = {
  name: "white rabbit",
  __proto__: animal2,
};

rabit3.sleep();

console.log(rabit3.isSleeping);
console.log(animal2.isSleeping);

// for ... in

let animal3 = {
  eats: true,
}

let rabit4 = {
  jumps: true,
  __proto__: animal3
};

console.log(Object.keys(rabit4));
for(let prop in rabit4) console.log(prop);

let animal4 = {
  eats: true,
}

let rabit5 = {
  jumps: true,
  __proto__:animal4,
};

for (let prop in rabit5) {
  let isOwn = rabit5.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}