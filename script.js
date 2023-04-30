/*task #1*/
const one = 0.1;
const two = 0.2;
const end = (one + two).toFixed(1);
console.log(end);

/*task #2*/
const taskTwo = parseInt('1') + 2;
console.log(taskTwo);

/*task #3 */
const sizeFlashGb = 32;
const programMB = 820;
const sizeFlashMb = sizeFlashGb * 1024;
const result = Math.floor(sizeFlashMb / programMB);

/*task#4 */
const wallet = parseFloat(prompt('Сколько денег у Вас в кошельку?'));
const priceChokolade = parseFloat(prompt('Сколько стоит шоколадка?'));
const numChokolade = Math.floor(wallet / priceChokolade);
 remainder = wallet - (priceChokolade * numChokolade);
alert(
  `Вы можете купить ${numChokolade} шоколадок и у вас останется ${remainder} денег в кошельке.`
);