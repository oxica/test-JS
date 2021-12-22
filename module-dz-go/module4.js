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
  { title: "Redder Than Blood", author: "Tanith 

Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard 

Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => 

book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => 

book.author === AUTHOR);

//console.log(topRatedBooks)
//(3) [{…}, {…}, {…}]
//0: {title: 'The Last Kingdom', author: 

'Bernard Cornwell', rating: 8.38}
//1: {title: 'Beside Still Waters', author: 

'Robert Sheckley', rating: 8.51}

//console.log(booksByAuthor)
//2: {title: 'Enemy of God', author: 'Bernard 

Cornwell', rating: 8.67}
//(2) [{…}, {…}]
//0: {title: 'The Last Kingdom', author: 

'Bernard Cornwell', rating: 8.38}
//1: {title: 'Enemy of God', author: 'Bernard 

Cornwell', rating: 8.


//22

const getUsersWithEyeColor = (users, color) => {
 const eyeColor = users.filter(user => 

user.eyeColor === color);
  return eyeColor;
};


//23

const getUsersWithAge = (users, minAge, maxAge) 

=> {
 const usersAge = users.filter(user => user.age 

>= minAge && user.age <= maxAge);
return usersAge;
};


//24*includes

const getUsersWithFriend = (users, friendName) 

=> {
  const userFriends = users.filter(
    
    user => user.friends.includes(friendName));
  return userFriends;
};


//25

const getFriends = (users) => {
   const usersFriends = users.flatMap(user => 

user.friends);
  const uniqueFriends = usersFriends.filter

((friend, index,array) => array.indexOf(friend) 

=== index);
  return uniqueFriends;
};


//26

const getActiveUsers = (users) => {
  const activeUsers = users.filter(user => 

user.isActive === true);
  return activeUsers;
};


//27

const getInactiveUsers = (users) => {
   const inactiveUsers = users.filter(user => 

user.isActive === false);
  return inactiveUsers;
};


//28

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith 

Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous 

Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find((book) => 

book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => 

book.author === AUTHOR);


//29

const getUserWithEmail = (users, email) => {
  const userEmail = users.find((user) => 

user.email === email);
  return userEmail;
};


//30

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = 

firstArray.every((number) => number % 2 === 0);
const eachElementInFirstIsOdd = 

firstArray.every((number) => number % 2 === 1);

const eachElementInSecondIsEven = 

secondArray.every((number) => number % 2 === 0);
const eachElementInSecondIsOdd = 

secondArray.every((number) => number % 2 === 1);

const eachElementInThirdIsEven = 

thirdArray.every((number) => number % 2 === 0);
const eachElementInThirdIsOdd = 

thirdArray.every((number) => number % 2 === 1);


//31

const isEveryUserActive = (users) => {
  const userActive = users.every((user) => 

user.isActive === true);
  return userActive;
};


//32

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some

((number) => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some

((number) => number % 2 === 1);

const anyElementInSecondIsEven = 

secondArray.some((number) => number % 2 === 0);
const anyElementInSecondIsOdd = 

secondArray.some((number) => number % 2 === 1);

const anyElementInThirdIsEven = thirdArray.some

((number) => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some

((number) => number % 2 === 1);


//33

const isAnyUserActive = users => {
  const userActive = users.some((user) => user. 

isActive === true);
  return userActive;
};


//доп.задание reduce

const total = [2, 7, 3, 14, 6].reduce

((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32


//34

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // 

[1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((acc, 

playtime) => {return acc + playtime},0);

// Change code above this line
const averagePlayTime = totalPlayTime / 

playtimes.length;


//35

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 

4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 

},
  { name: "Ajax", playtime: 690, gamesPlayed: 3 

},
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 

},
];
// Change code below this line

const totalAveragePlaytimePerGame = 

players.reduce((total, player) =>{return total + 

player.playtime / player.gamesPlayed},0);


//36

const calculateTotalBalance = users => {
return users.reduce((total, user) => total + user.balance,0);

};


//37

const getTotalFriendCount = users => {
  return users.reduce((total, user) => total + user.friends.length,0) 
};


//38

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


//39

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const descendingReleaseDates = [...releaseDates].sort((a, b) => b-a);


//40

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));


//41

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

const sortedByAuthorName = [...books].sort((a, b)=> a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b)=> b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b)=>a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b)=>b.rating - a.rating);


//42

const sortByAscendingBalance = users => {
  return [...users].sort((a,b)=> a.balance - b.balance);
};


//43 - убывание

const sortByName = users => {
 return  [...users].sort((a,b)=> a.name.localeCompare(b.name) );
};


//44


const sortByDescendingFriendCount = users => {
  return [...users].sort((a,b)=> b.friends.length - a.friends.length); 
};


//45**

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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
.filter(book => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
.sort((a,b)=>a.localeCompare(b));
console.log (names);


//46**const names/return

const getNamesSortedByFriendCount = users => {
  const names = [...users]
  .sort((a,b)=> a.friends.length - b.friends.length)
    .map(user => user.name)
  ;return names;
};


//47

const getSortedFriends = users => {
   const sorted = users
   
   .flatMap(user => user.friends)
   .filter ((friend, index, array) => array.indexOf(friend) === index)
  .sort((a,b) => a.localeCompare(b))
  return sorted;
};


//48***

const getTotalBalanceByGender = (users, gender) => {
  return users
  .filter(user => user.gender === gender)
  .reduce((total, user) => {return total + user.balance},0);
  
};