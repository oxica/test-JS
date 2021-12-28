//Написать скрипт, который в массиве чисел может найти число (его индекс),
//которое окружено нулями с двух сторон

const numbers = [1, 2, 5, 0, 8, 0, 4, 3];
const firstNumber = numbers.indexOf(0);
const secondNumber = numbers.indexOf(0, firstNumber + 1);
let showIndex;
if (secondNumber - firstNumber === 2) {
    console.log(firstNumber + 1);
} else { console.log(-1); }



// const firstNumber = numbers.indexOf(0);
// const secondNumber = numbers.indexOf(0, firstNumber + 1);

// function showIndex(numbers) {
//     for (let i = [0]; i < numbers.length; i++){
        
//     }
// }
// showIndex([1, 2, 5, 0, 8, 0, 4, 3]);