let arr = new Array();
let arr2 = ["beer", "wiskey", "rum", {name:"vitalik"}, function() {console.log("yo!")},];
console.log( arr2 );
arr2[1] = "wiskey + coke"
console.log( arr2 );
arr2[6] = "sider"
console.log( arr2 );
console.log( arr2.length );

console.log(arr2.at(-1)) // at (-) from the end
console.log(arr2.at(1)) // ar from begining;

let arr3 = [ "1", "apple", "grape"]
console.log( arr3.pop() );          // pop() deletes from the end and shows it
console.log( arr3 );

arr3.push("gum")                    // push add to the en
console.log( arr3);

console.log( arr3.shift() );
console.log( arr3);                 // shift deletes from the start and shows it

arr3.unshift("wine");
console.log( arr3 );                // unshift add to the begining

for ( let i = 0; i < arr3.length; i++ ) {   // перебор масвиа for
    console.log(arr3[i]);
}

for (let key in arr3) {                     // перебор масива for key in
    console.log( arr3[key] );
}

// for in - bad idea, because of posssible hiden props at some pseudomassives in brousers and so on so it is in 10 - 100 times slower

console.log( arr3.length ); // n + 1, because 0 is included

arr3.length = 2;
arr3.length = 3;
console.log(arr3) // 2 elems + 1 empty

// someArrey.length = 0; // is the easyest way to clear the massive

let matrix = [
    [1, 3, 7],
    [5, 23, 22],
    [4, 8, 2]
];
console.log( matrix[1][1]) // 23 the central one in matrix, because 0 - is 1st

// massives can be transformed only toString
// do not compare massives( they a compared as objects via link or always wil be different(false) )