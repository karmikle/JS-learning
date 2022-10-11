const time = 12 ;
  if ( time <= 10 || time >= 18) {
    console.log("closed");
  } else {
    console.log("welcome");
  }

const vremya =9;
isWeekend = false;
if ( vremya <= 10 || vremya >= 18 || isWeekend) { //  будет closed если isWeekennd true
    console.log("closed");
} else {
    console.log("welcome")
}

const userName = "";
const userNick = "Dimasik";
const userSurname = "Onopko";
const user = userName || userNick || userSurname;
console.log(user); // || - first true

const a = 5;
const b = 0;
if ( a && b ) {
    console.log( "a =", a , "b =", b );
    console.log( "Sum of a + b =", a + b );
} else {
    console.log( "a =", a , "b =", b );
    console.log( "input all ~"); 
}

const oclock = 12;
const oclockMin = 20;
if ( oclock == 12 && oclockMin == 30) {
    console.log( "Alarm is on, time for coffee breake, 15 mins" );
} else {
    console.log( "continue coding Dude")
    if (oclockMin < 10) {
        console.log( "It's", oclock + ":" + "0" + oclockMin ?? "00", " now" )
    } else {
        console.log( "It's", oclock + ":" + oclockMin, " now")
    }
}

const height = -1;
const width = 100;
const area = ( height ?? 0 ) * ( width ?? 0 );
console.log(area);



