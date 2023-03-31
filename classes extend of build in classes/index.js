class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 3, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr);
console.log(filteredArr.isEmpty());

class PowerArray2 extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

let arr2 = new PowerArray2(1 ,3 ,5 ,20, 55);
console.log(arr2.isEmpty());

let filteredArr2 = arr2.filter(item => item >= 10);
// console.log(filteredArr2.isEmpty());