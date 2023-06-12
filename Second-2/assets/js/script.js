/* Task-01*/
console.log("My Name Is Sema");

/* Task-02*/
const name = "Sema";
console.log(name);

/* Task-03*/
// let 2user = 1; yazmaq olmaz
// let c@rt = 2; yazmaq olmaz
// let person =3; yazmaq olar
// let title color = 4; yazmaq olmaz
// let console = 5;  yazmaq olmaz
// let $add =6; yazmaq olar


/* Task-04*/
let bookPrice = 750;
let bookAmount = 14;
let totalValue = bookPrice *
bookAmount;
console.log ("Depodaki bütün kitaplarin ümumi deyeri: " + totalValue + " AZN");

/*Task-05 */
let kmhSpeed = 75;
let msSpeed = kmhSpeed * 1000 / 3600;
console.log(kmhSpeed + " km/saat, " +
msSpeed + " m/sanivaya barabardir.");

/*Task-06*/ 
let birthDate = prompt("Dogum tarixinizi daxil edin (format: YYYY-MM-DD):");
let birthTime = new Date (birthDate).getTime ();
let todayTime = new Date() .getTime ();
let daysSinceBirth =Math.floor((todayTime - birthTime) / (1000 * 60 * 60 * 24));
console.log("Siz " + daysSinceBirth + "gündür dunyadasiniz.");

/* Task-07 */
num = int(input("İki basamaklı bir sayı girin: "))
num2 = num ** 5; print("Besinci dereceye yukseltme :", num2)
num3 = num % 3; print("3'e bolunme ededin qaligi:", num3)

/*Task-08 */
let firstName = 'Alan';
let lastName = 'Turing';
console.log('Sizin adiniz ' + firstName + ' ' + lastName + '. Tanisligimiza cox sadam !');

/*Task-09 */
let firstName2 = 'Alan';
let lastName2 = 'Turing';
console.log(`Sizi bir daha görməyimizə şadıq, ${firstName2} ${lastName2}`);

/*Task-10*/

let fullName = "Murad Orucov";
let letterCount = fullName.replace(/ /g, '').length;
console.log(`Adinizda bu ${letterCount} qeder herf var`);

//task11


// task 12
const fullName2 = prompt("Tam adınızı daxil edin (AD SOYAD formatında):");
const [firstName3, lastName3] = fullName.split(" ");
const newFullName = `${lastName3} ${firstName3}`;
console.log("Yeni tam adınız:", newFullName);

// task 13
const name1 = prompt("Adınızı daxil edin:");
console.log("Salam, " + name1 + "!");

// task 14
const num1 = parseFloat(prompt("Birinci ədədi daxil edin:"));
const num2 = parseFloat(prompt("İkinci ədədi daxil edin:"));
const toplama = num1 + num2;
const cixma = num1 - num2;
const vurma = num1 * num2;
const bolme = num1 / num2;
console.log("Toplama: " + toplama);
console.log("Çıxma: " + cixma);
console.log("Vurma: " + vurma);
console.log("Bölmə: " + bolme);


// task 15

// task 16

//task 17

//task18


// task 19
const price = prompt("Qiyməti daxil edin (530.90 formatında):");
const manat = Math.floor(price);
const qepik = Math.round((price - manat) * 100);
console.log(manat + " manat " + qepik + " qəpik");

// task 20
const salary = parseFloat(prompt("Əmək haqqını daxil edin:"));
const vergiFaizi = 13;
const vergiMeblegi = (salary * vergiFaizi) / 100;
const netSalary = salary - vergiMeblegi;
console.log("Vergi nəzərə alınmadan məbləğ:", netSalary.toFixed(2));


// task 21
const fullName21 = prompt("Soyad, ad və ata adınızı daxil edin:");
const [lastName21, firstName21, middleName21] = fullName.split(" ");
const lastNameT21 = lastName21.charAt(0).toUpperCase();
const firstNameT21 = firstName21.charAt(0).toUpperCase();
const middleNameT21 = middleName21.charAt(0).toUpperCase();
console.log(lastName21 + " " + lastNameT21 + "." + firstNameT21 + ".");

//task 22
const depositAmount = parseFloat(prompt("Əmanətin məbləğini daxil edin:"));
const duration = parseInt(prompt("Müddəti daxil edin (aylar):"));
const interestRate = parseFloat(prompt("Faiz dərəcəsini daxil edin:"));
const interest = (depositAmount * interestRate * duration) / 100;
console.log("Gözlənilən mənfəət:", interest.toFixed(2));


// task 23
const value = 10;
console.log(value > 5);   
console.log(value < 15); 
console.log(value >= 10); 
console.log(value === 10); 
console.log(value !== 20);


// task 24
const age = parseInt(prompt("Yaşınızı daxil edin:"));
if (age <= 18) console.log("Access denied");
else console.log("Access granted");


// task 25



// task 26
const year = parseInt(prompt("Bir il daxil edin:"));
if (year % 4 === 0) console.log("İl uzun ildir");
else console.log("İl uzun il deyil");

// task 27
let id = prompt("Məhsulun id-ni daxil edin:");
switch (id) {
  case "1":
    alert("Mövcuddur: 10 ədəd.");
    break;
  case "2":
    alert("Mövcuddur: 256 ədəd.");
    break;
  case "3":
    alert("Mövcuddur: 53 ədəd.");
    break;
  case "4":
    alert("Mövcuddur: 3 ədəd.");
    break;
  default:
    alert("Stokda yoxdur.");
    break;
}


// task 28
const gender = prompt("Cinsiniz (M və ya F):");
if (gender === "M" || gender === "m") console.log("male"); 
else if (gender === "F" || gender === "f") console.log("female"); 
else console.log("Yanlış cins daxil edildi.");


// task 29
const monthNumber = prompt("Ayın nömrəsini daxil edin:");
let monthName;
switch (parseInt(monthNumber)) {
  case 1:
    monthName = "Yanvar";
    break;
  case 2:
    monthName = "Fevral";
    break;
  case 3:
    monthName = "Mart";
    break;
  case 4:
    monthName = "Aprel";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "İyun";
    break;
  case 7:
    monthName = "İyul";
    break;
  case 8:
    monthName = "Avqust";
    break;
  case 9:
    monthName = "Sentyabr";
    break;
  case 10:
    monthName = "Oktyabr";
    break;
  case 11:
    monthName = "Noyabr";
    break;
  case 12:
    monthName = "Dekabr";
    break;
  default:
    monthName = "Yanlış ay nömrəsi";
    break;
}
console.log(monthName);


// task  30



