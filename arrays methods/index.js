console.log(" splice"); //SPLICE

let arr = [ "One", "Two", "Three" ];
arr.splice(1, 1); // del from pos 1 , 1 elem
console.log(arr); 

let arr2 = [ "One", "Two", "Three" ];
arr2.splice( 1, 2, "four", "five", "six" ) // del 2 elems from pos 1, and added 3 elems insted
console.log(arr2);

let arr3 = [ "One", "Two", "Three" ];
let removed = arr3.splice(0, 2); // splice returns arrey from removed elems
console.log(removed);

let arr4 = [ "One", "Two", "Three" ];
arr4.splice( 2, 0, "added elem1", "added elem2" ); //can add elems if number of deleted elems is 0
console.log(arr4);

let arr5 = [ "One", "Two", "five"];
arr5.splice( -1, 0, "three", "four" ); // -1 adn so on is allowed to work from the end of array
console.log(arr5);


console.log("\n slice") //SLICE

let sliceArr = [ "a", "b", "c", "d", "e" ];
console.log( sliceArr.slice(1,3) ); // b c , 3rd - d is not included, (slice returns submassives)
console.log( sliceArr.slice(-3) ); // c d e - -n allowed, coped 3rd from the end to the end.


console.log("\n concat") //CONCAT

let concatArr = [1, 2]
console.log( concatArr.concat([2, 4]) ); // created new arr includind 1st and 2nd arr
console.log( concatArr.concat([2, 4], [5, 6]) ); // created new arr 1st, 2nd n 3rd arrs
console.log( concatArr.concat([2, 4], 5, 6) ) // created new arr includind 1st and 2nd arr + 5, 6,

let arrayLike = {
    0: "something",
    length: 1,
}
console.log( concatArr.concat(arrayLike) ); //oblect are copied as they are

let arrayLikeTrue = {
    0: "three",
    1: "four",
    length: 2,
    [Symbol.isConcatSpreadable]: true, // this option allowed js to ad elems to array
}
console.log( concatArr.concat(arrayLikeTrue) );


console.log("\n forEach") // FOREACH

let forArr = ["mike", "pole", "kum"];
forArr.forEach(console.log)

forArr.forEach((item, index, array) => {
    console.log(`${item} is at pos ${index} in array \'${array}\'`)
});

console.log("\n Searching at arrays"); // Searching in massives(arr)

let arrSearch = [1, 0, false];

console.log(arrSearch.indexOf(false));
console.log(arrSearch.indexOf(0));
console.log(arrSearch.indexOf(null));
console.log(arrSearch.includes(1));


console.log("\n find и findIndex"); // Find + findIndex + filter

let users = [
    {id: 2, name: "mike"},
    {id: 1, name: "pasha"},
    {id: 3, name: "ujin"}
];

let user = users.find( item => item.id == 1);
console.log(user.name)

let placeInArr = (element) => element.id == 2; // 0 - because id 2 is 1st in arr(wich index == 0)
console.log(users.findIndex(placeInArr));

let someUsers = users.filter( item => item.name != "mike" );
console.log(someUsers.length) // 2 - two users with name not "mike"
let someUsers2 = users.filter( item => item.id !==1 );
console.log(someUsers2);

console.log("\n map, sort")

let length = ["mike", "bob", "Vitalik"].map( item => item.length); 
console.log(length); // 4 3 7 - length of each item (retuns new meanings of element(znachenie))

let arr6 = [1, 15, 5, 45]
arr6.sort();
console.log(arr6); // 1, 15, 45, 5

let arr7 = [1, 15, 5 , 45, -5, 0];
// arr7.sort( function(a, b) { return a - b});
arr7.sort( (a, b) => a - b ); // the same as prev with arr func
console.log(arr7);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log( countries.sort( (a, b) => a > b ? 1 : -1) );
console.log( countries.sort( (a, b) => a.localeCompare(b) ) );

console.log("\nrevers")

let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();
console.log(arr8);

console.log("\nSplit , join")

let names = "pete, ann, mike";
let arr9 = names.split(", ");
for (let name of arr9) {
    console.log( `massages for: ${name}.`)
}
console.log(arr9);

let str = "text";
console.log( str.split("") );

let arr10 = [ "mike", "ann", "pete"];
let str10 = arr10.join("; ");
console.log(str10);

console.log("\nreduse, reduce right")

let arr11 = [1, 2, 3, 4, 5];
let result = arr11.reduce((sum, current) => sum + current, 0);
console.log(result);
let result2 = arr11.reduce((sum, current) => sum + current); // no initial, so starts from the 2nd pos, and initial = 1st pos
console.log(result2);

console.log( Array.isArray({})); //false
console.log( Array.isArray([])); //true

let driverSchool = {
    minAge: 18,
    maxAge: 55,
    canDrive(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
}

let drivers = [
    {age:16, name: "pete"},
    {age:26, name: "mike"},
    {age:36, name: "bob"},
    {age:56, name: "liza"},
];

let newDrivers = drivers.filter(driverSchool.canDrive, driverSchool);

console.log(newDrivers.length);
console.log(newDrivers[0].age, newDrivers[0].name);
console.log(newDrivers[1].age, newDrivers[1].name);