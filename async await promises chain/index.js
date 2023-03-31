new Promise(function(resolve,reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
});

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 2000);
  
}).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
}).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
}).then(function(result) {
  
    console.log(result); // 4
  
});


// loadScript("/article/promise-chaining/one.js")
//   .then(function(script) {
//     return loadScript("/article/promise-chaining/two.js");
//   })
//   .then(function(script) {
//     return loadScript("/article/promise-chaining/three.js");
//   })
//   .then(function(script) {
//     // вызовем функции, объявленные в загружаемых скриптах,
//     // чтобы показать, что они действительно загрузились
//     one();
//     two();
//     three();
// });

// loadScript("/article/promise-chaining/one.js")
//   .then(script => loadScript("/article/promise-chaining/two.js"))
//   .then(script => loadScript("/article/promise-chaining/three.js"))
//   .then(script => {
//     // скрипты загружены, мы можем использовать объявленные в них функции
//     one();
//     two();
//     three();
//   });

// thenable !!!

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log(resolve);
        setTimeout(() => resolve(this.num * 10), 6000);
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
    })
    .then(console.log)



// fetch !!!

// let promise = fetch(url);

// fetch('/article/promise-chaining/user.json')
//   // .then в коде ниже выполняется, когда удалённый сервер отвечает
//   .then(function(response) {
//     // response.text() возвращает новый промис,
//     // который выполняется и возвращает полный ответ сервера,
//     // когда он загрузится
//     return response.text();
//   })
//   .then(function(text) {
//     // ...и здесь содержимое полученного файла
//     console.log(text); // {"name": "iliakan", isAdmin: true}
// });

// // то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => console.log(user.name)); // iliakan, получили имя пользователя

// function loadJson(url) {
//     return fetch(url)
//       .then(response => response.json());
//   }
  
//   function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${name}`)
//       .then(response => response.json());
//   }
  
//   function showAvatar(githubUser) {
//     return new Promise(function(resolve, reject) {
//       let img = document.createElement('img');
//       img.src = githubUser.avatar_url;
//       img.className = "promise-avatar-example";
//       document.body.append(img);
  
//       setTimeout(() => {
//         img.remove();
//         resolve(githubUser);
//       }, 3000);
//     });
//   }
  
//   // Используем их:
//   loadJson('/article/promise-chaining/user.json')
//     .then(user => loadGithubUser(user.name))
//     .then(showAvatar)
//     .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));