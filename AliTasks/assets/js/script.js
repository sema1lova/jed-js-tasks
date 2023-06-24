'use strict';

// const arr = ['Sema','Humay','Amil','Ali','Elmar','Nihad']; let promt1 =
// prompt('Reqem daxil edin:'); let promt2 = prompt('Reqem daxil edin:');
// arr.push(promt1); arr.unshift(promt2); console.log(arr); const numbers = [
// 4,     21,     8,     6,     444,     111,     3,     7,     9,     99,
// 66,     23,     77,     0 ] numbers.sort((a, b) => a - b)
// console.log(numbers); const arr =['sema','nigar','ali','humay'];
// arr.forEach((elem,index)=>{     console.log(index,elem); } )

// const arr = ['sema', 'nigar', 'ali', 'humay','huseyn','alinemet'];

// const adlar = arr.filter((ad) => ad.length === 4 ); console.log(adlar);
// const adlar2 = arr.filter((ad) => ad.length > 5 && ad.length < 9); console.log(adlar2);

// const arr = ['sema', 'nigar', 'ali', 'humay','huseyn','alinemet'];

// let arr2 =arr.map(ad=> ad[ad.length-1]); console.log(arr2);


// const arr = ['sema', 'nigar', 'ali', 'humay','huseyn','alinemet'];
// let arr2 = arr.map(ad => ad.slice(0,3)); console.log(arr2);

const people =[
    {
        name:'Sema',
        age:19
    },
    {
        name:'Ali',
        age:22
    },
    {
        name:'Nigar',
        age:17
    }
]
let arr2 = people.map(people =>people.name ); console.log(arr2);
let arr3 = people.map(people =>people.name + '-' + people.age ); console.log(arr2);

