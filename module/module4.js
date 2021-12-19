//1

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

//2

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

//3

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

//4**

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return onSuccess(pizzaName);
      }
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};

// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);


//5
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach(function (orderedItem) {
    totalPrice += orderedItem;
  });

  //for (let i = 0; i < orderedItems.length; i += 1) {
  //  totalPrice += orderedItems[i];
  // }

  // Change code above this line
  return totalPrice;
}

//6


function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
  numbers.forEach(function(number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  })

  //for (let i = 0; i < numbers.length; i += 1) {
    //if (numbers[i] > value) {
      //filteredNumbers.push(numbers[i]);
    //}
  //}

  // Change code above this line
  return filteredNumbers;
}

//filterArray([1, 2, 3, 4, 5], 3)


//7

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  
  firstArray.forEach(function(number) {
  if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  })
               
  return commonElements;
  // Change code above this line
}

//getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]


//8

const calculateTotalPrice = (quantity, pricePerItem) => { return quantity * pricePerItem;}


//calculateTotalPrice(5, 100)
//
500


//9

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//calculateTotalPrice(5, 100)
//500



//10


// Change code below this line

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line


//calculateTotalPrice([12, 85, 37, 4])
//138


//11

// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

//filterArray([1, 2, 3, 4, 5], 3)
//[4, 5]


//12

// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

//getCommonElements([1, 2, 3], [2, 1, 17, 19])
//[1, 2]


//13

function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    }else newArray.push(numbers[i])
  }return newArray;
  // Change code above this line
}

//changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]


//14
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);
//console.log(planetsLengths);
//[ 5, 4, 5, 7 ]


//15

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);
console.log(titles);


//16

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);

// (5) ['adventure', 'history', 'fiction', 'horror', 'mysticism']


//17

// Change code below this line
const getUserNames = users => {
  const userNames = users.map(user => user.name)
  return userNames;
  } 


//18

const getUserEmails = users => {
  const userEmails =   users.map(user => user.email)
  return userEmails;

  };


//19

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 === 1);

console.log(evenNumbers);
console.log(oddNumbers);


//20

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((book,index,array) => array.indexOf(book) === index);

//console.log(allGenres)

//console.log(uniqueGenres)
//(7) ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']
//(5) ['adventure', 'history', 'fiction', 'mysticism', 'horror'] это уникальные названия без повторений


//21

