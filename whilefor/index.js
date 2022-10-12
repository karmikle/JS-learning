let a = 11;
while ( a <= 14) {
    console.log(a);
    a++
}

let aa = 3;
while ( aa ) console.log( aa-- ); // будет выполняться пока аа действит ( когда станет 0 остановиться)

let i = 3; // +do
do {
    console.log(i)
    i--
} while ( i > 0 );

for ( let c = 33; c <= 36; c++ ) {
    console.log(c);
}

for ( let d = 55; d < 60; d++) {
    console.log(d);
}

let sum = 0; // +breake
while (true) {
    let value = +prompt( "enter amount", "" );
    if (!value) break;
    sum += value;
}
console.log("Summa : " + sum);

for ( let num = 0; num <= 10; num++) { // + continue
    if ( num % 2 == 0) continue;
    console.log(num);
}

cicles: for ( let geo1 = 0; geo1 < 3; geo1++) { // разрыв цыкла с помощью метки
    for ( let geo2 = 0; geo2 < 3; geo2++) {
        let input = prompt( `coordinates (${geo1},${geo2})`, ""); // обратные скобки
        if (!input) break cicles; // в этом месте
    }
}
console.log("ready");

let n = 61;
allPrime:
for ( let x = 2; x <= n; x++ ) {
    for ( let y = 2; y < x; y++ ) {
        if ( x % y == 0 ) continue allPrime; // если делиться на 2 то пропускаем
    }
    console.log(x);
}