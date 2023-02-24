function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

console.log( slow(1) );
console.log( "again " + slow(1) );

console.log( slow(2) );
console.log( "again " + slow(2) );


function sayHi() {
    console.log(this.name)
}
let user = { name: "Joe" };
let admin = { name: "Admin" };

sayHi.call( user );
sayHi.call( admin );

function say(phrase) {
    console.log(this.name + ", " + phrase)
}

let user2 = { name: "Lil" };
say.call( user, "Hello" );


let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log("called with " + x);
        return x * this.someMethod();
    },
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if(cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this,x);
        cache.set(x, result);
        return result;
    };
};

worker.slow = cachingDecorator(worker.slow);

console.log( worker.slow(2) );
console.log( worker.slow(2) );


let worker2 = {
    slow(min,max) {
        console.log(`called with ${min}, ${max}`);
        return min + max;
    }
};

console.log(worker2);

function cachingDecoratorWorker2(func, hash) {
    let cache = new Map();
    console.log(cache);
    return function() {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        let result = func.call(this, ...arguments);
        
        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[2];
}
console.log(hash);

worker2.slow = cachingDecoratorWorker2(worker2.slow, hash);

console.log(worker2.slow);

console.log( worker2.slow(3, 5) );
console.log( "again " + worker2.slow(3, 5) );