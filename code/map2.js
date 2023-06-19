// //squre number use reduced

// const numbers = [1, 2, 4, 5, 6, 7, 8];
// const sqrure = numbers.reduce((acc, cur) => {
//   acc.push(cur * cur);
//   return acc;
// }, []);
// console.log(sqrure);

// //ood number use  reduced
// const odds = numbers.reduce((acc, cur) => {
//   if (cur % 2 == 1) {
//     acc.push(cur);
//   }
//   return acc;
// }, []);
// console.log(odds);

//big array
const bigArray = [];
for (let i = 0; i < 50000000; i++) {
  bigArray.push(i);
}
console.time("both");
bigArray.filter((v) => v % 2 == 0).map((v) => v + 2);
console.timeEnd("both");


console.time("reduce");
const bArray = bigArray.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);
console.timeEnd("reduce");
