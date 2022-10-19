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
let undef = '';
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
console.log("hi");

console.log(Number("5"));
console.log(Number("a5"));
console.log(Number("5a"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));

console.log(Number( 5 + "5" ));
console.log(Number( 5 + + "5" ));
console.log(Number( +"true"));
console.log(Number( +true ));
console.log(Number( +false ));
console.log(Number( +null ));
console.log(Number( +undefined ));

console.log( 5 % 2);
console.log( 2 ** -2); // = 1/ 2**2 = =0.25
console.log( 4 **(-1/2)); // = 1 / кв корень из 4х = 0.5
console.log( 8 **(-1/3));
console.log( 1/8**(-2/3)); // = 8 в степени 2/3 = корень куб из 8**2

let aaa, bbb, ccc;
aaa = bbb = ccc = 2 + 2;
console.log( aaa, bbb, ccc);

let counter = 1;
  //counter = ++counter; // (*) меняем ++counter на counter++ 2
console.log( counter++ ); // 1

console.log( 'a' > 'z')
console.log( 'a' < 'z')
console.log( 'a' > 'A')
console.log( 'a' < 'A')
console.log( 'abc' > 'abz')
console.log( 'абв' > 'абг')
console.log( 'я' > 'а')
console.log( 'z' > 'a')
console.log( 'a' > 'A')

let div = prompt ( "", "");
let div2 = "/"
console.log(div)
console.log(typeof div)
console.log(div2)
console.log(typeof div2)
console.log(div == div2)
console.log(div === div2)