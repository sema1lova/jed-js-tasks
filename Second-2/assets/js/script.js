/* Task-01
Konsola mesaj verin: «My name is Muard».
*/
console.log("My Name Is Sema");


/* Task-02
Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin. 
Bu dəyişənin dəyərini konsolda göstərin.
*/
const name = "Sema";
console.log(name);


/* Task-03
Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
Birdən çox variant seçin.
*/
// let 2user = 1; yazmaq olmaz
// let c@rt = 2; yazmaq olmaz
// let person =3; yazmaq olar
// let title color = 4; yazmaq olmaz
// let console = 5;  yazmaq olmaz
// let $add =6; yazmaq olar


/* Task-04
Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
=>let bookPrice = 750;
=>let bookAmount = 14;
*/
let bookPrice = 750;
let bookAmount = 14;
let totalValue = bookPrice *
bookAmount;
console.log ("Depodaki bütün kitaplarin ümumi deyeri: " + totalValue + " AZN");


/*Task-05
Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə» 
dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və 
ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
msSpeed dəyişəninin dəyərini konsola çıxarın.
=>let kmhSpeed = 75;
 */
let kmhSpeed = 75;
let msSpeed = kmhSpeed * 1000 / 3600;
console.log(kmhSpeed + " km/saat, " +
msSpeed + " m/sanivaya barabardir.");


/*Task-06
İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı 
günlərin sayını göstərən proqram yazın.
*/ 
let birthDate = prompt("Dogum tarixinizi daxil edin (format: YYYY-MM-DD):");
let birthTime = new Date (birthDate).getTime ();
let todayTime = new Date() .getTime ();
let daysSinceBirth =
Math.floor((todayTime - birthTime) / (1000 * 60 * 60 * 24));
console.log("Siz " + daysSinceBirth + "gündür dunyadasiniz.");


/* Task-07
Ədədlər üzərində əməliyyatları yerinə yetirin.
num dəyişənində iki rəqəmli ədəd saxlanılır. 
Konsola çıxaran belə proqram yazın:
- Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
- 3-ə bölünmədən qalan bu ədədin qalığını.
 */
num = int(input("İki basamaklı bir sayı girin: "))
num2 = num ** 5;
 print("Besinci dereceye yukseltme :", num2)
num3 = num % 3
print("3'e bolunme ededin qaligi:", num3)



/*Task-08
Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. 
Tanışlığımıza çox şadam!”
firstName dəyişənində istifadəçinin adı, 
lastName — dəyişənində isə soyadı saxlanır.
Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
=>let firstName = 'Alan';
=>let lastName = 'Turing';
 */

let firstName = 'Alan';
let lastName = 'Turing';

console.log('Sizin adiniz ' + firstName + ' ' + lastName + '. Tanisligimiza cox sadam !');


/*Task-09
Şablon mətnlərdən istifadə edərək, 
konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.
 */
let firstName2 = 'Alan';
let lastName2 = 'Turing';

console.log(`Sizi bir daha görməyimizə şadıq, ${firstName2} ${lastName2}`);




/*Task-10
Addaki hərflərin sayını konsola çıxarın.
fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
Probel hərf olaraq sayılmır.
let fullName = "Murad Orucov" */

let fullName = "Murad Orucov";
let letterCount = fullName.replace(/ /g, '').length;

console.log(`Adinizda bu ${letterCount} qeder herf var`);




