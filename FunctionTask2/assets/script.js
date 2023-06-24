//task 1

function reverseWords(sentence) {
    var words = sentence.trim().split(" ");
    var reversedWords = words.reverse().join(" ");
    return reversedWords;
  }
  console.log(reverseWords("hello world!"));
  console.log(reverseWords("a good example")); 

  //task 2
  function counterpartCharCode(character) {
    var charCode = character.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      return charCode - 32;
    } else if (charCode >= 65 && charCode <= 90) {
      return charCode + 32;
    }
    return charCode;
  }
  console.log(counterpartCharCode("A")); 
  console.log(counterpartCharCode("a")); 

  //task 3
  function toString(sentence) {
    var reversed = sentence.split("").reverse().join("");
    var transformed = "";
  
    for (var i = 0; i < reversed.length; i++) {
      var char = reversed.charAt(i);
      if (char === char.toUpperCase()) {
        transformed += char.toLowerCase();
      } else {
        transformed += char.toUpperCase();
      }
    }
    return transformed;
  }
  console.log(toString("Hello World!"));
  console.log(toString("RaceCar"));
  
  
  //task 4
  function findLongestWord(sentence) {
    var words = sentence.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
      var currentWord = words[i];
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    }
    return longestWord;
  }
  console.log(findLongestWord("Hello world!")); 
  console.log(findLongestWord("I love programming"));
  

  // task 5

  function reverseSentence(sentence) {
    var words = sentence.split(" ");
    var reversedSentence = words.reverse().join(" ");
    return reversedSentence;
  }
  console.log(reverseSentence("Hello world!"));  
  console.log(reverseSentence("I love programming")); 
  

  //task 6
  function removeDuplicates(str) {
    var uniqueStr = "";
    var charMap = {};
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (!charMap[char]) {
        uniqueStr += char;
        charMap[char] = true;
      }
    }
    return uniqueStr;
  }
  console.log(removeDuplicates("Hello")); 
  console.log(removeDuplicates("Programming")); 
  
  //task 7
  function replaceSpacesWithDashes(str) {
    var replacedStr = str.replace(/\s/g, "-");
    return replacedStr;
  }
  console.log(replaceSpacesWithDashes("Hello World"));
  console.log(replaceSpacesWithDashes("I love JavaScript"));
  
  //task 8

  function swapFirstAndLastChars(str) {
    if (str.length < 2) {
      return str;
    }
    var firstChar = str[0];
    var lastChar = str[str.length - 1];
    var middleChars = str.slice(1, str.length - 1);
    var swappedStr = lastChar + middleChars + firstChar;
    return swappedStr;
  }
  console.log(swapFirstAndLastChars("Hello")); 
  console.log(swapFirstAndLastChars("JavaScript"));

  //task 9
  function countUppercaseLetters(sentence) {
    var uppercaseCount = 0;
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i];
      if (char >= "A" && char <= "Z") {
        uppercaseCount++;
      }
    }
    return uppercaseCount;
  }
  console.log(countUppercaseLetters("Hello World"));  
  console.log(countUppercaseLetters("I Love JavaScript"));

  // task 10

  var username = "admin";
var password = "6gH123";

var enteredUsername = prompt("İstifadəçi adını daxil edin:");
var enteredPassword = prompt("Şifrəni daxil edin:");

if (enteredUsername === username && enteredPassword === password) {
  console.log("Giriş uğurludur!");
} else {
  console.log("Daxil edilən istifadəçi adı və ya şifrə yanlışdır.");
}

  
  