// task 1

function displayActiveStatus(username) {
    console.log(username + ' is active now');
  }
  displayActiveStatus('user1');
  displayActiveStatus('user2');
  displayActiveStatus('user3');

  // task 2
  function findMaxNumber(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    console.log('En büyük sayı: ' + max);
  }
  findMaxNumber(10, 5, 8);
  findMaxNumber(20, 30, 15);
  findMaxNumber(100, 75, 90);
  
  // task 3
  function calculateTotalAmount(rubles, dollars) {
    var totalRubles = rubles + (dollars * 75);
    console.log('Bütün depozitlər üzrə məbləğ: ' + totalRubles + ' rubl');
  }
  calculateTotalAmount(1200, 20);

  
  // task 4
  function numberToText(number) {
    var numberText = '';
    var singleDigits = ['bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz'];
    var tensDigits = ['on', 'iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan'];
  
    if (number >= 1 && number <= 99) {
      if (number < 10) {
        numberText = singleDigits[number - 1];
      } else {
        var tens = Math.floor(number / 10);
        var ones = number % 10;
        numberText = tensDigits[tens - 1] + ' ' + singleDigits[ones - 1];
      } 
    } else numberText = 'Düzgün bir rəqəm daxil edin (1 ilə 99 arasında)';
    
    console.log(numberText);
  }
  
  numberToText(7);
  numberToText(35); 
  numberToText(100); 
  

  // task 5 
  function min(num1, num2) {
    if (num1 < num2)  return num1;
    else  return num2;
   
  }
  console.log(min(5, 10));
  console.log(min(8, 3));
  console.log(min(4, 4));
  
  // task 6
  function calc(num1, num2, operator) {
    var result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Yanlış operator!';
    }
    return result;
  }
  console.log(calc(4, 6, '+')); 
  console.log(calc(10, 5, '-'));
  console.log(calc(3, 4, '*')); 
  console.log(calc(20, 5, '/')); 
  console.log(calc(8, 2, '^')); 

  
  //task 7
//   sinif


  //task 8
  function capitalizeWords(sentence) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }
  console.log(capitalizeWords('Hello my name is Sema')); 
  console.log(capitalizeWords('this is a test')); 
  console.log(capitalizeWords('JavaScript is programming language')); 
  

  //task 9
  function isEven(number) {
    return number % 2 === 0;
  }
  console.log(isEven(4)); 
  console.log(isEven(7));
  console.log(isEven(0)); 

  //task 10
  function isValidNumber(phoneNumber) {
    if (phoneNumber.length === 11 && phoneNumber.startsWith("+7")) return true;
     else return false;
  }
  console.log(isValidNumber("+71234567890")); 
  console.log(isValidNumber("71234567890")); 
  console.log(isValidNumber("+712345"));

  
  // task 11
  function numCounter(text) {
    var charCount = {};
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (charCount[char]) charCount[char]++;
       else charCount[char] = 1;
    }
    return charCount;
  }
  console.log(numCounter("hmtl")); 
  console.log(numCounter("css")); 
  console.log(numCounter("javascript"));
  



  // task 4 with switch case


  function numberToText(number) {
    var text = "";
    switch (number) {
        case 1:
            text = "bir";
            break;
        case 2:
            text = "iki";
            break;
        case 3:
            text = "üç";
            break;
        case 4:
            text = "dörd";
            break;
        case 5:
            text = "beş";
            break;
        case 6:
            text = "altı";
            break;
        case 7:
            text = "yeddi";
            break;
        case 8:
            text = "səkkiz";
            break;
        case 9:
            text = "doqquz";
            break;
        case 10:
            text = "on";
            break;
        case 20:
            text = "iyirmi";
            break;
        case 30:
            text = "otuz";
            break;
        case 40:
            text = "qırx";
            break;
        case 50:
            text = "əlli";
            break;
        case 60:
            text = "altmış";
            break;
        case 70:
            text = "yetmiş";
            break;
        case 80:
            text = "səksən";
            break;
        case 90:
            text = "doxsan";
            break;
        default:
          if (number > 10 && number < 20) {
            var remainder = number - 10;
            text = "on " + numberToText(remainder);
        } else if (number > 20 && number < 100) {
            var tens = Math.floor(number / 10) * 10;
            var ones = number % 10;
            text = numberToText(tens) + " " + numberToText(ones);
        }
            break;
    }
    return text;
}
var userInput = prompt("1 ilə 99 arasında bir rəqəm daxil edin:");
var number = parseInt(userInput, 10);
var text = numberToText(number);
console.log(text);
