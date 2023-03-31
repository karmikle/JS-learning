// let arr = [ 2, 1, 4, undefined, 3, 2, -2];
// console.log(arr);
// let changedArr = arr.map( item => item ?? 0);
// console.log(changedArr);
// changedArr.sort( (a, b) => a - b);
// console.log(changedArr);
// console.log(changedArr.slice(1, - 1));
// let redusedArr = changedArr.slice(1, -1);
// let sum = redusedArr.reduce((sum, current) => sum + current);
// console.log(sum);

// let arr = [ null, -2, 5, 7, 3, 2, 2, 15, 15];
// arr = Array.from( arr, item => item || 0 );
// console.log(arr);
// arr.sort( ( a, b ) => a - b );
// console.log(arr);
// let changedArr = arr.slice( 1, -1 );
// console.log(changedArr);
// let sum = changedArr.reduce( ( sum, current) => sum + current, 0 );
// console.log(sum);

// function sumArray(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) {
//       return 0;
//     }
    
//     arr.sort( ( a, b ) => a - b );
//     changedArr = arr.slice( 1, -1 );
    
//     let sum = changedArr.reduce( ( sum, current) => sum + current, 0 );
    
//     return sum;
// }

// console.log(sumArray(arr))

// sumArray2 = arr => arr ? arr.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

// console.log(sumArray2(arr))

// function cockroachSpeed(km) {
//    return Math.floor(km * 250 / 9);
// }
// console.log(cockroachSpeed(1.09));
// console.log(typeof cockroachSpeed(1.08))

// let s = (km) => Math.floor(km * 250 / 9);
// console.log(s(1.08))


// let haystack = [undefined, "needle"]

// function findNeedle(haystack) {
//    let position = haystack.indexOf("needle");
//    return "found the needle at position " + position;
// }

// let n = [1, 2, 2].map(item => item**2)
// console.log(n)
// let sum = n.reduce((sum, current) => sum + current, 0);
// console.log(sum)
// n = [1, 2, 2];

// function squareSum(numbers){
//    return numbers.map(item => item ** 2).reduce((sum, current) => sum + current, 0);
// }

// console.log(squareSum(n))

// let squareSum = numbers => numbers.map(item => item ** 2).reduce((sum, current) => sum + current, 0);

// let squareSum2 = numbers => numbers.reduce((sum, current) => sum + current ** 2, 0);

// console.log(squareSum(n));
// console.log(squareSum2(n));
// num = -12;
// num = String(num);
// console.log(num);
// console.log(typeof num);

// function numberToString(num) {
//    return String(num);
// }

// console.log(numberToString(num))

// numberToString2 = (num) => String(num);
// console.log(numberToString2(num));

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
//  }

//  goals = (la, co, cl) => la + co + cl;

//  console.log(goals(1, 2, 1))
// let str = "er";

// function makeUpperCase(str) {
//    return str.toUpperCase();
//  }
//  console.log(makeUpperCase(str))

// makeUpperCase = str => str.toUpperCase();
// console.log(makeUpperCase(str))

// 7 kyu

// alert( "Widget with id".includes("Widget") ); // true


// let charIndex = str.indexOf("o");
// // console.log(charIndex);

// let newChar = str.slice(1,2);
// // console.log(newChar);
// // console.log(str);

// let newStr = str.slice(0,1) + str.slice(2);
// // console.log(newStr);

// // console.log(newStr.includes(newChar)) 

// if(newStr.includes(newChar)) {
//     console.log("not isogram");
// } else {
//     console.log("is  isogram");
// };

// makeUpperStr = str => str.toUpperCase();
// console.log(str.toUpperCase());

// let str = "aasdf";

// let strings = str.toUpperCase().split("");
// console.log(strings);

// strSort = strings.sort();
// console.log(strSort);

// function isArray (strSort) {
//     if (!Array.isArray(strSort) || strSort.length <= 1)
//     return true;
// }
// console.log(isArray(strSort))

// let str = "fgh"

// function isIsogram(str) {
//     // Convert the string to lowercase to ignore case
//     str = str.toLowerCase();
//     // Loop through each character of the string
//     for (let i = 0; i < str.length; i++) {
//       // Check if the current character is repeated later in the string
//       if (str.indexOf(str[i], i + 1) !== -1) {
//         return false;
//       }
//     }
//     return true;
// }

