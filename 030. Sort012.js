var sortZeroneTwo = function (arr) {
  const ObjCount = {};
  for (let i = 0; i < arr.length; i++) {
    if (ObjCount[arr[i]]) {
      ObjCount[arr[i]] += 1;
    } else {
      ObjCount[arr[i]] = 1;
    }
  }
  let arrOne = [];
  for (let j = 0; j < ObjCount[0]; j++) {
    arrOne.push(0);
  }
  for (let j = 0; j < ObjCount[1]; j++) {
    arrOne.push(1);
  }
  for (let j = 0; j < ObjCount[2]; j++) {
    arrOne.push(2);
  }
  return console.log(arrOne);
};

sortZeroneTwo([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);
sortZeroneTwo([0, 2, 1, 2, 0]);
sortZeroneTwo([2, 1, 0, 0, 2, 0, 0, 1, 2, 0, 1, 2, 0, 1]);
sortZeroneTwo([0]);
sortZeroneTwo([1]);
sortZeroneTwo([2]);
