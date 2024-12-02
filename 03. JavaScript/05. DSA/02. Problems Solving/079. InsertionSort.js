function insertionSort(arr) {
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = insertionSort(unsortedArray.slice()); // Create a copy to avoid modifying the original array

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
