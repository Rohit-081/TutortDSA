function pair(arr, sum) {
  let s = new Set();
  for (let i = 0; i < arr.length; i++) {
    let val = sum - arr[i]; // Calculate the complement value

    if (s.has(val)) {
      console.log(arr[i], val); // Found the pair
      return;
    }

    // Add the current element to the set
    s.add(arr[i]);
  }

  console.log("No pair found");
}

pair([10, 5, 2, 3, -6, 1, 9, 11], 4);
