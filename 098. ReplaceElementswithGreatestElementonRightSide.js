/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  // for(let i = 0; i < arr.length; i++){
  //     let max = 0;
  //     for(let j = i+1; j < arr.length; j++){
  //         max = max > arr[j] ? max : arr[j];
  //     }
  //     arr[i] = max
  // }
  // arr[arr.length - 1] = -1
  // return arr
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    arr[i] = max;
    if (currentElement > max) {
      max = currentElement;
    }
  }
  return arr;
};
