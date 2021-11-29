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
_________________________________;

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
_________________________________;

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
_________________________________;

//Да или нет?

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";
let message = `Пользователь ${loginToFind} не найден.`;

console.log(logins.includes(loginToFind));
//true

_________________________________;

//тернарный оператор
const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;
console.log(message);
_________________________________;

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
_________________________________;

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
_________________________________;

// Задача 4 Сшить элементы в одну строку

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (const friend of friends) {
  string += friend + ",";
}
string = string.slice(0, string.length - 1);
console.log(string);

//Mango,Poly,Kiwi,Ajax
_________________________________;

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
const string = friends.join(",");
console.log(string);

//Mango,Poly,Kiwi,Ajax
_________________________________;

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
_________________________________;

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
_________________________________;
