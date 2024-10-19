// // HighOrder Fn Intro - Map | Filter | Arrow Function
// function addsum(a, b) {
//   return a + b;
// }
// const ans = addsum(5, 3);
// console.log(ans);
// // arrow fucntion
// const addsumTwo = (a, b) => {
//   return a + b;
// };

// console.log(addsumTwo(5, 2));

// // highordertake callfach

// const sub = function (b, c) {
//   return b - c;
// };

// console.log(sub(6, 2));

// // Map Function

// const num = [1, 2, 3, 4, 5];

// // empty array
// const newNum = [];

// num.map(function (n) {
//   newNum.push(n * 2);
// });

// // Altenative way using call backj
// num.map((x) => {
//   newNum.push(x * 3);
// });
// // previous array
// console.log(num);

// //updates array
// console.log(newNum);

// console.log(newNum);

// filter method

const names = ['Tejas', 'Thomas', 'Terrance', 'John', 'Teddy', 'Michael'];

const filteredNames = names.filter(name => name.startsWith('Te'));

console.log(filteredNames);
