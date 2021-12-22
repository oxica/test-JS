//callback
//можно одну функцию кинуть в другую и там она под капотом вызовется

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

doMath(2, 3, function (x, y) {
  return x + y;
});

doMath(10, 8, function (x, y) {
  return x - y;
});

//_______________________________________

// Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

//_________________________________________

//Отложенный вызов

const callback = function () {
    console.log("Через 2 секунды внутри колбека в таймауте");
};
console.log("В коде перед таймаутом");

setTimeout(callback, 2000)

console.log("В коде после таймаута");

//______________________________________
//Замыкание
//Если одну функцию возвращаем из другой функции, 
//то при вызове возвращенной функции она получает доступ ко всем внутренним (локальным) переменным родительской.

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
  return makeDish;
}
const mango = makeSheff("Mango")
mango('котлеты');
mango('пирожок');

const poly = makeSheff("Poly");
poly('чай');
poly("омлет");


//_______________________________________
//Округлятор
//1 вариант округления
const floatPoint = 3.456789;
const someInt = Math.round(floatPoint); //3
const withDecimals = Number(floatPoint.toFixed(2)); //3.46

//2 вариант округления через функцию
const rounder = function(number, places) {
return Number(number.toFixed(places));
}
console.log(rounder(3.45678, 2)); //3.46

//3 вариант округления через замыкание

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.45678));
console.log(rounder3(5.45678));
console.log(rounder2(6.45678));
console.log(rounder3(7.45678));

//_____________________________________
//Приватные переменные
//
//
//




//_____________________________________

//Стрелочные функции. Нет доступа arguments, но можно достучаться через ...args (rest операцию)

const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(add(5, 10, 15));

//_______________________________________
//более лаконичный синтаксис стрелочных функций
//1
const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
}
console.log(add(5, 10, 15));

//явный возврат с одним параметром
const add = a => {
  console.log(a, b, c);
  return a + 5 + 10;
};
console.log(add(5));

//неявный возврат
const add = (a, b, c) => a + b + c;
console.log(add(5, 10, 15));