// Обычно, если мы ожидаем ошибку, мы добавляем .catch в конец цепочки промисов,
//  чтобы обработать её:

// let promise = Promise.reject(new Error("Ошибка в промисе!"));
// promise.catch(err => alert('поймана!'));

// // не запустится, ошибка обработана
// window.addEventListener('unhandledrejection', event => {
//   alert(event.reason);
// });
// …Но если мы забудем добавить .catch, то, когда очередь микрозадач опустеет,
//  движок сгенерирует событие:

// let promise = Promise.reject(new Error("Ошибка в промисе!"));

// // Ошибка в промисе!
// window.addEventListener('unhandledrejection', event => alert(event.reason));
// А что, если мы поймаем ошибку, но позже? Вот так:

// let promise = Promise.reject(new Error("Ошибка в промисе!"));

// setTimeout(() => promise.catch(err => alert('поймана')), 1000);

// // Ошибка в промисе!
// window.addEventListener('unhandledrejection', event => alert(event.reason));
// Теперь, при запуске, мы сначала увидим «Ошибка в промисе!», а затем «поймана».

// Если бы мы не знали про очередь микрозадач, то могли бы удивиться: «Почему сработал 
// обработчик unhandledrejection? Мы же поймали ошибку!».

// Но теперь мы понимаем, что событие unhandledrejection возникает, когда очередь 
// микрозадач завершена: движок проверяет все промисы и, если какой-либо из них в состоянии «rejected», то генерируется это событие.

// В примере выше .catch, добавленный в setTimeout, также срабатывает, но позже, уже 
// после возникновения unhandledrejection, так что это ни на что не влияет.