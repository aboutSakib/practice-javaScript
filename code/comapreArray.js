arr1 = [1, 2, 3, 4];
arr2 = [1, 2, 3, 4];
if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
  console.log("Equal");
} else {
  console.log("Not equal");
}

const compare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
console.log(compare(arr1, arr2));
