'use strict';


// task 1
var arr = ["Element1", "Element2", "Element3"];
arr[1] = "Classified";
console.log(arr);

// task 2
let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
arr.forEach(function (message, index) {
  let episode = index + 4;
  console.log(`Episode ${episode}: ${message}`);
});

// task 3
let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];
function getAnnualSalary() {
    return salary.flat().reduce((total, amount) => total + amount, 0);
  }
  console.log(getAnnualSalary()); // İl üçün bütün işçilərin maaşlarının cəmi
  
  function getMonthlySalary(monthNumber) {
    return salary.map((row) => row[monthNumber - 1]);
  }
  console.log(getMonthlySalary(1)); // 1-ci ay üçün işçilərin maaşları
  
  function getQuarterSalary(quarterNumber) {
    let startMonth = (quarterNumber - 1) * 3;
    let endMonth = startMonth + 3;
    return salary.flat(startMonth, endMonth).reduce((total, amount) => total + amount, 0);
  }
  console.log(getQuarterSalary(3)); // 3-cü rüb üçün şöbənin bütün işçilərinin maaşlarının cəmi
  
// task 4
let input = prompt("Vergüllə ayrılmış beş ədəd daxil edin:");
let numbers = input.split(",");
console.log("Daxil edilmiş ədədlər:");
console.log(numbers);
let minNumber = Math.min(...numbers);
console.log("Ən kiçik ədəd: " + minNumber);


// task 5
let text = '32, 31, 34, 36, 31';
let replacedText = text.split(',').join('.');
console.log(replacedText);







// ARRAY TASK PART 2


// task 1
let qrupYoldashi = ['Sema', 'Ali', 'Malika'];
qrupYoldashi.push('Milana');
qrupYoldashi.shift();
console.log(qrupYoldashi);

// task 2
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, ...remainingNumbers2] = numbers2;
console.log("Dəyişənlər:");
console.log(a, b);
console.log("Qalan ədədlər:");
console.log(remainingNumbers2);


// task 3
let numbers3 = [8, 5, 10, 3, 9, 2, 7, 6, 1, 4];
let maxNumber3 = Math.max(...numbers3);
console.log("Massivdəki maksimal dəyər:", maxNumber3);


// task 4
let numbers4 = [1, 2, 3, 4, 5];
console.log("Orijinal massiv:", numbers4);
let doubledNumbers4 = numbers.map(num4 => num4 * 2);
console.log("Yeni massiv:", doubledNumbers4);
console.log("Orijinal massiv (dəyişmədi):", numbers4);


// task 5
let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
  ];
  let development = employees.filter(employee => employee[1] === 'development');
  console.log("Development işçiləri:", development);
  

// task 6



// task 7
let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
let sortedArray = sortArray(array);
console.log(sortedArray);

// task 8
function printNegativeNumbers(arr8) {
    let negativeNumbers8 = arr8.filter(num8 => num8 < 0);
    negativeNumbers8.forEach(num8 => console.log(num8));
  }
  let numbers8 = [1, -5, 6, -2, 3, -7, 0, 4, -9];
  printNegativeNumbers(numbers8);


// task 9
function printPositiveNumbers(arr9) {
    arr9.forEach(function(num9) {
      if (num9 > 0) {
        console.log(num9);
      }
    });
  }
  let numbers9 = [1, -5, 6, -2, 3, -7, 0, 4, -9];
  printPositiveNumbers(numbers9);
  
// task 10
const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
function printWithDashes(name) {
  console.log("-------------");
  console.log(name);
  console.log("-------------");
}
function printWithHearts(name) {
  console.log("<3<3<3<3 " + name + " <3<3<3<3");
}
function printWithIndex(name, index) {
  console.log(index + " - " + name);
}
names.forEach(printWithDashes);
console.log("");
names.forEach(printWithHearts);
console.log("");
names.forEach(printWithIndex);

// task 11
function kebabToUpper(str) {
    return str.toUpperCase().replace(/-/g, '_');
  }
  console.log(kebabToUpper('first-user')); 

// task 12
let numbers12 = [1, 5, -7, 3, -9, 4, -6, 2];
let modifiedArray12 = numbers12
  .map((num12) => num12 < 0 ? -num12 : num12) // Mənfi ədədləri müsbət ədədlərə çevirin
  .map((num12) => num12 * 2); // Müsbət ədədləri iki qat artırın
console.log(modifiedArray12);

// task 13
let strings13 = ['Html', 'CSS', 'JavaScript', 'Array', 'Methods','String'];
function getFirstThreeChars(arr13) {
  return arr13.map((str) => str13.substring(0, 3)); 
}
let result13 = getFirstThreeChars(strings13);
console.log(result13);

// task 14
let names14 = ['Aylin', 'Bahar', 'Ali', 'Aytac', 'David'];

function getNamesStartingWithA(arr14) {
  return arr14.filter((name14) => name14.startsWith('A')); 
}
let result14 = getNamesStartingWithA(names14);
console.log(result14);


// task 15
let price15 = [100, 50, 75, 120, 200];
function addTax(arr15) {
  return arr15.map((item15) => item15 + item15 * 0.2);
}
let result15 = addTax(price15);
console.log(result15);

// task 16
let numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function countEvensAndOdds(arr16) {
  let evens = arr16.filter((num16) => num16 % 2 === 0); 
  let odds = arr16.filter((num16) => num16 % 2 !== 0); 
  return `Massivdə ${evens.length} cüt və ${odds.length} tək ədəd var`;
}
let result16 = countEvensAndOdds(numbers16);
console.log(result16);