// console.log(isIsogram(str))

// let str2 = "fhgh"
// console.log(str2.indexOf("g")) //2

// function isIsogram2(str){ 
//     return !/(\w).*\1/i.test(str)
//   }

//   console.log(isIsogram2(str));

// a = "asdasdasdasdasdasdadasdadasd";
// b = "asdasdasdasdasdasdadasdasdda";

// function longest(s1, s2) {
//     let result = [];
//     for (let str of (s1 + s2).split("").sort()) {
//         if (!result.includes(str)) {
//           result.push(str);
//         }
//     }

//     return result.join("").toString();
// }
// console.log(longest(a, b))

// function longest2(s1, s2) {
//     return [...new Set(s1 + s2)].sort().join('');
// }
// a = [-2, -3]
// a = [1, 2, 3, 4, 5, 66, 7, 8, 9, 10, 0, null, -11, -12, -1, -13, -14, -15];
// a.sort(((x, y) => x - y)).reverse();
// console.log(a)

// function countPositivesSumNegatives(input) {
//     if (!input) {
//         return [];
//     } else {

//         input.sort((x, y) => x - y).reverse();
//         let resultA = [];
//         let resultB = [];
//         let resultC = [];
    
//         for (let item of input) {
//             if (item > 0 ) {
//                 resultA.push(1);
//             }
//         };
//         resultA = resultA.reduce((sum, current) => sum + current, 0);

//         for (let item of input) {
//             if (item < 0) {
//               resultB.push(item);
//             }
//         };
//         resultB = resultB.reduce((sum, current) => sum + current, 0);
//         if(resultA == 0 && resultB == 0) {
//             return resultC = [];
//         } else {
//             resultC = resultC.concat(resultA, resultB);
//             return resultC;
//         }
//     }
// }

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// console.log(countPositivesSumNegatives(a))

// b = [ 1, 2 , 3];
// let result = b.reduce((sum, current) => sum + current, 0);
// console.log(result)


// a = [1,2,-3,4,5]
// b = array.map( (item) => item *(-1) )
// console.log(b)

// function invert(array) {
//     return array.map( (item) => item *(-1) );
// }
// console.log(invert(a))

// y =  1005;
// console.log(y/100)
// console.log(1701 % 100 )
// function century(year) {
//     if (year % 100 == 0 ) {
//         return Math.floor(year/100);
//     } else {
//         return Math.ceil(year/100)
//     }
// }

// century = year => (year % 100 == 0) ? Math.floor(year/100) : Math.ceil(year/100);
// century = year => Math.ceil(year/100)

// console.log(century(y))




// let y = "-7";
// v = Number(y);
// console.log(v);
// console.log(typeof v);

// stringToNumber = str => Number(str);

// console.log(stringToNumber(y))

// const stringToNumber = function(str){
//     // put your code here
//     return null;
//   }


// let s = 0;
// console.log(s)
// console.log(s**(1/2));

// isSquare = n => n == 0 || n % n**(1/2) === 0;
// console.log(isSquare(s))

// isSquare = а => а ** 0.5 % 1 == 0;



// let s = "zZooXx";
// console.log(s.toLowerCase());

// a = str.toLowerCase().split("").sort();
// console.log(a)

// function XO(str) {
    
//     let arrayA = [];
//     let arrayB = [];
//     lowerStr = str.toLowerCase()

//     for (let item of lowerStr) {
//         if (item == "x") {
//         arrayA.push(item);
//         }
//     }

//     for (let item of lowerStr) {
//         if (item == "o") {
//         arrayB.push(item);
//         }
//     }

//     return arrayA.length == arrayB.length;
// }
// console.log(XO(s));


// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }


// function XO(str) {
//     //code here
// }


// pass = [[10, 0] ,[3, 5] ,[5, 8]];
// pass2 = [[0,0]];
// console.log(pass[0][0] + pass[1][0] + pass[2][0] - 
//             pass[0][1] - pass[1][1] - pass[2][1]);

// let number = function(busStop) {
//     income = [];
//     outcome =[];
//     for (let item of busStop) {
//         income.push(item[0]);
//     };
    
