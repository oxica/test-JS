1
// Change code below this line
const productName = "Droid";
// console.log(productName);
// 'Droid'
const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

2
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
pricePerItem = 3500;

3
// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

4
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

5
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

6
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

7
// Change code below this line
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi()

8
// Change code below this line
function add(a,b,c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
  
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

9
function add(a, b, c) {
  // Change code below this line
return a + b + c;


  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

10
function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};

12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}

13
function isAdult(age) {
  // Change code below this line
  const passed = (age >= 18);

  // Change code above this line
  return passed;
}

14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = (password === 'jqueryismyjam');

  // Change code above this line
  return isMatch;
}

15
function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

16*
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered > available) {
  message = 'Not enough goods in stock!';
} else {
  message = 'Order is processed, our manager will contact you.';
}
  // Change code above this line
  return message;
}

17
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  }
  // Change code above this line
  return message;
}

19
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === 'jqueryismyjam') { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

20
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0) {
message = 'There are no products in the order!';
} else if (ordered > available) {
message = 'Your order is too large, there are not enough items in stock!';
} else {
message = 'The order is accepted, our manager will contact you';
}
  // Change code above this line
  return message;
}

21
function isNumberInRange(start, end, number) {
  const isInRange = (number >= start && number <= end);// Change this line

  return isInRange;
}

22**
function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType == "pro" || subType == "vip"); 
  
  // Change this line

  return canAccessContent;
}

23
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {
	discount = 0.1;
} else if (totalSpent >= 20000 && totalSpent < 50000) {
	discount = 0.05;
} else if (totalSpent >= 5000 && totalSpent < 20000) {
	discount = 0.02;
} else {discount = 0;
}
  // Change code above this line
  return discount;
}

25****
function checkStorage(available, ordered) {
let message = ordered >= available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
 

  // Change code above this line
  return message;
}

25 - правильно
function checkStorage(available, ordered) {
let message;
message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
 

  // Change code above this line
  return message;
}

26
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password == "jqueryismyjam" ? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

27***
function getSubscriptionPrice(type) {
  let price;
  
  // Change code below this line

 switch (type) { 
    case "starter": 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
  }

 
  return price;
}

28
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
switch (password) {
  case null:
    message = "Canceled by user!";
    break;

  case ADMIN_PASSWORD:
    message = "Welcome!";
    break;

  default:
    message = "Access denied, wrong password!";
}

  // Change code above this line
  return message;
}

29**
function getShippingCost(country) {
  let message;
  // Change code below this line
switch (country) {
  case 'China':
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  case 'Chile':
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
    case 'Australia':
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  case 'Jamaica':
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  default:
    message = "Sorry, there is no delivery to your country";
}

  // Change code above this line
  return message;
}

30
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

31
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

32**разобраться!
function getSubstring(string, length) {
  const substring = string.slice(string, length); // Change this line

  return substring;
}

33****** разобраться!!!!!!!!!!!
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
 
  if (message.length <= maxLength) {
  result = message;
  } else {
  result = message.slice(0, maxLength) + '...';}
  /// Change code above this line
  return result;
}

34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

35
function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

36******************************************!!!

function checkForSpam(message) {
  let result;
  // Change code below this line
const normalizedInput = message.toLowerCase();
  if (normalizedInput.includes('spam') || normalizedInput.includes('sale')) {
  return true;
  } else {
  return false;
  }
  // Change code above this line
  return result;
}