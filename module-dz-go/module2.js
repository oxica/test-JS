6часов
1
function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }
  return "You are a minor";
}
//checkAge(20)
//checkAge(8)


2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  }
return "Access denied, wrong password!";
  }

//checkPassword("mangohackzor")
//checkPassword("jqueryismyjam")


3*
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
   
    return "The order is accepted, our manager will contact you";
  }
//checkStorage(100, 50)
//checkStorage(70, 0)
//checkStorage(100, 130)


4
const fruits = ["apple", "plum", "pear", "orange"];


5
const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

//"apple"
//"plum"
//"orange"


6
const fruits = ["apple", "plum", "pear", "orange"];

fruits[1] = "peach";
fruits[3] = "banana";


7
const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length;
//4


8
const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
//3
//"banana"


9**
function getExtremeElements(array) {
  const lastElement = array[array.length - 1];
  const firstElement = array[0];
	
  return [firstElement, lastElement];
}
//getExtremeElements(["apple", "peach", "pear", "banana"])


10
function splitMessage(message, delimeter) {
  let words;
	words = message.split(delimeter);
  return words;
}
//
splitMessage("Mango hurries to the train", " ")


11
function calculateEngravingPrice(message, pricePerWord) {

let words;
  words = message.split(' ');
  words = words.length * pricePerWord;
  return words;
}
//calculateEngravingPrice("Web-development is creative work", 20)
//80


12
function makeStringFromArray(array, delimeter) {
  let string;
string = array.join(delimeter);
  return string;
}
//makeStringFromArray(["M", "a", "n", "g", "o"], "")
//"Mango"


13
function slugify(title) {

return title.toLowerCase().split(" ").join("-");
}
//slugify("How to become a JUNIOR developer in TWO WEEKS")
//"how-to-become-a-junior-developer-in-two-weeks"


14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);


//console.log(firstTwoEls);

//console.log(nonExtremeEls);

//console.log(lastThreeEls);



//(2) ['apple', 'plum']

//(3) ['plum', 'pear', 'orange']

//(3) ['pear', 'orange', 'banana']


15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients); 
//console.log(allClients);
//(6) ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston']


16
function makeArray(firstArray, secondArray, maxLength) {
const allArray = firstArray.concat(secondArray);
const allArrayLength = allArray.length;
if (allArrayLength >= maxLength) {
  return allArray.slice(0, maxLength)
}
  return allArray;
  }

//makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)


17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { 
  console.log(i);
}


18
function calculateTotal(number) {
  let result = 0;
for (let i=1; i<=number; i +=1) {
  result += i; 
}
return result;
}
//calculateTotal(3)
//6


19
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i]; 
  console.log(fruit);
}
//apple
//plum
//pear
//orange


20
function calculateTotalPrice(order) {
  let total = 0;
for(let i=0; i<order.length; i += 1) {
    total += order[i];
}
  return total;
}
//calculateTotalPrice([12, 85, 37, 4]);
//138


21****(longestWord.length)
function findLongestWord(string) {
const words = string.split(' ');
let longestWord = words[0];
for(const word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
}
}

return longestWord;
}
//findLongestWord("Google do a roll")


22**
function createArrayOfNumbers(min, max) {
  const numbers = [];    
for(let i=min; i<=max; i+=1) {
numbers.push(i)
}
  return numbers;
}
//createArrayOfNumbers(29, 34);


23
function filterArray(numbers, value) {
  const newArrey = [];
for(const number of numbers) {
if(value < number) {
newArrey.push(number);
}
}
return newArrey;
}
//filterArray([12, 24, 8, 41, 76], 20)
//[24, 41, 76]


24
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit); // Change this line
}
//checkFruit("apple", "plum", "pear", "orange")


25****//
function getCommonElements(array1, array2) {
  const newArray = [];
  for(const number of array1){
        if(array2.includes(number)) {
      newArray.push(number);
}
}
    return newArray;

}
//getCommonElements([1, 2, 3], [2, 4])
//2


26
function calculateTotalPrice(order) {
  let total = 0;

  for (const number of order) {
    total += number;
  }
  return total;
}
//calculateTotalPrice([12, 85, 37, 4])


27
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (const number of numbers) {
      if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

//filterArray([1, 2, 3, 4, 5], 4)
//[5]


28
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
//console.log(a,b,c,d,e);

//0 1 3 5 2


29
function getEvenNumbers(start, end) {
const numbers = [];
  
for(let i=start; i<=end; i+=1) {
if(i%2===0){
  numbers.push(i)
}continue;
}
  return numbers;
}
//getEvenNumbers(2, 5)

//[2, 4]


30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
//10


 31
function findNumber(start, end, divisor) {
  let number;
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;     
    }
  }
}
//findNumber(2, 6, 5)
//5


32*****
function includes(array, value) {
  
  for (const element of array) {
        if (element === value) 
{
return true;
} 
}return false;
}