//     for (let item of busStop) {
//         outcome.push(item[1]);
//     };
    
//     outcome = outcome.reduce((sum, current) => sum + current, 0);
//     income = income.reduce((sum, current) => sum + current, 0);
//     return income - outcome;
// }
// console.log(number(pass))

// const number2 = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
// const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)


// let s = "I love arrays they are my favorite";
// a = s.split(" ");
// stringToArray = s => s.split(" ");
// console.log(stringToArray(s))




// let n = 3212;
// squareDigits = (num) => num.toString().split("").map( i => i**2).join("")*1;
// console.log(squareDigits(n))

// function squareDigits(num){
//     return +(num+'').split('').map(a=>a*a).join('');
//   }

// let hours = 1;
// let mins = 1;
// let sec = 1;

// function past(h, m, s){
//   hS = h*3600;
//   mS = m*60;
//   sS = s;
  
//   return (hS + mS +sS)*1000;
// }

// console.log(past(1,1,1));

// let n = [];

// let k = n.indexOf(3);
// console.log(k)

// function removeSmallest(numbers) {
//   let nN =[];
//   for (let item of numbers) {
//     nN.push(item);
//   }
//   lowest = numbers.sort((a,b) => a-b).shift();
//   nN.splice( nN.indexOf(lowest), 1);
//   return nN;
// }

// removeSmallest = numbers => numbers.sort((a, b) => a -b).splice(1, numbers.length);

// function removeSmallest(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   return arr.slice(0, arr.indexOf(Math.min(...arr))).concat(arr.slice(arr.indexOf(Math.min(...arr)) + 1));
// }

// removeSmallest2 = arr => arr.length !== 0 ? arr.slice(0, arr.indexOf(Math.min(...arr))).concat(arr.slice(arr.indexOf(Math.min(...arr)) + 1)) : [];

// console.log(removeSmallest2(n))


// resultP = "paper";
// resultR = "rock";
// resultS = "scissors"



// function rps (p1, p2) {
//   if(p1 == "rock" && p2 == "scissors" || p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock") {
//     return "Player 1 won!"
//   } else if (p1 == p2) {
//     return "Draw!";
//   } else {
//     return "Player 2 won!"
//   }
// };

// rps = (p1, p2) => p1==p2 ? "Draw!" : p1 =="rock"&&p2=="scissors" || p1=="scissors"&&p2=="paper" || p1=="paper"&&p2=="rock" ? "Player 1 won!" : "Player 2 won!";

// console.log(rps(resultS, resultP));


// l = 1787

// function litres(time) {
//   return Math.floor(time/2 )
// }

// l = t => Math.floor(t/2);

// console.log(litres(l))



// input =  [[59, 12],[55,-1],[12, -2],[12, 12]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// console.log(output)

// function openOrSenior(data){
//   let list = []
//   for (let item of data) {
//     if(item[0] >= 55 && item[1] > 7 ) {
//       list.push("Senior")
//     } else {
//       list.push("Open")
//     }
//   }
//   return list;
// }

// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// console.log(openOrSenior(input));

// f1 = 10;
// f2 = 10;

// function lovefunc(flower1, flower2){
//   if (flower1 % 2 == 0 && flower2 % 2 !==0 || flower1 % 2 !== 0 && flower2 % 2 ==0) {
//     return true;
//   } else {
//     return false;
//   }
// };


// lovefunc = (flower1, flower2) => flower1%2==0 && flower2%2!==0 || flower1%2!==0 && flower2%2==0 ? true: false
// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
// console.log(lovefunc(f1, f2));

// nn = 2123123;


// function digitize(n) {
//   return m = n.toString().split("").reverse().map( item => item*1);
// }

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

// console.log(digitize(nn))

// sc1 = 89.9;
// sc2 = 90;
// sc3 = 90;

// function getGrade (s1, s2, s3) {
//   avrg = new Array(s1,s2,s3).reduce((a, b) => a + b)/3
//   console.log(avrg)
//   let grades = [[0, 60, "F"], [60, 70, "D"], [70, 80, "C"], [80, 90, "B"], [90, 100, "A"]]
//   let finalGrade = []
//   for (let score of grades) {
//     if ( avrg >= score[0] && avrg < score[1]) {
//         finalGrade.push(score[2]);
//     } else if (avrg == 100) {
//       finalGrade = ["A"]
//     };
//   }
  
