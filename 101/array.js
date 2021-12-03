//Задача 1 на поиск логина

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";
let message = "";

for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];

  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
  message = `Пользователь ${loginToFind} не найден.`;
}
console.log(message);
//_________________________________

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";
let message = `Пользователь ${loginToFind} не найден.`;

for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];

  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
}
console.log(message);
//_________________________________

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";
let message = `Пользователь ${loginToFind} не найден.`;

for (const login of logins) {
  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
}
console.log(message);
//_________________________________

//Да или нет?

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";
let message = `Пользователь ${loginToFind} не найден.`;

console.log(logins.includes(loginToFind));
//true

//_________________________________

//тернарный оператор
const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;
console.log(message);
//_________________________________

//Задача 2 на поиск самого маленького числа
//линейный алгоритм

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
  console.log(number);
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log("The Smallest number: ", smallestNumber);

//7
//_________________________________

//Задача 3 на поиск самого большого числа
//линейный алгоритм

const numbers = [51, 18, 13, 24, 7, 85, 19];
let largestNumber = numbers[0];

for (const number of numbers) {
  console.log(number);
  if (number > largestNumber) {
    largestNumber = number;
  }
}
console.log("The largest number: ", largestNumber);

//85
//_________________________________

// Задача 4 Сшить элементы в одну строку

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (const friend of friends) {
  string += friend + ",";
}
string = string.slice(0, string.length - 1);
console.log(string);

//Mango,Poly,Kiwi,Ajax
//_________________________________

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
const string = friends.join(",");
console.log(string);

//Mango,Poly,Kiwi,Ajax
//_________________________________

//Задача 5 Изменить регистр кажого символа

const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);
//(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
for (const letter of letters) {
  console.log(letter);
  if (letter === letter.toLocaleLowerCase()) {
    console.log("Эта буква в нижнем регистре -", letter);
    invertedString += letter.toUpperCase();
  } else {
    console.log("Эта буква в верхнем регистре -", letter);
    invertedString += letter.toLocaleLowerCase();
  }
}
console.log(invertedString);

//jAVAsCRIPT
//_________________________________

//используем тернарник
const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);
//(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
for (const letter of letters) {
  console.log(letter);
  invertedString +=
    letter === letter.toLocaleLowerCase()
      ? letter.toUpperCase()
      : letter.toLocaleLowerCase();
}
console.log(invertedString);

//jAVAsCRIPT
//_________________________________

//Задача 6 Делаем slug в URL из названия статьи

const tittle = "Top 10 benefits of React framework";
const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(" ");
const slug = words.join("-");
console.log(slug);

//________________________________

//второй вариант
const title = "Top 10 benefits of React framework";
const slug1 = title.toLowerCase().split(" ").join("-");
console.log(slug1);

//_________________________________

//Задача 7 Напиши скрипт, который считает сумму двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

for (let i = 0; i < array1.length; i += 1) {
  total += array1[i];
}

for (let i = 0; i < array2.length; i += 1) {
  total += array2[i];
}
console.log(total);

//110 - плохой, но рабочий вариант

//________________________________

//лучший вариант

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
  total += number;
}
console.log(total);

//110

//_______________________________

//Задача 8 Работаем с карточками Трелло (удалить, добавить, обновить)

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

console.table(cards);

//удаляем по индексу

const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);
console.log(index);
//2
cards.splice(index, 1);
//console.log(cards.splice(index, 1)); //удаляет и возвращает массив удаленных элементов (можно не один)
console.table(cards);

//добавить шестую карточку по индексу

const cardToInsert = "Карточка-6";
const indexAdd = 3;
//cards.splice(3, 0, 5, 10, 20)
//3 - начиная с какого индекса, 0 - ничего не удалять(количество удаленных), добавить 5, 10, 20
cards.splice(indexAdd, 0, cardToInsert);

console.log(cards);

//Обновление по индексу
const cardToUpdate = "Карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);
console.log(indexToUpdate);
cards.splice(indexToUpdate, 1, "Обновленная карточка-4");
console.table(cards);

//__________________________________________

//Задача 01 посчитать сумму чисел в массиве

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 98];
let total = 0;

for (const value of cart) {
  total += value;
}
console.log(total);

//_________________________________________

const numbers = [1, 2, 3, "many"];
numbers[0];
numbers[0] = 4;
numbers[0];
for (const number of numbers) {
  console.log(number);
}
// 4
// 2
// 3
// many
for (let number of numbers) {
  console.log(number);
}
// 4
// 2
// 3
// many
const numbersNTF = "many";
let message = "Not find";
for (const number of numbers) {
  if (number === numbersNTF) {
    message = "Find";
    break;
  }
}
console.log(message);
// Find

//_________________________________________

const numbers= [1, 2, 3, 'many'];
console.log(Array.isArray(numbers));
//true

//__________________________________________

let numbers = [2, , , 4];
numbers[1];
//undefined;

//______________________________________

const numbers= [1, 2, 3, 'many'];
numbers.unshift(555);
//5

//______________________________________

const numbers = ["M", "a", "n", "g", "o"];
numbers.pop();
//"o"
numbers.pop();
//"g"

//______________________________________

const numbers = [1, 2, 3, "many"];
numbers.shift();
//1
console.table(numbers);

//index  Value
// 0	      2
// 1	      3
// 2	    'many'
// Array(3)

//______________________________________

const numbers = [1, 2, 3, "many"];
numbers.push(4);
//5

//___________________________________

const numbers = [1, 3, 5, 6, 7];
numbers.slice(0, 3);

//_________________________________

const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 1, 8, 9);
//[2]
console.log(numbers);
//[(1, 8, 9, 3, 4, 5)];

//_____________________________________
const oldNumbers = [1, 2, 3, 4];
const newNumbers = [10, 20, 30];
const allNumbers = oldNumbers.concat(newNumbers);
console.log(allNumbers);
console.log(allNumbers);
//[1, 2, 3, 4, 10, 20, 30]