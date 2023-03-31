// let promise = new Promise(function(resolve, reject) {
//     // функция-исполнитель (executor)
//     // "певец"
// });

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 2000);
})

let promise2 = new Promise(function(resolve, reject) {
    // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let promise3 = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
});

promise.then(
    function(result) { /* обработает успешное выполнение */ },
    function(error) { /* обработает ошибку */ }
);

let promise4 = new Promise( function(resolve, reject) {
    setTimeout(() => resolve("done"), 2000);
})

promise4.then(
    result => console.log(result),
    error => console.log(error)
);

let promise5 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject запустит вторую функцию, переданную в .then
promise5.then(
    result => console.log(result), // не будет запущена
    error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
);

let promise6 = new Promise(resolve => {
    setTimeout(() => resolve("done6"), 3000);
});

promise6.then(console.log);

let promise7 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка7!")), 4000);
});
  
// .catch(f) это то же самое, что promise.then(null, f)
promise7.catch(console.log); // выведет "Error: Ошибка!" спустя одну секунду

let promise8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done8"), 5000);
})
promise8.then(result => console.log(result));
promise8.finally(() => {setTimeout(() => (console.log("Promise8 finally")), 1000)});