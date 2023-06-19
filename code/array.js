// // var names = ["sakib", "rakib", "raju", "rasel"];
// // // console.log(names.length);
// // names[4] = "sakib";
// // names[20] = "munna";
// // names[names.length] = "babar azam";
// // console.log(names);
// // console.log(names.length);

// //factory &and constructor

// // var names = new Array(5)
// // names =[2,3,4,5,6,9,8,5,6,2,]
// // console.log(names.length);

// const arr1 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//  sum+=arr1[i]
// }
// console.log(sum ,arr1.length);

// const arr = [1, 2, 3, 4, 5,10];
// let largestNumber = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < largestNumber) {
//     largestNumber = arr[i];
//   }
// }
// console.log(largestNumber);

// let arr1 = new Array(5);
// arr1.fill("sakib");
// console.log(arr1);

// const arr2 = new Array(10);
// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] = "sakib";
// }
// console.log(arr2);

//mutuble array
// const a = 10;
// const b = 20;
// const sum = a + b;
// const sub = a - b;
// const times = a * b;
// const mod = a / b;
// const total = [sum, sub, times, mod];
// for (let i = 0; i < total.length; i++) {
//   const result = total[i]
//   console.log(`[${total[i].name}]result=${result}`);
// }

// const names = ["sakib", "tanvir", "rasel",];
// for (let i = 0; i < names.length; i++) {
//   names[i] = `${i + 1}.${names[i]}`;
// }

// console.log(names);

const pointable = [
  [7, 5],
  [4, 5],
  [10, 9],
];
for (let i = 0; i < pointable.length; i++) {
  for (let j = 0; j < pointable[i].length; j++) {
    console.log(`point [${i},${j}] = ${pointable[i][j]} `);
  }

  // console.log(`point ${i} - x =${pointable[i][0]} and y=${pointable[i][1]}`);
}

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
// for (let j = 0; j < numbers[0].length; j++) {
//   console.log(numbers[0][j]);
// }
// for (let i = 0; i < numbers.length; i++) {
// //   for (let j = 0; j < numbers[i].length; j++) {
// //     console.log(numbers[i][j]);
// //   }
// }

//matix
// const matrixA = [
//   [4, 1],
//   [5, 2],
//   [1, 2],
// ];
// const matrixB = [
//   [2, 4],
//   [1, 2],
//   [3, 1],
// ];
// const matrixSum = (matrixA, matrixB) => {
//   const result = [];
//   for (let i = 0; i < matrixA.length; i++) {
//     const row = [];
//     for (let j = 0; j < matrixA[i].length; j++) {
//       row.push(matrixA[i][j] + matrixB[i][j]);
//     }
//     result.push(row);
//   }
//   return result;
// };
// const matrixC = matrixSum(matrixA, matrixB);
// console.log(matrixC);

// const matrixA = [
//   [4, 4],
//   [2, 2],
// ];
// const matrixB = [
//   [4, 4],
//   [1, 1],
// ];
// const matrixC = [
//   [4, 4],
//   [6, 6],
// ];

// const matrixSum = (matrixA, matrixB, matrixC) => {
//   const result = [];
//   for (let i = 0; i < matrixA.length; i++) {
//     const row = [];
//     for (let j = 0; j < matrixA[i].length; j++) {
//       row.push(matrixA[i][j] + matrixB[i][j] + matrixC[i][j]);
//     }
//     result.push(row);
//   }
//   return result;
// };
// const matrixD = matrixSum(matrixA, matrixB, matrixC);
// console.log(matrixD);

//add elements
// arrp1 = [1, 2, 3, 4, 5];
// arrp2 = [10, 20, 1, 4];
// arrp3 = [140, 202, 102, 8520];

// arrp1.push(...arrp2);
// console.log(arrp1);
// arrp1.push(5200);
// console.log(arrp1);
// Array.prototype.push.apply(arrp1, arrp3);
// console.log(arrp1);
// arrp1.push(...arrp2);
// console.log(arrp1);

// //splice  use in array
// arrb1 = [1, 5, 3, 6];
// arrb2 = [1, 5, 3, 6];
// arrb1.splice(...arrb2);
// console.log(arrb1);

// //update array
// const names = [
//   { id: 1, name: "sakib" },
//   { id: 2, name: "raju" },
//   { id: 3, name: "rasel" },
//   { id: 4, name: "fohinni" },
// ];
// const givenId = 4;
// 5;
// const updateName = "yamin fohinni";
// ("hey");
// for (let i = 0; i < names.length; i++) {
//   if (givenId == names[i].id) {
//     names[i].name = updateName;
//     break;
//   }
// }
// console.log(names);

// // using delete arrray
// const s = [1, 2, 3, 4, 5];
// s.pop();
// console.log(s);
// s.shift();
// console.log(s);
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// b.splice(4, 3);
// console.log(b);
// b.length = b.length - 1;
// console.log(b);

// const d = [10, 11, 12, 1, 41, 51, 7, 1];
// const toBeDeleted1 = 11;
// for (let i = 0; i < d.length; i++) {
//   if (d[i] == toBeDeleted1) {
//     d.splice(i, 3);
//   }
// }
// console.log(d);

// largestNumber = [10, 1, 2, 3];
// const toBeDeleted2 = 10;
// largestNumber = largestNumber.filter((item) => item !== toBeDeleted2);
// // console.log(largestNumber);

// const e = [10, 2, 5, 8, 9, 6];
// e[10] = undefined;
// console.log(e);

// const x = [1, 2, 3, 4, 5, 6];
// const y = [2, 3, 4, 5, 67, 7];
// // const z = [...x, ...y];
// // console.log(z);
// const z = x.concat(y);
// console.log(z);

// const l = [].concat(x, y,456);
// console.log(l);

// const number = [1, 2, 3, 4, 5, 6, 9, 8, 7];
// const sliced = number.slice(1, 8);
// console.log(sliced);
// const colone = number.slice();
// console.log(number == colone);

// function toArray() {
//   return Array.prototype.slice.call(arguments);
// }
// const aragArray = toArray("sakib", 100);
// console.log(aragArray);

const number = new Array(10);

for (let i = 0; i < number.length; i++) {
  const rand = Math.floor(Math.random() * 20 + 1);
  number[i] = rand > 4 ? "yes number is 4" : "no";
}
console.log(number);
