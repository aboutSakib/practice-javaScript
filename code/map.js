// const studentArray = [
//   { id: 1, name: "sakib ahmed", cgp: 4.0, email: "sakib@gmail.com" },
//   { id: 2, name: "nasim uddin", cgp: 1.0, email: "sakib@gmail.com" },
//   { id: 3, name: "ahmed shahin", cgp: 2.0, email: "sakib@gmail.com" },
//   { id: 4, name: "tanvir", cgp: 3.0, email: "sakib@gmail.com" },
//   { id: 5, name: " ahmed", cgp: 3.0, email: "sakib@gmail.com" },
//   { id: 6, name: "yasir ali", cgp: 2.5, email: "sakib@gmail.com" },
// ];

// const emailTempletes = studentArray
//   .filter((value) => value.cgp < 3)
//   .map((value) => {
//     return {
//       ...value,
//       title: "result published ",
//       msg: "you have faild",
//     };
//   });

// console.log(emailTempletes);

// const names = ["sakib", "rakib", "sumon"];
// const newNames = names.map(function (name) {
//   return name.substring();
// });

// console.log(newNames);

const studentArray = [
  { id: 1, name: "sakib", cgp: 3.8, dueAmount: 500 },
  { id: 2, name: "kamrul", cgp: 3.8, dueAmount: 500 },
  { id: 3, name: "shahin", cgp: 3.08, dueAmount: 500 },
  { id: 4, name: "rakib", cgp: 3.0, dueAmount: 500 },
  { id: 5, name: "raju", cgp: 1.01, dueAmount: 500 },
  { id: 6, name: "rasel", cgp: 2.07, dueAmount: 500 },
  { id: 7, name: "nasim", cgp: 2.5, dueAmount: 00 },
];
const lowcgp = studentArray.filter((value) => value.dueAmount >10);
console.log(lowcgp);