//   return  finalGrade.toString();
// }

// function getGrade (s1, s2, s3) {
//   var s = (s1 + s2 + s3) / 3
//   return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
// }

// console.log(getGrade(sc1,sc2,sc3))


// s = "This website is for losers LOL!";

// function disemvowel(str) {
//   return arr = str.split("").filter( item => item !== "A" && item !== "a" && 
//                                              item !== "E" && item !== "e" && 
//                                              item !== "I" && item !== "i" && 
//                                              item !== "O" && item !== "o" && 
//                                              item !== "U" && item !== "u")
//                                              .join("");
// }

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// function disemvowel(str) {
//   return str.split('').filter(e => !['A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú', 'a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'].includes(e) ).join('')
// }

// console.log(disemvowel(s))
// console.log(typeof disemvowel(s))




// l = [1,"2","b",3, 0, "s"];
// console.log(typeof l[0])


// function filter_list(list) {
//   return list.filter( e =>  typeof e == "number");
// }

// filter_list=list=>list.filter(e=>typeof e=="number");

// function filter_list(l) {
//   return l.filter(e => Number.isInteger(e));
// }

// console.log(filter_list(l));
// bo = true;

// function booleanToString(b){
//   return b.toString();
// }

// booleanToString = b => b.toString();

// console.log( typeof booleanToString(bo))

// str = "bitcoin take over the world maybe who knows perhaps";

// function findShort(s){ 
//   return s.split(" ").map( l => l.length).sort((a,b) => a -b).shift();
// }

// function findShort(s){
//   return Math.min(...s.split(" ").map (s => s.length));
// }

// console.log(findShort(str))

// str = "Success";

// arr = str.toLowerCase().split("")
// console.log(str)

// function duplicateEncode (a) {
//     b = a.toLowerCase().split("")
//     let unic = [];
//     let duplicants = [];
//     let mutated = [];

//     for (let item of b) {
//         if(!unic.includes(item)){
//             unic.push(item)
//         } else {
//             duplicants.push(item)
//         }
//     }
//     console.log(unic);
//     console.log(duplicants)

//     for (let item of unic){
//         if(duplicants.includes(item)) {
//             unic.splice(unic.indexOf(item), 1);
//         }
//     }

//     for (let item of b) {
//         if(!duplicants.includes(item)) {
//             mutated.push("(")
//         } else {
//             mutated.push(")")
//         }
//     }
    
//     return  mutated.join("")
// }


// function duplicateEncode(word){
//     return word
//         .toLowerCase()
//         .split('')
//         .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//         .join('');
// }

// console.log(duplicateEncode(str));



// p = ".123"
// function validatePIN(pin) {
//     let arr = pin.split("");

//     if((arr.length == 4 || arr.length == 6) && !arr.map( (item) => parseInt(item)).includes(NaN)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(validatePIN(p))


// s = "The quick brown fox jumps over the lazy (dog)."

// function isPangram(string){
//     let sentense = string.toLowerCase().split(" ").join("").split("").sort()
//     let uniqe = [];
//     let exeptions = [".", ",", "!", ";", ":", "?", "-", "(", ")"]

//     for (let l of sentense) {
//         if(!uniqe.includes(l) && !exeptions.includes(l) && !parseInt(l)) {
//             uniqe.push(l)
//         }
//     }

//     return uniqe.length == 26
// }

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }

// console.log(isPangram(s))

// a1 = [];
// a2 =  [];

// function comp(arr1, arr2){

//     if ( arr1 === null || arr2 ===null) {
//         return false;
//     }

//     let array1 = arr1.map( item => item**2).sort((a, b) => a - b);
//     let array2 = arr2.sort((a, b) => a - b);

//     for (let i = 0; i < array1.length; i++) {
//         if(array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true
// }

// function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
//   }

// console.log(comp(a1, a2))



// let a = [1, 2, 3, 4, 1, 2, 3]

// function findEvenIndex(arr) {

