console.log('hello 3')
// let a = 5; 
console.log(a);
var a = 5;
console.log(a);
const obj = {};
const myFunction = function() {
    return null;
};
const rez_number = typeof 10;
const rez_string = typeof '10';
const rez_boolean = typeof false;
const rez_null = typeof null;
const rez_undefind = typeof undefined;
const rez_obj = typeof obj;
const rez_func = typeof myFunction;

console.log(rez_number);
console.log(rez_string);
console.log(rez_boolean);
console.log('rez_func', rez_func);
console.log(rez_null); // будет object
console.log(rez_undefind);
console.log(rez_obj);
console.log(1/0);
console.log('s123s'/2);

let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

const str = '123';
console.log(typeof str);
const num = Number(str); // вводим нов ~ чтобы изменить тип конст.
console.log(typeof num);

let numbr = 123;
let strg = '123z';
let strg2 = '123';
let undef = ''
let booln = true;
let booln2 = false;

console.log(numbr);
console.log(Number(strg) );
console.log(Number(strg2) );
console.log(Number(undef) );
console.log(Number(booln) );
console.log(Number(booln2) );

const aa = 2, bb = 0;
const rez_infty = aa / bb;

console.log(rez_infty);
console.log(Number(rez_infty));
console.log(String(rez_infty));
console.log(Boolean(rez_infty));