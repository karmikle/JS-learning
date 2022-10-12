let a = "First Argument";
let b = "Second Argument";

while (true) {
    let firstArgmnt = prompt( `Enter "a" digit please: (${a})` , "" );
    if ( !firstArgmnt ) break;

    let secondArgument = prompt( `Enter "b" digit please: (${b})` , "" );
    if ( !secondArgument ) break;

    let c = prompt( "enter result of A * B =", "");
    if ( !c ) break;

    let multiplyAction = firstArgmnt * secondArgument;
    
    switch ( c == multiplyAction ) {
        case ( c > multiplyAction ):
            console.log("not enaught");
            break;
        case ( c < multiplyAction ):
            console.log("too much");
            break;
        default :
            console.log("correct");
    }                               // можно группировать case
}
