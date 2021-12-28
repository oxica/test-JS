//Генератор случайных чисел

const max = 80;
const min = 10;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);