//     for (let i = 0; i <= arr.length; i++) {
//         if (arr.slice(i, arr.length)
//                .reduce(( sum, current) => sum + current, -parseInt(arr[i]))
//                 == 
//             arr.slice(0, i)
//                .reduce(( sum, current) => sum + current, 0)) {
//             return i;
//         }
//     }
//     return -1;  
// }

// console.log(findEvenIndex(a))

// s = "This is an example!";

// function reverseWords(str) {
//     reverse = [];
//     for (let item of str.split(" ")) {
//         reverse.push(item.split("").reverse().join(""))
//     }
//     return reverse.join(" ")
//   }


//   function reverseWords(str) {
//     // Go for it
//     //split words into seperate arrays
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
//   }

//   console.log(reverseWords(s))


// hight = 10;
// b = -1;
// w = 1.5;

// n = (hight*b)*b*b// + 2 // while h > w Math.flor
// console.log(n)

// function bouncingBall(h,  bounce,  window) {
//     let bounceHight = h;

//     if(bounce >= 1 || bounce < 0 || window >= h) {
//         return -1
//     }

//     for( let i = 1; bounceHight > window; i++) {
//         bounceHight *= bounce;
//         bounces = i++;
//     }

//     return bounces;
// }

// function bouncingBall(h,  bounce,  window) {
//     var rebounds = -1;
//     if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
//     return rebounds;
//   }

// console.log(bouncingBall(hight, b, w))

// let n = 11400;

// function expandedForm(num) {
//     ns = num.toString().split("");
//     let rezult = [];
//     for (let i = 0; i < ns.length; i++) {
//         if(ns[i]*1 !== 0 ) {
//             rezult.push(ns[i]*10**((ns.length - 1) - i))
//         }
//     }
//     return rezult.join(" + ")
// }

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// console.log(expandedForm(n))


// a = [ 1, 1, 1, 0.06152353683910916 , 1, 1 ]

// function findUniq(arr) {
//     let unic = arr.sort((a, b) => a -b);
//     unicItem = [];
//     if ((unic[0] + unic[1]) / 2 !== unic[1]) {
//         unicItem.push(unic[0])
//     } else {
//         unicItem.push(unic[unic.length-1])
//     }
//     return parseFloat(unicItem)
// }  


// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
//   }

//   function findUniq(arr) {
//     return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
//   }

// console.log(findUniq(a))


// let s = "camelCasing"
// let b = s.split("")
// console.log(b)
// let a = "z"
// console.log( a.codePointAt() >= 65 && a.codePointAt() <=90)
// console.log(String.fromCodePoint(65))


// function solution(str) {
//     f = str.split("")
//     let camel = [];
//     for (let i = 0; i < f.length; i++) {
//         if ( f[i].codePointAt() >= 65 && f[i].codePointAt() <=90 ) {
//             camel.push(" " + f[i])
//         } else {
//             camel.push(f[i])
//         }
//     }
//     return camel.join("")
// }

// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }

// console.log(solution(s))

// s = 92
// s2 = 3* 9
// s3 = 2* 7
// s4 = 1 * 4

// function persistence(num) {
//     let i = 0;
//     while (num.toString().length > 1) {
//       i++;
//       num = num.toString().split("").reduce((a, b) => a * b);
//     }
//     return i;
// }
// console.log(persistence(s))

// let t = "The sunset sets at twelve o' clock."
// let v = "abcdefghijklmnopqrstuvwxyz";

// function alphabetPosition(text) {
//     let a = "abcdefghijklmnopqrstuvwxyz";
//     let b = text.toLowerCase().split("");
//     let c = [];
//     for (i = 0; i <= b.length; i++) {
//         if ( a.split("").includes(b[i]) ) {
//             c.push( a.indexOf(b[i]) + 1 );
//         }
//     }
//     return c.join(" ");
// };

// console.log(alphabetPosition(t))

// let a = [ 1, 2,2];
// b = 10;
// c = 1;
// console.log(d = b ^ c)
// function findOdd(A) {
//   let n = A.sort((a,b) => a- b);
//   let o = [];
//     for(let i of n) {
//       if(!o.includes(i) && (n.indexOf(i)+n.lastIndexOf(i))%2 == 0) {
//         o.push(i)
//       }
//     }
//   return parseFloat(o)
// }

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }

