/*task #1*/
let one = 0.1;
let two = 0.2;
let end = (one + two).toFixed(1);
console.log(end);

/*task #2*/
let taskTwo = parseInt('1') + 2;
console.log(taskTwo);

/*task #3 */
let sizeFlashGb = 32;
let programMB = 820;
let sizeFlashMb = sizeFlashGb * 1024;
let result = Math.floor(sizeFlashMb / programMB);

/*task#4 */
let wallet = parseFloat(prompt('Сколько денег у Вас в кошельку?'));
let priceChokolade = parseFloat(prompt('Сколько стоит шоколадка?'));
let numChokolade = Math.floor(wallet / priceChokolade);
let remainder = wallet - priceChokolade * numChokolade;
alert(
  `Вы можете купить ${numChokolade} шоколадок и у вас останется ${remainder} денег в кошельке.`
);