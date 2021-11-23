"use strict";
__________________________________________;

let elementWidth = "50px";
const result = Number.parseInt(elementWidth);
console.log(result);
//50
console.log(typeof result);
//number
__________________________________________;

let elementHeight = "200.74px";
const result = Number.parseFloat(elementHeight);
console.log(result);
//200.74
console.log(typeof result);
//number
__________________________________________;

let salary = 1300.16472;
salary = salary.toFixed(2);
salary = Number(salary);
console.log(salary);
//1300.16
__________________________________________;

console.log(Math.PI);
//3.141592653589793
__________________________________________;

console.log(Math.sqrt(16));
//4
__________________________________________;

const base = 2;
const power = 3;
const result = Math.pow(base, power);
console.log(result);
//8
__________________________________________;

console.log(Math.pow(2, 3));
//8
__________________________________________;

console.log(2 ** 3);
//8
__________________________________________;
console.log(Math.floor(1.7));
//1
__________________________________________;

console.log(Math.ceil(1.2));
//2
__________________________________________;

console.log(Math.max(20, 10, 50, 30));
//50
__________________________________________;

console.log(Math.min(20, 10, 50, 30));
//10
__________________________________________;

console.log(Math.round(1.5));
//2
__________________________________________;

console.log(Math.random());
//0.22184224427423782;
//Случайное число от 0 до 1
__________________________________________;

console.log(Math.random() * (10 - 1) + 1);
//9.916769420212436
Math.random() * (max - min) + min;
__________________________________________;

//Округлить рандомное число
const max = 50;
const min = 30;
const result = Math.random() * (max - min) + min;
console.log(Math.round(result));

//46
__________________________________________

console.log(0.1 + 0.2 === 0.3);
//false

console.log(0.1 + 0.2);
//0.30000000000000004

//Способ #1
console.log((0.1 * 100 + 0.2 * 100) / 100);
//0.3

//Способ #2
console.log((0.1 + 0.2).toFixed(1));
//0.3
__________________________________________;

//ПРОВЕРКА НА ЧИСЛО
const validNumber = Number("51");
console.log(Number.isNaN(validNumber));
//false

const invalidNumber = Number("abc");
console.log(Number.isNaN(invalidNumber));
//true
__________________________________________;