// console.log(findOdd(a))

// let a = [
//     ":---)" , "))" , ";~~D" , ";D"
//   ]

// function countSmileys(arr) {
//     let b =[];

//     for (let i = 0; i < arr.length; i++) {
//         if((arr[i].length > 1 && arr[i].length <= 3)) {
//             b.push(arr[i])
//         }
//     }

//     c = b.join("").split("")

//     let smiles = [")", "D"]
//     let noses = ["-", "~"]
//     let eyes = [":", ";"]
//     let smilesAmount = 0;

//     for (let i = 0; i < c.length; i++) {
//         if ((smiles.includes(c[i]) && noses.includes(c[i - 1]) && eyes.includes(c[i - 2]))  ||
//             (smiles.includes(c[i]) && eyes.includes(c[i - 1])) ) {
//             smilesAmount++
//         }
//     }

//     return smilesAmount
// }

// const faces = new Set()
// for (let eyes of [':',';'])
//     for (let nose of ['-','~',''])
//         for (let mouth of [')','D'])
//             faces.add(eyes+nose+mouth)

// countSmileys =(arr)=> arr.filter(x => faces.has(x)).length

// console.log(countSmileys(a))






// let st = "RRBa1";
// function accum(s) {
//     let ss =[];
//     s = st.split("").map((item, index, arr) => {
//         for (let i = index; i < s.length; i++) {
//             if(item == item.toLowerCase()){
//                 ss.push(item)
//             } else if( (ss[ss.indexOf(item)] == item.toUpperCase() )) {
//                 ss.push(item.toLowerCase())
//             } else {
//                 ss.push(item)
//             }
            
//         }
//     })
//     return ss.reverse()
// }

// function accum(s) {
//     let array =[];
//     arrMapFunc = s.split("").map((item, index, arr) => {

//         for ( let i = index + 1; i > 0; i-- ) {
//             if(item == item.toLowerCase()){
//                 array.push(item)
//             } else if( (array[array.indexOf(item)] == item.toUpperCase() )) {
//                 array.push(item.toLowerCase())
//             } else {
//                 array.push(item)
//             }
            
//         }
//     })

//     let accumArray = [];
//         for(let i = 0; i < array.length; i++) {
//             if( array[array.indexOf(array[i +1])] && array[i].toLowerCase() !== array[array.indexOf(array[i +1])]) {
//                 accumArray.push(array[i] + "-")
//             } else {
//                 accumArray.push(array[i])
//             }
//         }

//     return accumArray.join("")
// }
// h = "h";
// g = "g"

// var arr = Array(3).fill(4).map(() => Array(h));
// console.info(arr);

// let str = "RRBa12";

// function accum(s) {
//     let n = []
//     for( i = 0; i < s.length; i++){
//         n[i] = Array(i + 1).fill(null).map(() => {
//             return s[i].toUpperCase()
//         }).join("")
//     }
//     let acc = n.toString().split('')
//     let accumArray = [];

//     for(let y = 0; y < acc.length; y++) {
//         if(acc[y] !== acc[y-1] && acc[y] !== ","){
//             accumArray.push(acc[y])
//         } else if (acc[y] == ",") {
//             accumArray.push("-")
//         } else {
//             accumArray.push(acc[y].toLowerCase())
//         }
//     }

//     return accumArray.join("")
// }

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// console.log(accum(str))




// let a = [5, 8, 6, 3, 3, 4]

// function sortOddNumbers(arr) {
    
//     let result = arr.slice();
//     console.log(result)
    
//     let sortedOdds = result.filter(num => num % 2 !== 0).sort((a, b) => a - b);
//     console.log(sortedOdds)
    
//     let i = 0;
//     result.forEach((num, index) => {
//       if (num % 2 !== 0) {
//         result[index] = sortedOdds[i];
//         i++;
//       }
//     });
//     return result;
// }

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }




// let cust = [];
// let num = 1;
// console.log(num)

// function queueTime(customers, n) {
//     let arr = Array(n).fill(null).map(() => Array());
//     console.log(arr)
    
//     let k = [];

