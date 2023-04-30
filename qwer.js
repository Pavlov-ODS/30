/* const usersAges = { Randi: 4, Godfrey: 39, Lelia: 45, Jacey: 74, Keira: 30 };


for (const item in userAges) {
  console.log(item, usersAges[item]);
}
 */
/* 
const someString = "Hello World";
for (const item of someString) {
  console.log(item);
}

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (const item of numbersList) {
  sum = sum + item;
}
console.log(item);
 */

// const email = "someEmail@gmail.com";
// const adminEmail = "admin@gmail.com";

// if (email === adminEmail) {
//   console.log("Привет!");
// } else {
//   console.log("Пока!");

// ""
// const email = "someEmail@gmail.com";
// const adminEmail = "admin@gmail.com";
//   adminEmail === email
//     ? console.log("Привет");
//     : console.log("Пока");

  
Excellent, Good, Satisfactory, Unsatisfactory, Failed, Invalid grade.

if ( mark === '') {
  console.log('Failed');
} else if ( mark === 2){
  console.log('Unsatisfactory');
} else if ( mark === 3){
  console.log('Satisfactory');
} else if ( mark === 4){
  console.log('Good');
} else if ( mark === 5){
  console.log('Exellent');
} else {
  console.log(' Invalid grade!!!');
};


const rating = 5;
switch (rating) {
  case 5:
    console.log(`ratting = ${rating} Excellent` );
    break;
  case 4:
    console.log(`ratting = ${rating} Good` );
    break;  break;
  case 3:
    console.log(`ratting = ${rating} Satisfactory` );
    break;
  case 2:
    console.log(`ratting = ${rating} Unsatisfactory` );
    break;
  case 1:
    console.log(`ratting = ${rating} Failed` );
    break;
  default:
    console.log('Invalid grade');
    break;
}