//using shallo copy
const arr1 = [1, 2, 3, 4];
// const arr3 = [...arr1];
// arr3.push(5);
// console.log(arr1, arr3);

//map shallo copy
const arr3 = [...arr1];
arr3.push(8);
const arr4 = arr3.map((x) => x);
console.log(arr4 == arr3);

// using filter
const arr5 = Array.from(arr3);
console.log(arr5 == arr3);

//using deep
const points = [
  [1, 2],
  [10, 20],
  [30, 40],
  [50, 60],
];
const pointcopy = [...points];
// pointcopy.push([8, 9]);
// console.log(pointcopy);
// pointcopy[0][0] = 100;
// pointcopy[0][1] = 200;
// console.log(pointcopy);

const pointdeepcopy = JSON.parse(JSON.stringify(points));
pointdeepcopy[0][0] = 100;
pointdeepcopy[0][1] = 200;
console.log(points);
console.log(pointdeepcopy);
