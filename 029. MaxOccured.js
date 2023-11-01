// Range are given
const L = [1, 4, 3, 1];
const R = [15, 8, 5, 4];

function maxOccured(L, R) {
  //Initialize array with 100000 size and fill with 0.
  let arr = new Array(100000);
  arr.fill(0);

  for (let i = 0; i < L.length; i++) {
    arr[L[i]] += 1;
    arr[R[i] + 1] -= 1;
  }

  let msum = arr[0];
  let ind = 0;
  //Prefix Sum
  for (let i = 1; i < 1000000; i++) {
    arr[i] += arr[i - 1];
    if (msum < arr[i]) {
      msum = arr[i];
      ind = i;
    }
  }

  return console.log(ind);
}

maxOccured(L, R);
