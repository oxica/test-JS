// const foo = function () {
//   console.log(this);
// };

// const obj = {
//   log: foo,
// };

// console.log(obj.log === foo);
// obj.log();

{
  const foo = function (value, value1) {
    console.log(`${this.name}: ${value}; ${value1}`);
  };

  const bar = {
    name: 'Hello',
    logName: foo,
  };

  // bar.logName();
  // foo.call(bar, 5, 10);
  // foo.apply(bar, [5, 10]);
  // foo.call({ name: 'sdsd' }, 5, 10);
}

{
  const robot = {
    name: 'Robot',
    great() {
      console.log(`Hello i am ${this.name}`);
    },
  };

  const cat = {
    name: 'Cat',
    legs: 4,
    getLegsAmount() {
      return this.legs;
    },
  };

  robot.getCatsLegsAmount = cat.getLegsAmount.bind(cat);
  // console.log(robot);
  // console.log(robot.getCatsLegsAmount());

  // console.log(cat.getLegsAmount());
}

{
  const dog = {
    name: 'dog',
  };

  const cat = {
    name: 'cat',
  };

  const logName = function () {
    console.log(this.name);
  };

  const logDogName = logName.bind(dog);
  const logCatName = logName.bind(cat);
  // повторный bind не может перебить контекст
  const logCatName1 = logDogName.bind(cat);
  logDogName();
  logCatName();
  // контекст остается объект dog
  logCatName1();
}

//---------------------------------------

{
  // небольшая тафтология
  const user1 = {
    username: "Mango",
    userAge: 10,
  };

  // лучше писать имена свойств не привязываясь у миени объекта
  const user2 = {
    name: "Mango",
    age: 10,
  };
}

{
  const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  function makeMessage(callback) {
    // callback() это вызов метода getFullName без объекта
    console.log(`Обрабатываем заявку от ${callback()}.`);
  }

  const foo = function () {
    // this = customer;
    return `${this.firstName} ${this.lastName}`;
  };

  // Будет ошибка при вызове функции
  // makeMessage(customer.getFullName);
  // makeMessage(foo);

  // makeMessage(customer.getFullName.bind(customer));
  // makeMessage(foo.bind(customer));
  // console.log(window);
}

// лексическое окружение
{
  /*
  лексическое окружение которое не видно разработчику
  Env1 = {
    a: 5,
    b: 10,
  };
  */

  const a = 5;
  const b = 10;

  const foo = function () {
    /*
    Env2 = {
      a: 10,
      parentEnv: Env1
    };
    */

    const a = 10;
    console.log(a);
    console.log(b);
  };
}

{
  const a = 10;
  const logA = function () {
    /*
    Env1 = {
      parentEnv: Env1,
      this: undefined
    };
    */
    // console.log(a);
    // console.log('window: ', this);
    // console.log('window.a: ', this.a);
  };

  // this в стрелочной функции определяется на момент описания
  const foo = () => {
    /*
    Env1 = {
      parentEnv: Env1,
      this: window
    };
    */
    const a = 15;
    logA();
  };

  foo();
}

{
  const user = {
    name: "Tom",
    age: 22,
    logNameAfterOneSecond() {
      const callback = function () {
        console.log("this:", this);
        console.log("this.name:", this.name);
      };

      const arrowFunctionCallback = () => {
        console.log("this:", this);
        console.log("this.name:", this.name);
      };
      // callback();
      setTimeout(callback.bind(this), 1000);
      setTimeout(arrowFunctionCallback, 3000);
    },
  };

  // user.logNameAfterOneSecond();
}

{
  // Найти максимальное значение
  const arr = [22, 1, 2, -10, 5];

  const maxVal = Math.max(...arr);
  console.log(Math.max(22, 1, 200, 15));
  const maxValue = Math.max.apply({}, arr);
  console.log(maxValue);
}

{
  const user = {
    age: 22,
    say: () => {
      console.log(this.name);
    },
  };

  const foo = function () {
    console.log(this.age);
  };
  /*
    Так работать не будет
    foo.bind(user);
    foo();
  */
  const fooWithContext = foo.bind(user);
  fooWithContext();
}

console.log(window);