"user strict";
//Напиши скрипт, который просит пользователя ввести число и степень,
//возводит число в эту степень и выводит результат в консоль.

let base = prompt("Давай число");
base = Number(base);
console.log(base);

let power = prompt("Давай степень");
power = Number(power);
console.log(power);

const result = base ** power;
console.log(result);

//2
//2
//4
//__________________________________________

//Нормализация пользовательского ввода методом toLowerCase()

const brand = "Samsung";
const inDb = "samsung";
const normalizedBrand = brand.toLowerCase();

console.log(normalizedBrand);

//___________

let brand = prompt("Давай бренд");
brand = brand.toLowerCase();

console.log(brand);

//________________________________
//Нормализация всего, кроме первой буквы

let brand = "SamSung";
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);

//_______________________________

// Поиск в строке с методом includest()

const blacklistedWord1 = "спам";
const blacklistedWord2 = "распродажа";

const string1 = "Привет, это не спам!";
const string2 = "Большая РАСПРОДАЖА!";
const string3 = "Привет, я новость!";

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.toLowerCase().includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));

console.log(string3.toLowerCase().includes(blacklistedWord1));
console.log(string3.toLowerCase().includes(blacklistedWord2));

//_________________________________

//Напиши скрипт, который проверяет вхождение числа в отрезок обозначенный х1 и х2.
//до х1
//после х2
//от х1 до х2
//до х1 или после х2

/*
             x1             x2
-------------o--------------o----------

*/

const x1 = 10;
const x2 = 30;
const number = 50;

/*
---------- < x1             x2
-------------o--------------o----------

*/

console.log(number < x1); //false

/*
             x1             x2 > -----
-------------o--------------o----------

*/
console.log(number > x2); //true

/*
           < x1-------------x2 >
-------------o--------------o----------

*/
console.log(number > x1 && number < x2); //false

/*
-----------< x1             x2 > ------
-------------o--------------o----------

*/
console.log(number < x1 || number > x2); //true

//________________________
//Напишите скрипт, который проверяет возможность открыть чат с пользователем.
//для этого пользователь должен быть:
//-онлайн и другом и без режима не беспокоить

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

console.log(canOpenChat); //true

//________________________

let sub = "pro";
//sub = 'vip';
//sub = 'free';

const canAccessContent = sub === "pro" || sub === "vip";
console.log("Есть доступ к контенту?", canAccessContent);
//Есть доступ к контенту? true

//__________________________________

const salary = 1000;

if (salary <= 500) {
  console.log("Level 1");
} else if (salary > 500 && salary <= 1500) {
  console.log("Level 2");
} else if (salary > 1500 && salary <= 3000) {
  console.log("Level 3");
} else {
  console.log("Level 4");
}

//_________________________________
//Тернарный оператор

// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";

console.log(message);

//_____________________________


