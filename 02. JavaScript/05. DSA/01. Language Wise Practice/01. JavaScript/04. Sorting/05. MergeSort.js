function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort the two halves
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left and right arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = mergeSort(unsortedArray.slice()); // Create a copy to avoid modifying the original array

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
