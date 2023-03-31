// let promise = Promise.all(iterable);

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 3000))
]).then(console.log);

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
));



let names = ['iliakan', 'remy', 'jeresig'];

let requests2 = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests2)
  .then(responses2 => {
    // все промисы успешно завершены
    for(let response2 of responses2) {
        console.log(`${response2.url}: ${response2.status}`); // покажет 200 для каждой ссылки
    }

    return responses2;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses2 => Promise.all(responses2.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => console.log(user.name)));

  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(11), 4000)
    }),
    22,
    33
  ]).then(console.log); // 1, 2, 3

  //.allSettled

  let urls3 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    // 'https://no-such-url'
  ];

  Promise.allSettled(urls3.map(url => fetch(url)))
    .then(results => {
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                console.log(`${urls3[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                console.log(`${urls3.num}: ${result.reason}`);
            }
        });
    });

// Если браузер не поддерживает Promise.allSettled, для него легко сделать полифил:

// if(!Promise.allSettled) {
//   Promise.allSettled = function(promises) {
//     return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//       status: 'fulfilled',
//       value: value
//     }), error => ({
//       status: 'rejected',
//       reason: error
//     }))));
//   };
// }

// Promice.race  Метод очень похож на Promise.all, 
//но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(111), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(333), 3000))
]).then(console.log); // 1

//   // Promice.any !!! Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис,
//    из которого берёт результат. Если ни один из переданных промисов не завершится успешно,
//     тогда возвращённый объект Promise будет отклонён с помощью AggregateError – 
//     специального объекта ошибок, который хранит все ошибки промисов в своём свойстве errors.

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1111), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3333), 3000))
]).then(console.log); // 1

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});

// Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.
// Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.
// Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
// Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.
// Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.
// Promise.reject(error) – возвращает промис с ошибкой error.
// Из всех перечисленных методов, самый часто используемый – это, пожалуй, Promise.all.