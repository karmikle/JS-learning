// fetch('https://blabla.blabal') // error
//     .then(response => response.json())
//     .catch(err => console.log(err))

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//     }))
//   .catch(error => console.log(error.message));

new Promise((resolve, reject) => {
    throw new Error("Ошибка!");
}).catch(console.log); // Error: Ошибка!

new Promise((resolve, reject) => {
    reject(new Error("Ошибка!"));
}).catch(console.log); // Error: Ошибка!

new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    throw new Error("Errorrrr");
}).catch(console.log);

new Promise((resolve, reject) => {
    resolve("ок");
  }).then((result) => {
    blabla(); // нет такой функции
  }).catch(console.log); // ReferenceError: blabla is not defined

new Promise((resolve, reject) => {
    throw new Error("Mistake");
  }).catch(function(error) {
    console.log("Mistake solved");
  }).then(() => console.log(" next then"));

new Promise((resolve, reject) => {
    throw new Error("Mistakeeee 2");
  }).catch(function(error) {
    if (error instanceof URIError) {
    } else {
        console.log("Unable to solve");

        throw error; // pass error
    }

  }).then(function() {

  }).catch(error => {
    console.log("Unknown mistake")
  });

//   window.addEventListener('unhandledrejection', function(event) {
//     // объект события имеет два специальных свойства:
//     alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
//     alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
//   });
  
//   new Promise(function() {
//     throw new Error("Ошибка!");
//   }); // нет обработчика ошибок