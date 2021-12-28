//Напиши скрипт выбора стоимости отеля по количеству звезд
const stars = 1;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 50;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log("Такого количества звезд нет!");
}
console.log(price);

//---2 вариант switch---------

const stars = 1;
let price;

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log("Такого количества звезд нет!");
}
console.log(price);

//__________________________________

switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;

  case 3:
  case 4:
    price = 30;
    break;

  case 5:
    price = 120;
    break;
  default:
    console.log("Такого количества звезд нет!");
}
console.log(price);

//__________________

const option = 1;
let message = "";

switch (option) {
  case 1:
    message = "Вы можете забрать товар завтра с 12:00 в нашем магазине";
    break;

  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;

  case 2:
    message = "Посылка будет отправлена сегодня";
    break;
  default:
    message = "Вам перезвонит менеджер";
}
console.log(message);

//_______________________

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}
console.log("Закончился цикл и вывелась эта строка");

//0
//1
//2
//3
//4
// Закончился цикл и вывелась эта строка

//_______________________

for (let i = 5; i >= 0; i -= 1) {
  console.log(i);
}
console.log("Закончился цикл и вывелась эта строка");

//5
//4
//3
//2
//1
//0
// Закончился цикл и вывелась эта строка

//_______________________

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}
console.log("Закончился цикл и вывелась эта строка");

//10
//8
//6
//4
//2
//0
// Закончился цикл и вывелась эта строка

//_______________________
//Напиши скрипт, который подсчитывает общую сумму сгенерированных случайным образом зарплат сотрудников

const employees = 4;
let totalSalary = 0;
const minSalary = 500;
const maxSalary = 5000;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  totalSalary += salary;
  console.log(`Зарплата работника номер ${i} - ${salary}`);
}
console.log("totalSalary:", totalSalary);

//__________________________
//Написать скрипт, который подсчитывает сумму всех четных чисел,
//которые входят в диапазон чисел в переменных от min до max

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log("Не четное:", i);
    continue;
  }
  console.log("Четное:", i);
  total += i;
}
console.log("total:", total);

//_____________________________
//Напиши скрипт подсчёта суммы покупки со скидкой в зависимости от
//потраченной суммы за всё время(партнерская программа)

let totalSpent = 5000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log("Брынзовый партнер, скидка 2%");
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log("Серебряный партнер, скидка 5%");
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log("Золотой партнер, скидка 10%");
  discount = 0.1;
} else {
  console.log("Не партнер, скидка 0%");
}
payment = payment - payment * discount;
console.log(`Оформлен заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;

console.log(`Общая сумма потреченная в магазине: ${totalSpent}`);