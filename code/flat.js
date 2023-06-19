// const arr = [[1, 2, 3], [4], [5]];
// const newArr = arr.flat();
// console.log(newArr);

// const arr2 = arr.reduce((acc, cur) => {
//   return acc.concat(cur);
// }, []);
// console.log(arr2);

// const arr5 = [1, 2, 3, 4];
// const newarr5 = arr5.map((x) => [x * 2]).flat();
// console.log(newarr5);

// const flatMap = arr5.flatMap((x) => [x, x * 2]);
// console.log(flatMap);

// const reduced = arr5.reduce((acc, crr) => {
//   return acc.concat(crr * 2);
// }, []);
// console.log(reduced);

// const names = [
//   "java",
//   "java",
//   "java",
//   "pythone",
//   "javascript",
//   "javascript",
//   "c++",
// ];
// const result1 = myReduce(
//   names,
//   (acc, cur) => {
//     if (acc[cur]) {
//       acc[cur]++;
//     } else {
//       acc[cur] = 1;
//     }
//     return acc;
//   },
//   {}
// );
// console.log(result1);

// //create function
// function myReduce(arr, cb, init) {
//   let acc = init;
//   start = 0;
//   if (!init) {
//     acc = arr[0];
//     start = 1;
//   }
//   for (let i = start; i < arr.length; i++) {
//     acc = cb(acc, arr[i], i, arr);
//   }
//   return acc;
// }

//reduced right
const numbers = [1, 2, 3, 4, 5];
const totalNumbers = numbers.reduceRight((acc, cur) => {
  console.log(`acc [${acc}] - cur [${cur}]`);
  return acc + cur;
}, 0);
console.log(`totalNumbers=${totalNumbers}`);
