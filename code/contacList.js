// const names = [
//   { id: 1, name: "sakib", contac: "+200001420",Email:'sakib520@gmail.com' },
//   { id: 2, name: "Ahsan", contac: "+200001420",Email:"ahasan125@gamil.com" },
//   { id: 3, name: "khaled", contac: "+200001420",Email:"khaled47@gamil.com" },
//   { id: 4, name: "mahabub", contac: "+200001420", Email:"mahabub65@gamil.com"},
//   { id: 5, name: "Sujon", contac: "+200001420",Email:"sujon12@gmail.com" },
//   { id: 6, name: "Roy", contac: "+200001420", Email:'roy78@gamil.com'},
//   { id: 7, name: "hamza", contac: "+200001420",Email:"hamza47@gmail.com" },
//   { id: 8, name: "amir", contac: "+200001420",Email:"amir7484@gmail.com" },
//   { id: 9, name: "Rahman", contac: "+200001420",Email:"rahman45@gamil.com" },
//   { id: 10, name: "Yamin", contac: "+200001420", Email:"yamin7584@gamil.com"},
// ];
// names.sort((a, b) => {
//   if (a.name > b.name) return 1;
//   if (b.name < a.name) return -1;
//   return 0;
// });

// const group = names.reduce((acc, cur) => {
//   let groupName = cur.name.charAt(0).toUpperCase();
//   if (acc[groupName]) {
//     acc[groupName].push(cur);
//   } else {
//     acc[groupName] = [cur];
//   }
//   return acc;
// }, {});

// const displayitem = (group) => {
//   console.log("display contac inforamation");
//   console.log("---------------------------------");
//   const keys = Object.keys(group);
//   keys.forEach((key) => {
//     console.log(`group:${key}`);
//     console.table(group[key]);
//   });
// };
// displayitem(group);

//sorted
// const myArray = [1, 6, 5, 4, 8, 2, 10, 3, 4, 9];
// const bubblesort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
// };

// console.log(myArray);

// bubblesort(myArray);
// console.log(myArray);

const bubblesort = (array, cb) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (cb(array[j], array[j + 1]) > 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
const myArray = [1, 6, 5, 4, 8, 2, 10, 3, 15, 4, 9];
bubblesort(myArray, (a, b) => a - b);
console.log(myArray);
const names = [
  { id: 1, name: "sakib", contac: "+200001420", Email: "sakib520@gmail.com" },
  { id: 9, name: "Ahsan", contac: "+200001420", Email: "ahasan125@gamil.com" },
  { id: 3, name: "khaled", contac: "+200001420", Email: "khaled47@gamil.com" },
  {
    id: 4,
    name: "mahabub",
    contac: "+200001420",
    Email: "mahabub65@gamil.com",
  },
  { id: 6, name: "Sujon", contac: "+200001420", Email: "sujon12@gmail.com" },
  { id: 5, name: "Roy", contac: "+200001420", Email: "roy78@gamil.com" },
  { id: 10, name: "hamza", contac: "+200001420", Email: "hamza47@gmail.com" },
  { id: 8, name: "amir", contac: "+200001420", Email: "amir7484@gmail.com" },
  { id: 2, name: "Rahman", contac: "+200001420", Email: "rahman45@gamil.com" },
  { id: 7, name: "Yamin", contac: "+200001420", Email: "yamin7584@gamil.com" },
];
bubblesort(names, (a, b) => a.id - b.id);
console.log(names);
bubblesort(names, (a, b) => {
  if (a.name > b.name) return 1;
  if (b.name < a.name) return -1;
  return 0;
});
console.log(names);