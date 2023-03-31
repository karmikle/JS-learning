try {
  console.log("start");
  lalala
  console.log("end");
} catch(err) {
  console.log("error")
}

setTimeout(function() {
  try {
    noSuchVariable;
  } catch {
    console.log("error");
  }
}, 1000);

try {
  lalala; // ошибка, переменная не определена!
} catch(err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

  // Можем также просто вывести ошибку целиком
  // Ошибка приводится к строке вида "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

let json = "{ некорректный JSON }";

try {
  let user = JSON.parse(json);
  console.log(user.name);

} catch (e) {
  console.log( "sorry error" );
  console.log( e.name );
  console.log( e.message );
}

let json2 = '{ "age": 30 }'; // данные неполны

try {

  let user2 = JSON.parse(json2); // <-- выполнится без ошибок
  console.log( user2.name ); // нет свойства name!

} catch (e) {
  console.log( "не выполнится" );
}

let error = new Error("Oh, error!")

console.log(error.name);
console.log(error.message);

let json3 = '{ "age": 30 }';
try {
  let user3 = JSON.parse(json3);
  
  if(!user3.name) {
    throw new SyntaxError("Not full data: no name");
  }

  console.log(user3.name);

} catch(e) {
  console.log( "JSON Error:" + e.message );
}


let json4 = '{ "age": 30 }'; // данные неполны

try {
  user4 = JSON.parse(json4); // <-- забыл добавить "let" перед user

} catch(errr) {
  console.log("JSON Error: " + errr.name); // JSON Error: ReferenceError: user is not defined
  // (не JSON ошибка на самом деле)
}

// Есть простое правило:

// Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.

// Техника «проброс исключения» выглядит так:

// Блок catch получает все ошибки.
// В блоке catch(err) {...} мы анализируем объект ошибки err.
// Если мы не знаем как её обработать, тогда делаем throw err.

let json5 = '{ "age": 30 }';
try {
  let user5 = JSON.parse(json5);
  if(!user5.name) {
    throw new SyntaxError("data is not full: no name");
  }

  blablabla(); // неожиданная ошибка

  console.log(user5.name);
} catch(e5) {
  if (e5.name == "SyntaxError") {
    console.log( "JSON Error: " + e5.message );
  } else {
    throw e5;
  }
}


function readData() {
  let json6 = '{ "age": 30 }';

  try {
    blabla();
  } catch (e6) {
    if(e6.name != 'SyntaxError') {
      throw e6; // проброс исключения (не знаю как это обработать)
    }
  }
}

try {
  readData();
} catch (e6) {
  console.log( "Внешний catch поймал: " + e6 ); // поймал!
}

// try {
//   console.log( 'try' );
//   if (confirm('Сгенерировать ошибку?')) BAD_CODE();
// } catch (e) {
//   console.log( 'catch' );
// } finally {
//   console.log( 'finally' );
// }

let num = +prompt("enter + number", 35);

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("should be celoe + positive");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e7) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log( result || "error ocured");
console.log( ` procedure took ${diff}ms` );

// Конструкция try..finally без секции catch также полезна. Мы применяем её, когда не хотим здесь обрабатывать ошибки (пусть выпадут), но хотим быть уверены, что начатые процессы завершились.

// function func() {
//   // начать делать что-то, что требует завершения (например, измерения)
//   try {
//     // ...
//   } finally {
//     // завершить это, даже если все упадёт
//   }
// }


// global error

{/* <script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n В ${line}:${col} на ${url}`);
  };

  function readData() {
    badFunc(); // Ой, что-то пошло не так!
  }

  readData();
</script> */}
