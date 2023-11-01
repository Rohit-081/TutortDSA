var countNo = function (arr) {
  const ObjCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (ObjCount[arr[i]]) {
      ObjCount[arr[i]] += 1;
    } else {
      ObjCount[arr[i]] = 1;
    }
  }
  return ObjCount;
};

console.log(countNo([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));

const removeDuplicate = (arr) => {
  const ObjCount = [];
  for (let i = 0; i < arr.length; i++) {
    if (ObjCount.includes(arr[i])) {
    } else {
      ObjCount.push(arr[i]);
    }
  }
  return ObjCount;
};

console.log(removeDuplicate([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));

const printDuplicate = (arr) => {
  const ObjDup = [];
  for (let i = 0; i < arr.length; i++) {}
};
