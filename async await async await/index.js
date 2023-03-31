// У слова async один простой смысл: эта функция всегда возвращает промис. 
// Значения других типов оборачиваются в завершившийся успешно промис автоматически.

// Например, эта функция возвратит выполненный промис с результатом 1:

async function f() {
    return 1;
}

f().then(console.log);

// Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор,
//  пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

// В этом примере промис успешно выполнится через 1 секунду:

async function ff() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready"), 1000)
    });

    let result = await promise;

    console.log(result);
}

ff();

// await нельзя использовать в обычных функциях
// Если мы попробуем использовать await внутри функции, объявленной без async, 
// получим синтаксическую ошибку:

// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // SyntaxError
// }
// Ошибки не будет, если мы укажем ключевое слово async перед объявлением функции. 
// Как было сказано раньше, await можно использовать только внутри async–функций.

// async function showAvatar() {

//     // запрашиваем JSON с данными пользователя
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
  
//     // запрашиваем информацию об этом пользователе из github
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();
  
//     // отображаем аватар пользователя
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
  
//     // ждём 3 секунды и затем скрываем аватар
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
//     img.remove();
  
//     return githubUser;
//   }
  
//   showAvatar();



// await работает с «thenable»–объектами
// Как и promise.then, await позволяет работать с промис–совместимыми объектами.
//  Идея в том, что если у объекта можно вызвать метод then, этого достаточно, 
//  чтобы использовать его с await.

// В примере ниже, экземпляры класса Thenable будут работать вместе с await:

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve,reject) {
        console.log(resolve);
        setTimeout(() => resolve(this.num * 2), 2000);
    }
};

async function fff() {
    let result = await new Thenable(2);
    console.log(result);
};

fff();

// Асинхронные методы классов
// Для объявления асинхронного метода достаточно написать async перед именем:

class Waiter {
    async wait() {
        return await Promise.resolve(7);
    }
}

new Waiter()
    .wait()
    .then(console.log);


// Когда промис завершается успешно, await promise возвращает результат. 
// Когда завершается с ошибкой – будет выброшено исключение. 
// Как если бы на этом месте находилось выражение throw.

// Такой код:

// async function f() {
//   await Promise.reject(new Error("Упс!"));
// }
// // Делает то же самое, что и такой:

// async function f() {
//   throw new Error("Упс!");
// }

// Но есть отличие: на практике промис может завершиться с ошибкой не сразу, 
// а через некоторое время. В этом случае будет задержка, а затем await выбросит исключение.

// Такие ошибки можно ловить, используя try..catch, как с обычным throw:

async function fff() {
    try {
        let response = await fetch("http://no-such-url");
    } catch(err) {
        console.log(err);
    }
}

fff();

// В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. 
// Блоком try можно обернуть несколько строк:

async function ffff() {
    try {
        let response = await fetch("/no-user-here");
        let user = await response.json();
    } catch(err) {
        console.log(err);
    }
}

ffff();

// Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся 
// с ошибкой промис (в состоянии rejected). В этом случае мы можем использовать 
// метод .catch промиса, чтобы обработать ошибку:

async function fffff() {
    let response = await fetch("http://no-such-url");
}

fffff().catch(console.log); // TypeError: failed to fetch // (*)

// async/await отлично работает с Promise.all
// Когда необходимо подождать несколько промисов одновременно, 
// можно обернуть их в Promise.all, и затем await:

// await будет ждать массив с результатами выполнения всех промисов
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);

// В случае ошибки она будет передаваться как обычно: от завершившегося с 
// ошибкой промиса к Promise.all. А после будет сгенерировано исключение, 
// которое можно отловить, обернув выражение в try..catch.