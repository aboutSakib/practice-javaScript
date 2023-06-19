let array = [1, 3, 4, 8, 7, 6, 9, 10, 2];
// let array = ["sakib", "rakib", "Tanjim"];
const bainarySarch = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;
  while (lowest <= highest) {
    let mid = Math.floor((lowest + highest) / 2);
    if (arr[mid] == key) return mid;
    if (arr[mid] < key) lowest = mid + 1;
    if (arr[mid] > key) highest = mid - 1;
  }
  return -1;
};

array.sort((a, b) => a - b);
console.log(array);

const index = bainarySarch(array, 4);
console.log(index);

//find index
const numbers = [1, 4, 5, 8, 7, 9, 10];
const s1 = numbers.findIndex((item) => item == 9);
console.log(s1);
const names = [
  { id: 1, name: "sakib", contac: "+200001420", Email: "sakib520@gmail.com" },
  { id: 9, name: "Ahsan", contac: "+200001420", Email: "ahasan125@gamil.com" },
  { id: 3, name: "khaled", contac: "+200001420", Email: "khaled47@gamil.com" },
  { id: 6, name: "Sujon", contac: "+200001420", Email: "sujon12@gmail.com" },
  { id: 5, name: "Roy", contac: "+200001420", Email: "roy78@gamil.com" },
  { id: 10, name: "hamza", contac: "+200001420", Email: "hamza47@gmail.com" },
  { id: 8, name: "amir", contac: "+200001420", Email: "amir7484@gmail.com" },
  { id: 2, name: "Rahman", contac: "+200001420", Email: "rahman45@gamil.com" },
  { id: 7, name: "Yamin", contac: "+200001420", Email: "yamin7584@gamil.com" },
];
const s5 = names.findIndex((item) => item.id == "8");
console.log(s5);
