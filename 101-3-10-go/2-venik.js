const user1 = 'John';
const user2 = 'Alex';

const users = ['John', 'Alex'];
// Еще один способ объявления массива
const newArray = new Array(['John', 'Alex']);
console.log(users[1], '--- второй элемент массива');
users[2] = 'Lesli';
users[1] = 'Foo'; // можно перезаписывать элементы массива
users[10] = 'Kiwi'; // делает длину массива равнай 11 и элементы между 3 и 9 undefined

const usersLength = users.length;

console.log(users, '--- users');
console.log(`Длина массива: ${usersLength}`);
console.log(`Последний элемент массива: ${users[usersLength - 1]}`);

//_____________________________

const cars = ["audi", "bmw", "ford", "fiat"];
let result = "";

/** Цикл for */
// вывесьти только четные элементы в строку
for (let i = 0; i < cars.length; i += 2) {
  result += ` ${cars[i]}`;
}

console.log(`Результат суммы четных: ${result.trim()}`);

/** Цикл for of */
let allCars = "";
for (const car of cars) {
  allCars += ` ${car}`;
}

console.log(`Все машины: ${allCars.trim()}`);

/** Найти индекс элемента */
let carIndex;

for (let i = 0; i < cars.length; i += 1) {
  if (cars[i] === "bmw") {
    carIndex = i;
    break;
  }
}

console.log(`БМВ находится под индексом: ${carIndex}`);

/** Если ауди или бмв сказать, что отличные маштны */
const niceCars = ["audi", "bmw", "toyota"];

for (const car of cars) {
  if (niceCars.includes(car)) {
    console.log(`Отличная машина: ${car}`);
    continue;
  }

  console.log(`Выбраная машина ничего так: ${car}`);
}

/** Присвоение по ссылке и по значению */
const a = 10;
let b = a;
b = 5;

console.log(a, b);

const foo = [1, 2, 3];
const baz = [1, 2, 3];
const bar = foo;
bar[0] = 15;

console.log(foo, bar);
// Здесь вернет true так как сравниваются по ссылке
console.log(foo === bar, "равны ли массивы foo & bar");
// Здесь вернет false так как ссылки разные
console.log(foo === baz, "равны ли массивы foo & baz");

//______________________________

const words = ["JavaScript", "это", "интересно"];
console.log(words.join("😈")); // "JavaScript-это-интересно"

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
if (clients.indexOf("Monkong") === -1) {
  console.log("Monkong не найден");
}

if (!clients.includes("Monkong")) {
  console.log("Monkong не найден");
}

/** Заставить пользователя создать массив машин */
let cars = [];

// while (true) {
//   const car = prompt('Введите имя машины');

//   if (!car) break;

//   cars.push(car);
//   console.log(cars);
// }

const lastCar = cars.pop();
console.log(`Последний автомобиль ${lastCar}`);
console.log(cars, "Массив после метода pop");

/** Забрать все элементы кроме первого и последнего */
{
  const fruits = ["kiwi", "banana", "apple", "ananas", "cucumber"];

  const fruitsWithoutEdgeElements = fruits.slice(1, fruits.length - 1);
  console.log(fruits, "исходные фрукты после slice");
  console.log(fruitsWithoutEdgeElements, "фрукты без крайних элементов");

  const fruitsSplice = fruits.splice(1, 3, "audi");
  console.log(fruitsSplice, "splice fruits");
  console.log(fruits, "исходные фрукты после splice");
}

/** объеденить массивы в товары */
{
  const fruits = ["kiwi", "banana", "apple", "ananas"];
  const vegetables = ["cabbage", "tomato", "cucumber"];

  const meals = fruits.concat(vegetables);
  // использования spread оператора
  // const meals1 = [...fruits, ...vegetables];
  console.log(`Все товары: ${meals}`);
}