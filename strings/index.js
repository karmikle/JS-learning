let a = 1;
let b = 2
function sum(a, b) {
  return a + b;
}
console.log(`${a} + ${b} = ${sum(a, b)}.`);

let guestList = `
Pete
John
Ann , Mike
`;
console.log(guestList);

let guestList2 = "\nguests: \nPete \nJohn \nAnn , Mike"; // same with "" + \n
console.log(guestList2);

let specialSimbols = "symbols: \n\' and \" - singl and double \n\\ - revert slash \n\t - tab sign \n\b , \f , \v "
console.log(specialSimbols)
console.log("I\'m Vitalik") 

console.log("vitalik".length) //will show string lenght

let str = "hello";
console.log( str[0] );          //доступ к симвоу по номеру в строке, нач с 0
console.log( str.charAt(3) );

for (let char of "Hello") {
  console.log(char); 
}

let say = "hi";       // нельзя изменит!!!
say = "H" + say[1];   // можно создать новую и записать в ту же переменную
console.log(say);

console.log( "to upper case".toUpperCase() )
console.log( "TO LOWER CASE".toLowerCase() )

let stroka = "Hello vitalik, how are you"
console.log( stroka.indexOf("Hello")) //0 because 1st is 0
console.log( stroka.indexOf("Vi")) // -1 because no such, Vi != vi
console.log( stroka.indexOf("o")) // 4
console.log( stroka.indexOf("o", 5)) // 16 
console.log( stroka.indexOf("o", 17)) //24

let target = "o";
let pos = 0;
while(true) {
  let foundPos = stroka.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log(`\"${target}\" founded at pos: ${foundPos}.`);
  pos = foundPos + 1;
}

console.log( "my name is".includes("name"), "my name is".includes("vitalik") ) // true false
console.log( "my name is".includes("my", 0), "my name is".includes("my", 2) ) // true false
console.log( "my name is".startsWith("my"), "my name is".endsWith(" is") ) // true true

let strng = "washington";
console.log( strng.slice(0, 5) ) // washi 0 - 5;
console.log( strng.slice(4, 9) ) // ingto 4 - 9;
console.log( strng.slice(3) ) // hington from 3 to end, included
console.log( strng.slice(-7, -1) )

console.log( strng.substring(2, 6) ) //shin unable to use -1, -2 , -3, and so on
console.log( strng.substring(6, 2) ) //shin
console.log( strng.slice(2, 6) )//same shin
console.log( strng.slice(6, 2) ) // blancked

console.log( strng.substr(2, 4)) // old
console.log( strng.substr(-7, 4)) //

console.log( "z".codePointAt(0) ); //122
console.log( "Z".codePointAt(0) ); //90
console.log( String.fromCodePoint(90) ); //Z
console.log( "Z" == String.fromCodePoint(90) ) // true

let strinsLine = "";
for (let i = 60; i <=220; i++) {
  strinsLine += String.fromCodePoint(i);
}
console.log(strinsLine);

console.log( 'Österreich'.localeCompare('Zealand') ); // -1 if str < str2, +1 if str > str2, 0 if same

function cheackSpam(text) {
    let lowerText = text.toLowerCase();
    return lowerText.includes("viagra") || lowerText.includes("xxx");
}
console.log( "spam " + cheackSpam("Viagra") );
console.log( "spam " + cheackSpam("free xxxxxx") );
console.log( "spam " + cheackSpam("free baloons") );
