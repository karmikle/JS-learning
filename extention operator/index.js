function sum(a, b) {
  return a + b;
}

console.log( sum(1, 2, 3, 4, 5) );

function sumAll (...args) {
  let sum = 0;

  for (let arg of args) sum +=arg;

  return sum;
}

console.log( sumAll(1) );
console.log( sumAll(1, 2) );
console.log( sumAll(1, 2, 3) );
console.log( sumAll(1, 3, 4, 6) );

function showName(firstName, lastName, ...titles) { //...titles in the end
  console.log(firstName + " " + lastName);
}
titles = ["Консул", "Император"]
console.log( titles[0] )
console.log( titles[1] )
console.log( titles.length );

showName("Юлий", "Цезарь", "Консул", "Император");
// ...rest - always in the end

//arguments - псевдомасив и => не имеют arguments

let arr = [1, 2, 6];
console.log( Math.max(...arr) ); // расширяет перебираемый обьект (масив) в список аргументов.

let arr2 = [2, -5, 6, 8, 33];
let arr3 = [4, 6, 32, -7];
console.log( Math.max(...arr2, ...arr3) );
console.log( Math.max(...arr2, ...arr3, 45) ); // combine with reglar meanings

let merged = [0, ...arr2, 222, ...arr3, ...arr]; //даже для слияние масивов
console.log(merged);

let str = "hello";
console.log([...str]); // string to array from symbols, like Array.from, but works only with iterated objects
console.log( Array.from(str) ); // the same bt Array.from works with pseudomassives + iterated objects(more universal)   