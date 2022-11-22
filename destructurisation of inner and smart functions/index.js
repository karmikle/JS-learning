let options = {
    size: {
        width: 300,
        hight: 100,
    },
    items: ["cake", "banana"],
    box: true,
};

let {
    size: {
        width,
        hight
    },
    items: [item1, item2],
    title = "delivery"
} = options;

console.log(title);
console.log(width);
console.log(hight);
console.log(item1, item2)
console.log(options)

let menu = {
    title: "my menu",
    items: ["item1", "item2"],
}
function showMenu({title = "undefined", width = 200, hight =100, items =[]}) {
    console.log(`\n${title} , ${width}, ${hight}`)
    console.log(items)
}
showMenu(menu); //!!!


let delivery = {
    title: "fast delivery",
    items: ["box1", "box2"],
};
function showDelivery ({
    title = "undefined",
    boxWidth: w = 200,
    boxHight: h = 400,
    items: [box1, box2]
}) {
    console.log(`\n${title}, ${w}, ${h}`);
    console.log(box1, box2);
}
showDelivery(delivery); //!!!

function showDelivery2 ({
    title = "extra delivery",
    width = 100,
    hight = 200
} = {}) { // ***
    console.log(`\n${title}, ${width}, ${hight}`);
}
showDelivery2() // !!! because of ***