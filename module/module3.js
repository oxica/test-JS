1

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};


2

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


3

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line


4

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line


5

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];


6

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push ("trusted");
// Change code below this line


7

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {country: "Jamaica", city: "Kingston"};

// Change code below this line


8

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price, 
  image,
  tags,
};


9

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",


  // Change code above this line
};


10

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
keys.push(key);
  values.push(apartment[key]);
  
}


11

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}


12**1

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  
  for (const key in object) {
	if (object.hasOwnProperty(key)) {
  	propCount += 1;
}continue;
}
  return propCount;
}


13

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}


14***?

неправильно почему-то:
function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

правильно:
function countProps(object) {
  let propCount = 0;
  const keys = Object.keys(object);
      propCount = keys.length;
  return propCount;
}


15

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


16

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const keys = Object.values(salaries);
  for (const key of keys){
  totalSalary += key;
  }
  // Change code above this line
  return totalSalary;
}


17* colors/color

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors){
  hexColors.push(color.hex);
  rgbColors.push(color.rgb)
}


18

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


function getProductPrice(productName) {
  // Change code below this line
for (const product of products) {

  
  if(productName === product.name) {
  return product.price;
  } continue
  

  // Change code above this line
}return null;
  }


19**********

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const allPropArr = [];
  
for (const product of products) {
  if(product[propName] === undefined){
    return allPropArr;
  };
  
  allPropArr.push(product[propName]);
};
  return allPropArr;
};


20*********

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


function calculateTotalPrice(productName) {
  let totalPrice = 0;
for (const product of products){
  if(productName === product.name) { 
totalPrice = product.price * product.quantity
    return totalPrice;
}
}return totalPrice;
  // Пиши код выше этой строки
}


21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, tomorrow, today } = highTemperatures;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


22

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


23**icon

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {
  yesterday: highYesterday, 
  today: highToday, 
  tomorrow: highTomorrow, 
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} =  highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


24***

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {today: { low:lowToday, high:highToday, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",},
tomorrow: {low:lowTomorrow, high: highTomorrow, icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}} = forecast;


26

// Change code below this line
function calculateMeanTemperature(forecast) {
  const {today:{low:todayLow, high:todayHigh}, tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;
  
  //const todayLow = forecast.today.low;
  //const todayHigh = forecast.today.high;
  //const tomorrowLow = forecast.tomorrow.low;
 // const tomorrowLow = forecast.tomorrow.high;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


27

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));


28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = (Math.max(...allScores));
const worstScore = (Math.min(...allScores));


29

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};


30

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
const newData = {completed, category, priority, ...data};
    return newData;
}


31

// Change code below this line
  
function add(...args) {
   let total = 0;
  for (const arg of args){
  total += arg;
  }return total;
  // Change code above this line
}


32

// Change code below this line
function addOverNum(firstNumber,...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
    total += arg;
  } continue;
  }

  return total;
  // Change code above this line
}


33***********

// Change code below this line
function findMatches(arr, ...args ) {
  const matches = []; // Don't change this line
for (const item of arr) {
if(args.includes(item)) {
matches.push(item)
}
}
  // Change code above this line
  return matches;
}


34

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
   removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};


35

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
const indexOldBookName = this.books.indexOf(oldName);
    
const deliteBook = this.books.splice(indexOldBookName, 1,  newName);


    // Change code above this line
  },
};


36

const atTheOldToad = {
  // Change code below this line
potions:[],


  // Change code above this line
};


37

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
getPotions(){
return this.potions},
  // Change code above this line
};


38

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line

this.potions.push(potionName);

    // Change code above this line
  },
};


39

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

    const indexDelitePotion = this.potions.indexOf(potionName);
    
const delitePotion = this.potions.splice(indexDelitePotion, 1);


    // Change code above this line
  },
};


40

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
const indexOldBookName = this.potions.indexOf(oldName);
    
const deliteBook = this.potions.splice(indexOldBookName, 1,  newName);

    // Change code above this line
  },
};
