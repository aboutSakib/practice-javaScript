// const js = {
//   name: "javascript:all  you need to know",
//   author: {
//     name: "sakib",
//     email: "sakib41@gamil.com",
//   },
//   contents: {
//     video: {
//       count: 200,
//     },
//   },
// };
// const node = {
//   name: "javascript:all  you need to know",
//   author: {
//     name: "sakib",
//     email: "sakib41@gamil.com",
//   },
//   contents: {
//     video: {
//       count: 100,
//     },
//   },
// };
// const react = {
//   name: "javascript:all  you need to know",
//   author: {
//     name: "sakib",
//     email: "sakib41@gamil.com",
//   },
//   contents: {
//     video: {
//       count: 5200,
//     },
//   },
// };
// const java = {
//   name: "javascript:all  you need to know",
//   author: {
//     name: "sakib",
//     email: "sakib41@gamil.com",
//   },
//   contents: {
//     video: {
//       count: 200,
//     },
//     artical: {
//       count: 10,
//     },
//     quiz: {
//       count: 15,
//     },
//   },
// };

// const inspectobj = (obj, path) => {
//   return path.split(".").reduce((acc, field) => {
//     if (acc) {
//       return acc[field];
//     }
//     return 0;
//   }, obj);
// };

// const course = [js, node, react, java];
// course.forEach((course) => {
//   const countVideo = inspectobj(course, "contents.video.count");
//   const countartical = inspectobj(course, "contents.artical.count");
//   const countquiz = inspectobj(course, "contents.quiz.count");
//   console.log(
//     `total video =${countVideo},Artical=${countartical},and quiz=${countquiz}`
//   );
// });

// //link list marcup

// const links = [
//   { name: "facebook", url: "https://facebook.com" },
//   { name: "youtube", url: "https://youtube.com" },
//   { name: "google", url: "https://google.com" },
//   { name: "linkeden", url: "https://linkeden.com" },
// ];
// let template = `<ul>{{links}}</ul>`;
// const linkList = links.reduce((acc, cur) => {
//   acc += `<li> <a href ="cur.url"> ${cur.name} </a></li>`;
//   return acc;
// }, "");
// template = template.replace("{{links}}", linkList);
// console.log(template);

// //grouping

// const words = ["sakib", "saymon", "rafi", "raju", "hamid", "abrar", "rasel"];
// const group = words.reduce((acc, cur) => {
//   const len = cur.length;
//   if (acc[len]) {
//     acc[len].push(cur);
//   } else {
//     acc[len] = [cur];
//   }
//   return acc;
// }, {});
// console.log(group);

//combining
const course = [
  { id: "A1", name: "sakib", price: "200" },

  { id: "B1", name: "sakib", price: "200" },
  { id: "C1", name: "sakib", price: "200" },
];
const discount = {
  A1: "500",
  B1: "600",
  c1: "400",
};
const updatePrice = course.reduce((acc, cur) => {
  if (discount[cur.id]) {
    cur.discount = discount[cur.id];
  } else {
    cur.discount = 0;
  }
  acc.push(cur);
  return acc;
}, []);
console.log( updatePrice);