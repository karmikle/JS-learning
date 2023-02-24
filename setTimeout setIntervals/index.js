function sayHi() {
  console.log("Hi")
}

setTimeout(sayHi, 1000); // sayHi without ()!!!!

function sayHiWho(prase, who) {
  console.log(prase + ", " + who);
}

setTimeout(sayHiWho, 2000, "Hiii", "Joe");

setTimeout("console.log('func from string')", 3000); // not recomended!!!

setTimeout(() => console.log("func"), 4000); // recomended

let timerId = setTimeout(() => console.log("nothing"), 5000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId); //will be digits - browser specfication 

let intervalId = setInterval(() => console.log("tick"), 2000);
setTimeout(() => {clearInterval(intervalId); console.log("stop interval"); }, 6000)

let timerIdInner = setTimeout(function tick2() {
  console.log("tick2");
  timerIdInner = setTimeout(tick2, 2000);
}, 7000) // recursion, inner setTimeout