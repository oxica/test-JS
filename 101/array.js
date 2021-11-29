const logins = ['m4ngojhgb', 'kiwijkhgjgh', 'polykjgjhgb', 'aj4xkhjbjhg'];
const loginToFind = "polykjgjhgb";
let message = '';

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    if (login === loginToFind) {
        message = `Пользователь ${loginToFind} найден.`;
        break;
    }
        message = `Пользователь ${loginToFind} не найден.`;
}
console.log(message);
_________________________________

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
_________________________________

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
_________________________________

//Да или нет?

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";
let message = `Пользователь ${loginToFind} не найден.`;

console.log(logins.includes(loginToFind));
//true

_________________________________

//тернарный оператор
const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const loginToFind = "polykjgjhgb";

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
console.log(message);