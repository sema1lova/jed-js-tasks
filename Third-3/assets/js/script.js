// task 1
var soz = prompt("Bir söz daxil edin:"); 

if (soz === "user") {
  console.log("Xoş gəldin, istifadəçi!");
} else if (soz === "admin") {
  console.log("Xoş gəldin, cənab admin!");
} else if (soz === "guest") {
  console.log("Xoş gəldin, qonaq!");
} else {
  console.log("Xoş gəlmisiniz!");
}

// task 2
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  
//task 3
var eded = parseInt(prompt("Bir ədəd daxil edin:"));

if (eded >= 10 && eded <= 99) {
  console.log("Ədəd ikirəqəmlidir.");
} else {
  console.log("Ədəd ikirəqəmli deyil.");
}

// task 4
var eded = parseInt(prompt("Bir ədəd daxil edin:"));
if (eded % 2 === 0 && eded % 5 === 0) {
  console.log("Bu istədiyim ədəddir.");
} else {
  console.log("Bu ədəd şərti ödənmir.");
}

// task 5
var eded1 = parseInt(prompt("Birinci ədədi daxil edin:"));
var eded2 = parseInt(prompt("İkinci ədədi daxil edin:"));
var eded3 = parseInt(prompt("Üçüncü ədədi daxil edin:"));

var cem = eded1 + eded2 + eded3;

if (cem > 100) {
  console.log("Cəmləri 100-ü keçdi.");
} else {
  console.log("Cəmləri 100-ü keçmədi.");
}
