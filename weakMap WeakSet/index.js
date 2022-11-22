let john = {name: "John"};
let weakMap = new WeakMap();
weakMap.set(john, "...")
john = null;
console.log(weakMap)