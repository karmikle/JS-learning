let a, b, action, consoleRezult;

function sum( a  , b ) {
    return ( +a + +b );
}
function minus( a , b  ) {
    return ( +a - +b );
}
function mult( a  , b ) {
    return ( a * b );
}
function devide( a , b ) {
    return ( a  / b );
}


function opr() { 
    let choosenOpr = prompt ( "Enter action +, - , * or /", "0" );
    action = choosenOpr;

    if ( !choosenOpr && confirm ("Do you realy want to exit?") ) {
        alert( "Goodby!" );
        return false;
    }
    // if ( action !== "-" || action"+")
    if ( action === "-" ) {} else
    if ( action === "+" ) {} else
    if ( action === "*" ) {} else
    if ( action === "/" ) {} else {
        alert ( "Be more attentive, use correct operators!!!" ) + opr();
    }
    return action;
}



function firstArgmnt() {
    let firstA = prompt ( "1st Argument", "0" );
    a = firstA;

    if ( !firstA ) { 
        let confirmA
        confirmA = confirm ( "Do you realy want to exit?" );
        if ( confirmA == false ) {
            calculator();
        } else {
            alert( "Goodby!" );
            return false;
        }
    }

    if ( !isNaN( firstA ) ) {
        a = firstA;
        return a;
    } else if ( isNaN( firstA ) ) {
        alert ( " Be more attentive, use only Numbers!!!" );
        return firstArgmnt();
    }
}

function secondArgmnt() {
    let secondA = prompt ( "2nd Argument", "0" );
    b = secondA;

    if ( !secondA ) { 
        let confirmB
        confirmB = confirm ( "Do you realy want to exit?" );
        if ( confirmB == false ) {
            calculator();
        } else {
            alert( "Goodby!" );
            return false;
        }
    }

    if ( !isNaN( secondA ) ) {
        b = secondA;
        return b;
    } else if ( isNaN( secondA ) ) {
        alert ( " Be more attentive, use only Numbers!!!" );
        return secondArgmnt();
    }
}

function rezult() {                         // через обьект
    if ( action === "+" ) {
        alert( sum( a, b ) );
        consoleRezult = sum( a, b);
    } else if ( action === "-" ) {
        alert( minus( a, b ) ); 
        consoleRezult = minus( a, b);
    } else if( action === "*" ) {
        alert( mult( a, b ) );
        consoleRezult = mult( a, b);
    } else if( action === "/" ) {
        alert( devide( a, b ) );
        consoleRezult = devide( a, b);
    }
}

function calculator() {
    if ( firstArgmnt() && opr() && secondArgmnt() ) {
        rezult();
        console.log( a, action, b, "=", consoleRezult );
        calculator();
    }
}

calculator();

// function firstArgmnt() { 
//     if (!numCheck()) {   
//     } 
//     return a;
// }


// function numCheck( a = 0 ) {
//     let firstA = prompt ( "1st Argument", "0" ) ?? 0;
//     a = firstA
//     if (!isNaN(a)) {} else {
//         alert ( "Be more attentive, use only Numbers!!!" );
//         numCheck();
//     }
//     return a
// }

// console.log(opr());

// function secondArgmnt() {
//     let secondA = prompt ( "2nd Argument", "0" );
//     b = secondA;

//     if ( !isNaN( b ) ) {
//         return b;
//     } else if ( isNaN(b) ) {
//         alert (" Be more attentive, use only Numbers!!!");
//         return secondArgmnt();
//     } else {   
        
//     }
// }


// function secondArgmnt( b = 0 ) {
//     let secondA = prompt ( "2nd Argument", "0" );
//     b = secondA;
//     if ( isNaN(b)) {
//         alert (" Be more attentive, use only Numbers!!!");
//         secondArgmnt();     
//     }
//     return b;
// }

// console.log(secondArgmnt());




// function calculator() {
//     if(!firstArgmnt()) {
//         return false;
//     };
//     if(!opr()) {
//         return false;
//     };
//     if(!secondArgmnt()) {
//         return false;
//     };
//     if (!rezult()) {
//         return false;
//     } else {
//         calculator();
//     };
    
// }



// function rezult() {
//     let culc = action;
//     switch ( culc === action) {
//         case ( culc === "+" ):
//             alert( sum( a, b ) );
//         break;
//         case ( culc === "-"):
//             alert( minus( a, b ) );
//         break;
//         case ( culc === "*"):
//             alert( mult( a, b ) );
//         break;
//         case ( culc === "/"):
//             alert( devide( a, b ) );
//         break;
//     }
//     return rezult;
// }



// while (true) {
//     opr();
//     // if ( opr() == false) break;
//     // let action = prompt ( "Enter action +, - , * or /", "" );
//     // if ( action = false ) break;

//     firstArgmnt();
//     // let a = +prompt ( "1st argument", 0);
//     // if (!a) break;

//     secondArgmnt();
//     // let b = +prompt ( "2nd argument", 0);
//     // if (!b) break;

//     let culc = action;
//     switch ( culc === action) {
//         case ( culc === "+" ):
//             alert( sum( a, b ) );
//             break;
//         case ( culc === "-"):
//             alert( minus( a, b ) );
//             break;
//         case ( culc === "*"):
//             alert( mult( a, b ) );
//             break;
//         case ( culc === "/"):
//             alert( devide( a, b ) );
//             break;
//         default: alert ( "Use correct operators!!!" );
//     }
// }



// function one() {
//     let ones = prompt("asa","");
//     return ones;
// }
// function two() {
//     let twos = prompt("czxc","");
//     return twos;
// }
// function tree() {
//     if ( !one() ) {
//         return false;
//     }
//     if (!two()) {
//         return false;
//     } else {
//         tree();
//     }

 
// }

// tree()