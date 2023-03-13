class User {
    static staticMethod() {
        console.log( this === User );
    }
}

User.staticMethod();

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("css", new Date(2019, 0, 1)),
    new Article("JS", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log( articles[0].title);

class Article2 {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createToday() {
        return new this("Today Digest", new Date);
    }
}

let article2 = Article2.createToday();

console.log( article2.title);


// static prop

class Article3 {
    static publisher = "karmikle";
}

console.log( Article3.publisher );

class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} run with a speed ${this.speed} m/s`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {
    hide() {
        console.log( `${this.name} is hiding` );
    }
}

let rabbits = [
    new Rabbit("White one", 15),
    new Rabbit("Black one", 10)
];

rabbits.sort(Rabbit.compare);
i
rabbits[0].run();
rabbits[1].run();

// class MyClass {
//     static property = ...;
  
//     static method() {
//       ...
//     }
//   }