//     for (let i =0; i < customers.length; i++ ) {
//         if(n == 1) {
//             arr[0].push(customers[i])
//         } else {
//             let o = 0;
//             k = arr.map(item => item.reduce((a,b) => a+b, 0 ))
//             o = k.indexOf(Math.min(...k))
//             arr[o].push(customers[i])
//         }
//     }
    
//     k = arr.map(item => item.reduce((a,b) => a+b, 0 ))
//     return Math.max(...k)
// }

// console.log(queueTime(cust, num))

// function queueTime(customers, n) {
//     /**
//      * ------------------ EXAMPLE:
//      * if customers --> [2, 3, 10]
//      * and if n --> 2
//      */
  
//     let queueArr = Array(n).fill(0);
//     // EXAMPLE: queueArr --> [0, 0];
  
//     customers.forEach((customer) => {
//       queueArr[0] += customer;
//       /**
//        * ------------------ EXAMPLE:
//        * 1 iteration queueArr --> [2, 0];
//        * 2 iteration queueArr --> [3, 2];
//        * 3 iteration queueArr --> [12, 3];
//        */
  
//       queueArr.sort((a, b) => a - b);
//       /**
//        * ------------------ EXAMPLE:
//        * 1 iteration queueArr --> [0, 2];
//        * 2 iteration queueArr --> [2, 3];
//        * 3 iteration queueArr --> [3, 12];
//        */
//     });
  
//     return queueArr[queueArr.length - 1]; // EXAMPLE: last num in queueArr --> 12
//   }

// let s = "asdfaga"

// function count(str) {
//     let charCount = {};
//     for (let char of str) {
//       if (char in charCount) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//     return charCount;
// }


// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }


//   console.log(count(s))

// let s = 'abracadabra'

// function getCount(str) {
//     let  vowels = ["a", "e", "i", "o", "u"]
//     let n=0
//     for(let item of str) {
//         if(vowels.includes(item)){
//             n++
//         }
//     }
//     return n
// }

// console.log(getCount(s))

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

// let n = 9
// console.log(n**(6/19))

// function findNb(m) {
//     let r = m;
//     for (let i=0; i < m**(6/19); i++) {
//         r -= i**3;
//         if (r == 0 ) {
//             return i;
//         } if (r < 0) {
//             return -1;
//         }
//     }
//     return -1;
// }

// console.log(findNb(n))

// function findNb(m) {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
// }
// arr1 = [2,3]
// arr2 = [1,3]
// console.log(arr1[0])

// function arrayDiff(a, b) {
//     return a.filter(c => !b.includes(c))
// }
// arrayDiff = (a, b) => a.filter(c => !b.includes(c))

// console.log(arrayDiff(arr1, arr2))



// let s = "hh h"
// console.log(s[0 -1] +   s[0].toUpperCase() + s.slice(1,5))

// function wave(str){
//     let waweArr = []
//     for ( let i = 0; i < str.length; i++) {
//         if(str[i] == " ") {
//         } else {
//             waweArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length))
//         }
//     }
//     return waweArr
// }

// console.log(wave(s))



// let a = ["NORTH", "SOUTH", "EAST", "WEST"]

// function dirReduc(arr) {
//     let opposites = {
//       'NORTH': 'SOUTH',
//       'SOUTH': 'NORTH',
//       'EAST': 'WEST',
//       'WEST': 'EAST'
//     };
    
//     let way = [];
    
//     for (let direction of arr) {
//       if (way[way.length - 1] === opposites[direction]) {
//         way.pop();
//       } else {
//         way.push(direction);
//       }
//     }
    
//     return way;
//   }

// console.log(dirReduc(a))



// zero = op => op? op(0) : 0;
// one = op => op? op(1) : 1;
// two = op => op? op(2) : 2;
// three = op => op? op(3) : 3;
// four = op => op? op(4) : 4;
// five = op => op? op(5) : 5;
// six = op => op? op(6) : 6;
// seven = op => op? op(7) : 7;
// eight = op => op? op(8) : 8;
// nine = op => op? op(9) : 9;

// plus = num1 => num2 => num1 + num2;
// minus = num1 => num2 => num2 - num1;
// times = num1 => num2 => num1 * num2;
// dividedBy = num1 => num2 => Math.floor(num2 / num1);
  
