// let arr = [ 2, 1, 4, undefined, 3, 2, -2];
// console.log(arr);
// let changedArr = arr.map( item => item ?? 0);
// console.log(changedArr);
// changedArr.sort( (a, b) => a - b);
// console.log(changedArr);
// console.log(changedArr.slice(1, - 1));
// let redusedArr = changedArr.slice(1, -1);
// let sum = redusedArr.reduce((sum, current) => sum + current);
// console.log(sum);

// let arr = [ null, -2, 5, 7, 3, 2, 2, 15, 15];
// arr = Array.from( arr, item => item || 0 );
// console.log(arr);
// arr.sort( ( a, b ) => a - b );
// console.log(arr);
// let changedArr = arr.slice( 1, -1 );
// console.log(changedArr);
// let sum = changedArr.reduce( ( sum, current) => sum + current, 0 );
// console.log(sum);

// function sumArray(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) {
//       return 0;
//     }
    
//     arr.sort( ( a, b ) => a - b );
//     changedArr = arr.slice( 1, -1 );
    
//     let sum = changedArr.reduce( ( sum, current) => sum + current, 0 );
    
//     return sum;
// }

// console.log(sumArray(arr))

// sumArray2 = arr => arr ? arr.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

// console.log(sumArray2(arr))

function cockroachSpeed(km) {
   return Math.floor(km * 250 / 9);
}
console.log(cockroachSpeed(1.09));
console.log(typeof cockroachSpeed(1.08))

let s = (km) => Math.floor(km * 250 / 9);
console.log(s(1.08))