// let billion = 1000000000;
// let blon = 1e9;
// let ms = 1e-6;

// let num = 255;
// console.log( num.toString(2) );
// console.log( num.toString(16) )
// console.log( 123456..toString(36) );

// console.log( Math.floor(3.3) ); //3
// console.log( Math.floor(3.6) ); //3

// console.log( Math.ceil(3.3) ); //4
// console.log( Math.ceil(3.6) ); //4

// console.log( Math.round(3.3) ); //3
// console.log( Math.round(3.6) ); //4

// console.log( Math.trunc(3.3) ); //with no .3
// console.log( Math.trunc(3.6) ); //

// let num2 = prompt( "? num", "" );
// console.log( isFinite(num2) ); // isNaN
// console.log( isNaN(num2) );

// console.log( Number.isNaN(123) ) // false
// console.log( Number.isFinite(123) ) //true

// //Object.is(a, b) // same as a === b

// console.log( parseInt("123.23$") );
// console.log( parseFloat("123.23$") );
// console.log( parseInt("0xff", 16) ) // 2nd argument - count system
// console.log( parseInt("ff", 16) )

// console.log( Math.random() );

let a = 1;
let b, c, d, x, r, fin;
function quantity() {
    b = +prompt( "enter quantity", "?");                            // вводим количество для рандома
    if( isFinite(b) && b <=9999 ) {
        toFxd()                                                     // определяем длинну числа и множитель для random
        return b;
    } else {
        alert("enter number more than 1 and less than 10000", "")
        quantity();
        return b;
    }
}

function toFxd() {                                                  // определяем длинну числа и множитель для random
    if (b < 10) { d = 1, x = 10} else
    if (b >= 10 && b < 100) { d = 2, x = 100 } else
    if (b >= 100 && b < 1000) { d = 3, x = 1000 } else
    if (b >= 1000 && b < 10000) { d = 4, x = 10000 }
}

function random() {                                                 // берем рандомное число прим 0.11212314
    c = Math.random();
}

function rez() {                                                    // предварително определив максимальное чило "d" и множитель "x" получаем целое ранодомное число
    r=Number(c).toFixed(d) * x;
}

function finalRezult() {                                            // циклическая проверка чтобы рандомное число не было больше указаного "b" и не равнялось 0
    if ( r > b  || r == 0 ) {
        random();
        rez();
        finalRezult();
    } else {
        fin =Number(r).toFixed(0);                                  // после проверки получаем рандомное число в указаном диапазоне) + проверка на значения после запятой
        alert(fin);
        console.log(+fin);
        return fin
    }
}

function rundomizer() {                                             // заворачиваем всё в функию
    if( quantity() ) {
        random();
        rez();
        finalRezult();
        rundomizer()
    }
}

rundomizer(); // рандомайзер для числео от 1 до 299999

function randomInteger(min, max) {                               // тоже рандомайзер
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(rand))
    return Math.floor(rand);                                   // убирает значения после запятой
  }

function infRandom() {
    if ( randomInteger(1, 9999)) {
        infRandom()
    }
}
