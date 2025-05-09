// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// styles[1] = 'classic';

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i + 1, array[i]);
//   }
// }

// logItems(styles);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const username = prompt('Username');
//   if (array.includes(username)) {
//     alert(`Welcome, ${username}!`);
//   } else alert('User not found');
// }

// checkLogin(logins);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// function caclculateAverage(...rest) {
//   let total = 0;
//   let count = 0;
//   for (const number of rest) {
//     if (typeof number === 'number') {
//       total += number;
//       count++;
//     }
//   }
//   return total / count;
// }

// console.log(caclculateAverage(14, 16, 2, 6, 32, 8, 'a', 'b'));

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function addNumbers(array) {
//   let total = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     total.push(array[i] + array[i + 1]);
//   }
//   return total;
// }

// console.log(addNumbers(someArr));

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   } else {
//     return 'Sorry, it is not an array!';
//   }
// }

// console.log(findSmallestNumber(numbers));

/* ========================================================================================================================================================

======================================================================================================================================================== */

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longest = '';
//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);

// for (const item of keys) {
//   console.log(`${item}:${user[item]}`);
// }

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);
/* ========================================================================================================================================================

======================================================================================================================================================== */

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return 'No such propeties';
//   },
//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return 'No such propeties';
//   },
//   exist() {
//     return this.a && this.b ? true : false;
//   },
// };

// calculator.read(2, 5);
// console.log(calculator.sum());
// console.log(calculator.mult());

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let total = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       total += fruit.price * fruit.quantity;
//     }
//   }
//   return total;
// }

// console.log(calcTotalPrice(fruits, 'Банан'));
