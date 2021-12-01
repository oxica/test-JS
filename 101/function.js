const add = function (x, y) {
    console.log(x);
    console.log(y);

    return x + y;
}
const result1 = add(5, 3);
console.log(result1);

console.log(add(10, 3)); //альтернативный вариант без добавления переменной результата

const result2 = add(20, 3);
console.log(result2);

//____________________________________

const fn = function () {
    console.log(1);
    console.log(2);
    console.log(3);
}
console.log(fn());

//____________________________________

const fn = function (value) {
  console.log(1);
    console.log(2);
    
    if (value < 50) {
        return "Меньше чем 50";
    }
    return "Больше чем 50";
    
};
console.log('Результат функции: ', fn(10));
console.log("Результат функции: ", fn(1000));

//____________________________________

//Задача 01 Напиши функцию которая принимает массив цен (чисел) и возращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 98];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log(total);

//________________________________________

const calculateTotalPrice = function (items) {
    console.log(items);
    let total = 0;

    for (const item of items) {
      total += item;
    }
    return total;
}

console.log(calculateTotalPrice([1, 2, 3])); //6
console.log(calculateTotalPrice([5, 10, 15, 20])); //50
console.log(calculateTotalPrice([100, 200, 300])); //600

//___________________________________

//Задача 02 Напиши функцию для перебора и логирования массива

const logItem = function (items) {
    for (const item of items) {
        console.log(item);
    }
}
logItem(["Mango", "Poly", "Kiwi", "Ajax"]);
logItem([1, 2, 3, 4, 5]);
logItem(["клавиатура", "наушники", "часы"]);

//____________________________________

// Задача 1 поиск логина

const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const findLogin = function (allLogins, loginToFind) {
    console.log(allLogins);
    console.log(loginToFind);

    let message = `Пользователь ${loginToFind} не найден.`;

    for (const login of allLogins) {
      if (login === loginToFind) {
        message = `Пользователь ${loginToFind} найден.`;
       }
    }
    return message;
}
console.log(findLogin(logins, 'jakjvnhdf'));
console.log(findLogin(logins, "kiwijkhgjgh"));
console.log(findLogin(logins, "m4ngojhgb"));
console.log(findLogin(logins, "aj4xkhjbjh"));

//___________________________________

// 2 вариант
const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const findLogin = function (allLogins, loginToFind) {
  console.log(allLogins);
  console.log(loginToFind);
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind} найден.`;
    }
  }
   return `Пользователь ${loginToFind} не найден.`;
}
console.log(findLogin(logins, "jakjvnhdf"));
console.log(findLogin(logins, "kiwijkhgjgh"));
console.log(findLogin(logins, "m4ngojhgb"));
console.log(findLogin(logins, "aj4xkhjbjh"));

//__________________________________

//3 вариант
const logins = ["m4ngojhgb", "kiwijkhgjgh", "polykjgjhgb", "aj4xkhjbjhg"];
const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;
}

console.log(findLogin(logins, "jakjvnhdf"));
console.log(findLogin(logins, "kiwijkhgjgh"));
console.log(findLogin(logins, "m4ngojhgb"));
console.log(findLogin(logins, "aj4xkhjbjh"));

//___________________________________

//Задача 2 найти самое маленькое число

const findSmallerNumber = function (numbers) {
    let smallestNumber = numbers[0];
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

console.log(findSmallerNumber([3, 8, 12, -2, 15]));
console.log(findSmallerNumber([51, 18, 13, 24, 7, 85, 19]));
console.log(findSmallerNumber([7, 21, 84, 15, 4]));
