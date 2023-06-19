const todo = [
  { id: "01", name: "sakib", time: "good morning" },
  { id: "02", name: "rakib", time: "good afternoon" },
  { id: "03", name: "mafuz", time: "good evening" },
  { id: "04", name: "fokir", time: "good night" },
];
const todos = todo.find((item) => item.id == "02");
console.log(todos);

const result = [
  { id: "01", name: "sakib", score: "96" },
  { id: "02", name: "rakib", score: "50" },
  { id: "03", name: "mafuz", score: "45" },
  { id: "04", name: "fokir", score: "47" },
];

const highest = 96;
const student = result.find((item) => item.score == highest);
console.log(student);

const ourFind = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};
const lowest = 47;
const students = result.find((item) => item.score == lowest);
console.log(students);

//use join method
var names = ["sakib", "rakib", "tanvir", "rasel"];
console.log(names.join("    "));

//includes index
var arr = [1, 2, 3, 4];
console.log(arr.includes());
//indexof
const arr1 = ["sakib", "one", "eight", "five"];
console.log(arr1.indexOf("one"));
//last index
console.log(arr1.lastIndexOf("five"));
