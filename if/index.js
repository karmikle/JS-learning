const year = 2022;
if (year == 2022) {
    console.log("+");
} else {
    console.log("-");
}

const month = 12;
if ( month < 11) {
    console.log( "not yet" );
} else if ( month > 11 ) {
    console.log( "late" );
} else {
    console.log( "+" );
}

const age = 18;
const message = age >= 18 ? "more than 18" : "less than 18";
console.log(message);

const time = 11;
const intime = 
    (time < 10) ? "RANO" :
    (time > 10) ? "POZDNO" :
    "INTIME";
  console.log(intime);

const day = 20;
if (day == 20) {
    console.log("inday")
} else {
    console.log("not in day");
}