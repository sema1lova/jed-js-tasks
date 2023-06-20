// let num = 43; let number = 2; while (number <= num ) {     number++     if
// (num % number === 0)  result: false     else result: true } if( result)
// console.log("sade"); else console.log("murekkebdir");

let txt = "Metnyazin";

for (let i = 0; i < txt.length; i++) {
    let element = txt[i];
    if (isNaN(element)) {
        console.log("reqem yoxdur");
    } else {
        console.log("reqem var");
    }
}