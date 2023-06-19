const arr = ["a", "b", "c", "d"];
const iArr = arr[Symbol.iterator]();
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());

const keys = arr.keys();
// console.log(keys.next());
// console.log(keys.next());
// console.log(keys.next());
// console.log(keys.next());

const valus = arr.values();
// console.log(valus.next());

const entries = arr.entries();
// console.log(entries.next());

//use for of loop
const loop = (it, name) => {
  for (let v of it) {
    console.log(`${name}-${v}`);
  }
};

loop(keys,'key') 
loop(valus,'valu')
loop(entries,'entry')