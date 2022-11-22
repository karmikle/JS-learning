let options = {
  title: "menu",
  width: 100,
  hight: 200,
};

let {title, width, hight} = options;
console.log( title, width, hight);

let options2 = {
  title2: "menu22",
  width2: 10022,
};

let {title2, width2: w2, hight2: h2 = 20022} = options2;
console.log( title2, w2, h2);

let options3 = {
  title3: "menu33",
}
let {width3 = prompt("width3?", 0), title3 = prompt("title3")} = options3;
console.log(title3, width3);
console.log(options3)

let options4 = {
  title4: " menu44",
  width4: 44,
  hight4: 404,
};
let {title4, ...rest} = options4;
console.log(rest, rest.hight4, rest.width4, options4);

({title, width, hight} = {title: "menu55", width: 55, hight: 505}); // () to esqape of bock code
console.log(title, width, hight)