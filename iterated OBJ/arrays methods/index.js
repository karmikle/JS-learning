let range = {
    from: -3,
    to: 2,
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    console.log(num);
}

for (let char of "text") {
    console.log(char);
}

let str = "𝒳😂";
for (let char of str) {
    console.log( char );
}

let str2 = "asdf";
let iterator = str2[Symbol.iterator] ();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value)
}

let arrLike = {
    0: "hi",
    1: "fi",
    length: 2,
}

let arr = Array.from(arrLike);
console.log(arr.pop())

let arr2 = Array.from(range);
console.log(arr2);

let arr3 = Array.from(range, num => num * num);
console.log(arr3)

let str3 = "𝒳😂"

let chars = Array.from(str3);
console.log(chars.length)
console.log(chars[0])
console.log(chars[1])