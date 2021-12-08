
//мутирует наш объект, делая изменения в нем
const user = {
  name: 'John',
  age: 30,
};

const addProps = function (obj, key, value) {
  obj[key] = value;

  return obj;
}

const superUser = addProps(user, 'salary', 3000);
console.log(superUser);
console.log(user === superUser);

//{name: 'John', age: 30, salary: 3000}
//true

//___________________________________
//используем rest оператор, чтобы сделать копию объекта с необходимыми изменениями, не изменяя изначальный объект
//лучший способ, так как изменять изначальный объект - это плохо и неправильно!!!!!
const user = {
  name: "John",
  age: 30,
};

const addProps = function (obj, key, value) {
  const objCopy = {
    ...obj,
  }
  objCopy[key] = value;

  return objCopy;
};

const superUser = addProps(user, "salary", 3000);
console.log(superUser);
console.log(user === superUser);

//{name: 'John', age: 30, salary: 3000}
// false

//_____________________________________
//с использованием вычисляемых свойств

const user = {
  name: "John",
  age: 30,
};

const addProps = function (obj, key, value) {
  const objCopy = {
    ...obj, //спред оператор копирует свойства из нашего объекта юзер
    [key]: value, //передаем по функции из аргументов новые свойства, а ключ неизвестен (какой ключ мы хотим добавить)
  }
  
  return objCopy;
};

const superUser = addProps(user, "salary", 3000);
console.log(superUser);
console.log(user === superUser);

//{name: 'John', age: 30, salary: 3000}
// false

//_________________________________
//с использованием вычисляемых свойств - сокращенная запись без использования переменной

const user = {
  name: "John",
  age: 30,
};

const addProps = function (obj, key, value) {
   return {
     ...obj, //спред оператор копирует свойства из нашего объекта юзер
     [key]: value, //передаем по функции из аргументов новые свойства, а ключ неизвестен (какой ключ мы хотим добавить? key)
   };  
};

const superUser = addProps(user, "salary", 3000);
console.log(superUser);
console.log(user === superUser);

//{name: 'John', age: 30, salary: 3000}
// false
//___________________________________

const cat1 = 'Mouse';
  const cat2 = 'Lion';

  const cats = {
    cat1: {
      legs: 4,
    },
    [cat1]: {
      legs: 4,
    },
    [cat2]: {
      legs: 5,
    },
  };

  console.log(cats);

  //___________________________________
