let john = { name: "John"};
let visitorCountMap = new Map();
visitorCountMap.set(john, 123);
console.log(visitorCountMap);
console.log(visitorCountMap.get(john));

let vegList = new Map ([
  ["cucumber", 500],
  ["tomato", 100],
  ["onion", 50],
]);

for (let vegetable of vegList.keys()) {
  console.log(vegetable)
}

for (let amount of vegList.values()) {
  console.log(amount);
}

for (let entry of vegList) {
  console.log(entry);
}

vegList.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);
console.log( map.get(1)); // num1

let obj = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj));
console.log(map2.get("name"));
console.log(map2.get("age"));

let prices =  Object.fromEntries([
  ["banana", 1],
  ["orange", 3],
  ["berry", 34],
]);

console.log(prices)
console.log(prices.orange)

let map3 = new Map();
map3.set("banana", 1);
map3.set("orange", 5);
map3.set("berry", 34);
console.log(map3)

let obj3 = Object.fromEntries(map3.entries());
console.log(obj3)

let obj4 = Object.fromEntries(map3)
console.log(obj4)

console.log(obj3 == obj4)

console.log("\nSET");

let set = new Set();
let dude = {name: "Dude"};
let peter = {name: "Peter"};
let marry = {name: "Marrry"};

set.add(john);
set.add(marry);
set.add(marry);
set.add(dude);

console.log(set.size);

for (let user of set) {
  console.log(user.name);
};

let set2 = new Set(["orange", "apple", "banana"]);
for (let value of set2) console.log(value);
set2.forEach((value,valueAgain, set2) => {
  console.log(value)
})
