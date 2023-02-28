let arr = [1, 2, 3];

console.log( arr.__proto__ === Array.prototype );
console.log( arr.__proto__.__proto__ == Object.prototype );
console.log( arr.__proto__.__proto__.__proto__);

function f() {};
console.log( f.__proto__ == Function.prototype );
console.log( f.__proto__.__proto__ == Object.prototype );

String.prototype.show = function() {
  console.log(this);
}

"booboo".show(); // not recomended if it is only a polyfill

let obj = {
  0: "Hello",
  1: "World",
  length: 2,
};

obj.join = Array.prototype.join;

console.log( obj.join(", ") );