
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
