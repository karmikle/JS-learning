// // "Псевдокод" встроенного класса Error, определённого самим JavaScript
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
//     this.stack = <стек вызовов>; // нестандартное свойство, но обычно поддерживается
//   }
// }

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}


function test() {
  throw new ValidationError("Ups");
}

try {
  test();
} catch(err) {
  console.log(err.message);
  console.log(err.name);
  console.log(err.stack);
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }

  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

try {
  let user = readUser('{ "age": 35 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Некорректные данные: " + err.message);
  } else if (err instanceof SyntaxError) {
    console.log("JSON Ошибка Синтаксиса: " + err.message);
  } else {
    throw err; // неизвестная ошибка, пробросить исключение
  }
}



class ValidationError2 extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError2";
  }
}

class PropertyRequiredError extends ValidationError2 {
  constructor(property) {
    super("Нет свойства: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

function readUser2(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

try {
  let user = readUser2('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError2) {
    console.log("Неверные данные: " + err.message); // Неверные данные: Нет свойства: name
    console.log(err.name); // PropertyRequiredError
    console.log(err.property); // name
  } else if (err instanceof SyntaxError) {
    console.log("Ошибка синтаксиса JSON: " + err.message);
  } else {
    throw err; // неизвестная ошибка, повторно выбросит исключение
  }
}

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError3 extends MyError { };

class PropertyRequiredError3 extends ValidationError3{
  constructor(property) {
    super("No prop: " + property);
    this.property = property;
  }
}

console.log( new PropertyRequiredError3("field").name )


                                  // Read Error
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError4 extends Error { };
class PropertyRequiredError4 extends ValidationError4 { };

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError4("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError4("name");
  }
}

function readUser3(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Sintaxis error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError4) {
      throw new ReadError("Validation error", err);
    } else {
      throw err;
    }
  }
}

try {
  readUser3( '{bad json}' );
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    console.log("Исходная ошибка: " + e.cause);
  } else {
    throw e;
  }
}