//   function plus(num1) {
//     return function(num2) {
//       return num1 + num2;
//     };
//   }
  
//   function minus(num1) {
//     return function(num2) {
//       return num2 - num1;
//     };
//   }
  
//   function times(num1) {
//     return function(num2) {
//       return num1 * num2;
//     };
//   }
  
//   function dividedBy(num1) {
//     return function(num2) {
//       return Math.floor(num2 / num1);
//     };
//   }

// console.log(seven(times(three())))

// console.log(two(times(seven())))



// let s = ["9", "9", "9", "9"] //needed "0020"
// console.log(s)
// let ss = s.join("")*1e-3 + 0.001
// console.log(ss.toFixed(3).split(".").join(""))


// let strng = "asdasd02"

// function incrementString (s) {
//     let str = s.split("");
//     console.log(s.length)
//     let n = [];
//     console.log(str)
//     console.log(n)

//     for ( let i = s.length-1; i >= 0; i--){
//         if(s[i]*1 == +s[i]) {
//             n.push(s[i])
//             str.pop()
//         } else if(s[i]*1 !== +s[i] ) {
//             i = 0;
//         }
//     }
//     console.log(str)
//     console.log((n))

//     let nN = n.reverse().join("")*1/(10**(n.length-1)) + 1*1/(10**(n.length-1))
//     console.log(nN)

//     let nNn;
//     if( (n.length-1) < 0) {
//         nNn = nN/10;
//     } else {
//         nNn = nN.toFixed(n.length-1).split(".").join("")
//     }
//     console.log(nNn)
//     return str.join("")+nNn
// }


// console.log(incrementString(strng))



// let s = [1,1,1];
// let q = 0;

// function tribonacci(signature,n){
//     let arr = signature;
//     for ( let i = 0; i < n; i++ ) {
//         arr.push(arr.slice(arr.length - 3).reduce((a,b) => a+b,0))
//     }
//     return arr.splice(0,arr.length - 3)
// }
// console.log(tribonacci(s, q))

// let a = [-2,-1,-3,-4,-1,-2,-1,-5,-4];
// console.log(a .length)
// var maxSequence = function(arr){
//     let arrays = [];
//     if (arr.length == 0) {
//         return 0;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for(let y = i + 1; y < arr.length + 1; y++) {
//             arrays.push(arr.slice(i, y));
//         }
//     } 
//     rezult = Math.max( ...arrays.map( el => el.reduce( (a, b) => a + b, 0) ) );
//     return rezult >= 0 ? rezult : 0;
// };

// var maxSequence = function(arr){
//     var currentSum = 0;
//     return arr.reduce(function(maxSum, number){
//         currentSum = Math.max(currentSum+number, 0);
//         return Math.max(currentSum, maxSum);
//     }, 0);
// }

// console.log(maxSequence(a))

// let s = []

// function likes(names) {
//     if(names.length == 0) { 
//         return 'no one likes this';
//     }
//     if(names.length == 1) {
//         return `${names[0]} likes this`;
//     }
//     if(names.length == 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     }
//     if(names.length == 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     }
//     if(names.length > 3) {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// };

// console.log(likes(s))


// let s = [1,2,2,3,3]
// var uniqueInOrder=function(iterable){
//     let uniq = [];
//     for(let i=0; i<iterable.length; i++) {
//         if(iterable[i-1] !== iterable[i]) {
//             uniq.push(iterable[i]);
//         }
//     };
//     return uniq;
// };

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// console.log(uniqueInOrder(s))

let r = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 15, 16, 17]
function frogsJumping(stones) {
    let bJump = 2;
    let sJump = 1;
    stones.reverse();
    let jumps = [];
    for( let i = 0; i<stones.length; i++) {
        if((stones[i] - stones[i+2]) == bJump || stones[i] - stones[i+1] == bJump) {
            jumps.push(bJump);
            if(stones[i] - stones[i+2] == bJump) {
                i++;
            }
        } else if((stones[i] - stones[i+1]) == sJump) {
            jumps.push(sJump)
        }
    };

    return jumps.reverse().join("");
};

console.log(frogsJumping(r))