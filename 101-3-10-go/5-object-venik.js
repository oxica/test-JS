
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

const employee1 = {
  id: 1,
  name: "Hom",
  salary: 2000,
  bonus: 100,
};

const employee2 = {
  id: 2,
  name: "John",
  salary: 4000,
};

const employee3 = {
  id: 3,
  name: "John",
  salary: 4000,
};

const company = {
  employees: [],
  budget: 60000,
  income: 0,

  addEmployee: function (employee) {
    this.employees.push(employee);
  },

  deleteEmployee(id) {
    const newEmployeesList = [];

    // Более длинная запись
    // for (const employee of this.employees) {
    //   if (employee.id === id) {
    //     continue;
    //   }

    //   newEmployeesList.push(employee);
    // }

    for (const employee of this.employees) {
      if (employee.id !== id) {
        newEmployeesList.push(employee);
      }
    }

    this.employees = newEmployeesList;
  },

  // сокращенная запись метода объекта
  calculateEmployeesSalary() {
    let sum = 0;

    for (const employee of this.employees) {
      const bonus = employee.bonus ?? 0;
      sum += employee.salary + bonus;
    }

    return sum;
  },

  calculateCompanyIncome() {
    const employeesSalary = this.calculateEmployeesSalary();

    this.income = this.budget - employeesSalary;
  },
};

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);

company.deleteEmployee(2);

// console.log(company.calculateEmployeesSalary());
console.log(company.calculateCompanyIncome());
console.log(company);

const friends = [
  { name: "Sergey" },
  { name: "Andrey" },
  { name: "Ruslan" },
  { name: "Evgenii" },
];

//_____________________________

// Вернуть последний элемент массива
const apartment = {
  tags: ['premium', 'promoted', 'top'],
};
const lastTag = apartment.tags[apartment.tags.length - 1];

const user = {
  name: 'Too',
  age: 10,
};

// console.log(user.name);
// console.log(user['name']);

// Метод hasOwnProperty

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';
dog.legs = 15;

// console.log(dog === animal);
// console.log(animal);
// console.log(dog);
// console.log(animal.legs);

// Разница работы функций

// function includes(array, value) {
//   for (const element of array) {
//     return element === value;
//   }
// }

// function includes(array, value) {
//   for (element of array) {
//     if (element === value) {
//       return true;
//     }
//   }

//   return false;
// }

const userProperty = 'name';

{
  const user = {
    name: 'Jacques Gluke',
    tag: 'gluke',
    location: {
      country: {
        a: 1,
        b: 1,
      },
      city: 'Ocho Rios',
    },
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const getUserPropertyByName = function (obj, propertyName) {
    // console.log(obj.propertyName);
    return `Property "${propertyName}": ${obj[propertyName]}`;
  };

  // console.log(user.location.country.b);
  // console.log(user['location']['country']['b']);

  user.name = 'Tom Tom';
  // console.log(getUserPropertyByName(user, 'tag'));
  // console.log(getUserPropertyByName(user, 'name'));
}

// написать функцию создания юзера
{
  const createUser = function (name, age) {
    // полная версия записи
    // {
    //   name: name,
    //   age: age,
    // }
    const salary = 1000;

    // сокращенная запись объекта
    return {
      name,
      age,
      salary,
    };
  };

  const user = createUser('John', 25);
  // console.log(user);
}

// Написать функцию которая добавляет свойства к объекту

{
  const user = {
    name: 'John',
    age: 30,
  };

  const addProps = function (obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };

    // добавление нового свойства без использования вычисляемых свойств
    // objCopy[key] = value;
  };

  const superUser = addProps(user, 'salary', 3000);

  // console.log(superUser);
  // console.log(user === superUser);

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

  // console.log(cats);
}

/**
 *
 * Задача на собеседовании
 * Что отобразится в консоле?
 *
 * */
{
  const obj = {
    name: 'Name',
    showName() {
      console.log(this.name);
    },
  };

  const showName = obj.showName;
  // const showName = function() {
  //   console.log(this.name);
  // };
  console.log(showName);

  // showName();
}

// разбить все имена на буквы
const getAllFrends = function (allFriends) {
  const result = [];
  for (const friend of allFriends) {
    const letters = friend.name.split('');

    for (const letter of letters) {
      result.push(letter);
    }
  }
  return result;
};
console.log(getAllFrends(friends).join('-'));

//______________________________

const a = {
  22: "dasdas",
};

const foo = {};

const bar = {
  a: 1,
  b: 2,
};

const arr = [1, 2, 3];

// Показывать ключ обэекта или индекс элемента в массиве
const showEveryItem = function (entity) {
  for (let item in entity) {
    console.log(`key: ${item}`);
    console.log(`Value: ${entity[item]}`);
  }
};

console.log(Object.entries(bar));
console.log("-------------");
showEveryItem(bar);
console.log("-------------");
showEveryItem(arr);