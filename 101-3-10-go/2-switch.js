//Напиши скрипт выбора стоимости отеля по количеству звезд
const stars = 1;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 50;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log("Такого количества звезд нет!");
}
console.log(price);

//---2 вариант switch---------

const stars = 1;
let price;

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
        break;
    
    default:
        console.log("Такого количества звезд нет!");
}
console.log(price);

//__________________________________


