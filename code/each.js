// var numbers = [5, 10, 6, 4];

// numbers.forEach(function (x, index, arr) {
//   arr[index] = x * 10;
// });
// console.log(numbers);

// const names = ["sakib", "rakib", "rasel", "rakib"];
// function forEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// }

// forEach(names, (value, index) => {
//   console.log(`${index + 1}:${value}`);
// });
// names.forEach((value, index) => {
//   console.log(`${index + 1}:${value}`);
// });

// function reuse(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     logic(i);
//   }
// }

// function logic(index) {
//   console.log(index, "i am logic");
// }
// reuse(["one", "two", "thare"]);

// use map method
const numbers = [2, 4, 6, 7, 8, 9];
var result = numbers.map((total) => {
  return 2 / total;
});
console.log(result);


