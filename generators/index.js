function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
};

// Функции-генераторы ведут себя не так, как обычные. Когда такая функция вызвана, 
// она не выполняет свой код. Вместо этого она возвращает специальный объект, 
// так называемый «генератор», для управления её выполнением.

function* generateSequence2() {
    yield 1;
    yield 2;
    yield 3;
};

let generator = generateSequence2();
console.log(generator);

// Результатом метода next() всегда является объект с двумя свойствами:

// value: значение из yield.
// done: true, если выполнение функции завершено, иначе false.

function* generateSequence3() {
    yield 1;
    yield 2;
    return 3;
};

let generator3 = generateSequence3();

let one = generator3.next();
console.log(JSON.stringify(one));
// овторный вызов generator.next() возобновит выполнение кода и вернёт результат следующего yield:
let two = generator3.next();
console.log(JSON.stringify(two));

let three = generator3.next();
console.log(JSON.stringify(three));

// генераторы являются перебираемыми объектами.
// Возвращаемые ими значения можно перебирать через for..of:

function* generateSequence4() {
    yield 1;
    yield 2;
    return 3;
};

let generator4 = generateSequence4();

for(let value of generator4) {
    console.log(value); // 1, затем 2
};

// Но обратите внимание: пример выше выводит значение 1, затем 2. Значение 3 выведено не будет!
// Это из-за того, что перебор через for..of игнорирует последнее значение, 
// при котором done: true. Поэтому, если мы хотим, чтобы были все значения 
// при переборе через for..of, то надо возвращать их через yield:

function* generateSequence5() {
    yield 11;
    yield 22;
    yield 33;
};

let generator5 = generateSequence5();

for(let value of generator5) {
    console.log(value); // 11, затем 22, 33
};

// Так как генераторы являются перебираемыми объектами, 
// мы можем использовать всю связанную с ними функциональность, 
// например оператор расширения ...:

function* generateSequence6() {
    yield 111;
    yield 222;
    yield 333;
};

let sequence = [0, ...generateSequence6()];

console.log(sequence);

// Некоторое время назад, в главе Перебираемые объекты, 
// мы создали перебираемый объект range, 
// который возвращает значения from..to.


let range = {
    from: 1,
    to: 7,
  
    // for..of range вызывает этот метод один раз в самом начале
    [Symbol.iterator]() {
      // ...он возвращает перебираемый объект:
      // далее for..of работает только с этим объектом, запрашивая следующие значения
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается при каждой итерации цикла for..of
        next() {
          // нужно вернуть значение как объект {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
};
  
// при переборе объекта range будут выведены числа от range.from до range.to
console.log([...range]); // 1,2,3,4,5

let range2 = {
    from: 1,
    to: 6,
  
    *[Symbol.iterator]() {
      for( let value = this.from; value <= this.to; value++ ) {
        yield value;
      }
    }
  };
  
  console.log( [...range2] );

  // Композиция генераторов

// Композиция генераторов – это особенная возможность генераторов, 
// которая позволяет прозрачно «встраивать» генераторы друг в друга.
// Например, у нас есть функция для генерации последовательности чисел:

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

function* generateSequence7(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes7() {
  // 0 - 9
  yield* generateSequence7(48, 57);

  //A - Z
  yield* generateSequence7(65, 90);

  //a - z
  yield* generateSequence7(97, 122);

}

let str7 = "";

for (let code of generatePasswordCodes7()) {
  str7 += String.fromCharCode(code);
}

console.log(str7);

// Результат – такой же, как если бы мы встроили код из вложенных генераторов:

function* generateSequence8(start, end) {
  for (let i = start; i <= end; i++) yield i;
}


function* generateAlphaNum8() {

  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;

}

let str8 = '';

for(let code of generateAlphaNum8()) {
  str8 += String.fromCharCode(code);
}

console.log(str8); // 0..9a..zA..Z



function* gen() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator9 = gen();

let question = generator9.next().value; // <-- yield возвращает значение

generator9.next(4); // --> передаём результат в генератор

function* gen2() {
  let ask1 = yield "2 + 2 = ?";
  console.log(ask1);
  let ask2 = yield "3 + 3 = ?";
  console.log(ask2);
}

let generator10 = gen2();

console.log( generator10.next().value );
console.log( generator10.next(4).value );
console.log( generator10.next(9).done );


// Первый .next() начинает выполнение… Оно доходит до первого yield.
// Результат возвращается во внешний код.
// Второй .next(4) передаёт 4 обратно в генератор 
// как результат первого yield и возобновляет выполнение.
// …Оно доходит до второго yield, который станет результатом .next(4).
// Третий next(9) передаёт 9 в генератор как результат второго yield 
// и возобновляет выполнение, которое завершается окончанием функции, 
// так что done: true.
// Получается такой «пинг-понг»: каждый next(value) передаёт в генератор значение, 
// которое становится результатом текущего yield, возобновляет выполнение 
// и получает выражение из следующего yield.


// generator.throw


function* gen3() {
  try {
    let result = yield "2 + 2 = ?";
    console.log("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение")
  } catch(e) {
    console.log(e);
  }
}

let generator11 = gen3();

let question11 = generator11.next().value;
generator11.throw(new Error("no answer in my data"));



function* generate() {
  let result = yield "2 + 2 = ?"; // Ошибка в этой строке
}

let generator12 = generate();
let question12 = generator12.next().value;

try {
  generator12.throw(new Error("no answer in my data"));
} catch(e) {
  console.log(e);
}