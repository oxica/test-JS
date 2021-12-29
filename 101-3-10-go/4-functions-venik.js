// найти самое длинное слово;
const findLongestWord = function (words) {
  let longestWord = "";
  const arrayOfWords = words.split(" ");
  console.log(arrayOfWords);

  for (const word of arrayOfWords) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

const testFindLongestWord = function (result, expectedValue) {
  if (result === expectedValue) {
    console.log("Hooorey");
    return;
  }

  console.error("ошибка");
};

const words1 = "kiwi banana tomato potato cucumber";
const words2 = "audi bmw";

testFindLongestWord(findLongestWord(words1), "cucumber");
testFindLongestWord(findLongestWord(words2), "audi");

/** Напиши функцию которая получает два массива произвольной длины в параметры
 *  array1 и array2,
 *  и возвращает новый массив, состоящий из тех элементов,
 *  которые присутствуют в обоих исходных массивах. */

const getCommonElements = function (arr1, arr2) {
  const result = [];

  for (const item of arr1) {
    const hasItem = arr2.includes(item);

    if (hasItem) {
      result.push(item);
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [10, 15, 22, 4, 222, 7];

console.log(getCommonElements(arr1, arr2));

/** Найти среднее значение элементов массива */

const getAvarageValue = function (arr) {
  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  return sum / arr.length;
};

console.log(getAvarageValue([1, 5, 2, 3, 4]), "---getAvarageValue");

/** Найти масимальное число */
const getMaxValue = function (arr) {
  if (!arr) {
    console.log("array is not valid");
    return;
  }

  let maxValue = arr[0];

  for (const item of arr) {
    if (typeof item === "string") {
      continue;
    }

    if (item > maxValue) {
      maxValue = item;
    }
  }

  return maxValue;
};

console.log(getMaxValue([22, 11, 2222, 111]), "---getMaxValue");
console.log(getMaxValue(), "---getMaxValue");


//______________________

const sum = function (a, b) {
  return a + b;
};

foo();

const printUserInput = function () {
  const input = prompt("Введите слово");
  console.log(input);
};

console.log(sum(10, 20));
// printUserInput();

const testSum = function (result, expectedValue) {
  if (result === expectedValue) {
    console.log("Тест пройден");
    return;
  }

  console.error("Тест не пройден");
};

testSum(sum(3, 5), 8);

function foo() {
  console.log("foo");
}

// -------
// arg - произвольное название переменной
{
  const fn = function (...arg) {
    const firstTwoElements = arg.slice(0, 2);
    const restPaparms = arg.slice(2);
    console.log(firstTwoElements);
  };

  fn(10, 20, 30, 40, 50);
}

// return undefined
{
  const fn = function (a, b) {
    const c = a + b;
  };

  console.log(fn(5, 10));
}

// значения по умолчанию
{
  const sum = function (a = 1, b) {
    return a + b;
  };

  console.log(sum(5, 10));
  console.log(sum(5));
  console.log(sum());
}

// arguments; найти сумму всех аргументов функции
{
  const sum = function () {
    let total = 0;
    const arrOfArguments = Array.from(arguments);

    for (let i = 0; i < arrOfArguments.length; i++) {
      total += arguments[i];
    }

    return total;
  };

  console.log(sum(1, 2, 34, 5, 67, 10), "---total");
}

// Получение массива аргументов при помощи rest оператора
// args - произвольное имя
{
  const foo = function (...args) {
    console.log(args);
  };

  foo(1, 2, 3, 4, 5);
}

// Имя аргументов не зависит от имени параметров
{
  const sum = function (val1, val2) {
    return val1 + val2;
  };

  const potato1 = 10;
  const potato2 = 15;
  sum(potato1, potato2);
}

// Пример с собеседования
{
  const c = 15;

  const bar = function () {
    console.log(c);
  };

  const foo = function () {
    const c = 25;
    bar();
  };

  foo();
}