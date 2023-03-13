class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} run with speed ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} standing still`);
  }
}

let animal = new Animal("My Pet");


class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

let rabbit = new Rabbit("White rabbit");

rabbit.run(5);
rabbit.hide();

class Animal2 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} running with speed ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}

class Rabbit2 extends Animal2 {
  hide() {
    console.log(`${this.name} is hiding`); 
  }
  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit2 = new Rabbit2("Black rabbit");

rabbit2.run(5);
rabbit2.stop();

// redeterminasation of constructor

class Rabbit3 extends Animal2 {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

let rabbit3 = new Rabbit3("gray rabbit", 10);
console.log(rabbit3.name);
console.log(rabbit3.earLength);

class Animal4 {
  showName() {  // вместо this.name = 'animal'
    console.log('animal4');
  }

  constructor() {
    this.showName(); // вместо alert(this.name);
  }
}

class Rabbit4 extends Animal4 {
  showName() {
    console.log('rabbit4');
  }
}

new Animal4(); // animal
new Rabbit4(); // rabbit

//Home Object

let animal5 = {
  name:"Animal",
  eat() {
    console.log(`${this.name} eats`);
  }
};

let rabbit5 = {
  __proto__: animal5,
  name:"rabbt5",
  eat() {
    super.eat();
  }
}

let longEars = {
  __proto__: rabbit5,
  name: "LongEars",
  eat() {
    super.eat();
  }
};

longEars.eat();
rabbit5.eat();