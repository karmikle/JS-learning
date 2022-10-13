let c = 5;

function myFunction() {
    const a = 3;
    const b = 4;
    const rzlt = a + b + c; // from outside the func
    console.log( "1st func", rzlt ); 
    c = 10; //changed "c"
}
console.log( "1st func old c - " + c);
myFunction();
console.log( "1st func changed c - ", c);
myFunction(); // rzlt with changed "c"


function mySecondFunction( firstA, secondA) { //defined default parametrs ( firstA="", secondA = "") or ->
    if ( secondA === undefined ) {
        secondA = 0;
    }
    if ( firstA === undefined ) {
        firstA = 0;
    }
    firstA = ( firstA ** 2 ) ** (1/2); //always positive
    secondA = ( secondA ** 2 ) ** (1/2); // always positive
    rzult = firstA + secondA;
    console.log( "2nd func", rzult );
}
mySecondFunction(14, 12);


function myThirdFunction( a, b ) {
    return a + b;
}
let sum = myThirdFunction( 3, 5);
console.log( "3rd func", sum)

function chkage(age) {
    if ( age > 18 ) {
        return true;
    } else {
        return confirm( "confirm clearence ?" );
    }
}

let age = prompt ( "How old r U?" , "")
    if ( chkage(age) ) {
        console.log( "Approved" );
    } else {
        console.log( "Denied" );
    }

function isPrime(n) {
    for ( i = 2; i < n ; i++) {
        if ( n % i == 0) return false;
    } // possible with "else"
    return true;
}
console.log( isPrime(7) ); //checked "7" or any  for prime

function sayHi() {
    console.log("hi");
}
let func = sayHi;
func(); // copied function sayHi
sayHi(); // original sayHi

let sayYou = function() { // function expression
    console.log( "You" );
}; // <- ; - is recomended for better understanding
sayYou();


function ask( question, yes, no) {
    if ( confirm (question) ) yes()
    else no();
}
function showOk() {
    console.log("ooook");
}
function showNo() {
    console.log("noooo");
}
ask( "Any question" , showOk, showNo );

function askAsk(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

askAsk(
    "any question",
    function() { console.log("ooookkkk"); }, //more hiden varient of function expression
    function() { console.log("NNNNoooo"); }  //more hiden varient of function expression
);

let arrowFunc = (c, d) => c + d;
console.log( arrowFunc(3, 4) );  // shorter varriant of function below;

let arrowFunction = function(a , b) {
    return a + b;
};
console.log( arrowFunction(5 , 6) ); 