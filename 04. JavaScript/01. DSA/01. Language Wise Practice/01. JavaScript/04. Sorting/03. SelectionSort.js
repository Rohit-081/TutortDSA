function selectionSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part of the array
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = selectionSort(unsortedArray.slice()); // Create a copy to avoid modifying the original array

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
