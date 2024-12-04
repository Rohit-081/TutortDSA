function bubbleSort(arr) {
    let len = arr.length;
    let swapped;

    for (let i = 0; i < len; i++) {
        swapped = false;

        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Mark that a swap occurred
                swapped = true;
            }
        }

        // If no swaps occurred in the inner loop, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(unsortedArray.slice()); // Create a copy to avoid modifying the original array

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
