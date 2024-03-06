function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);

        // Recursively sort the sub-arrays
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);

    return i + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage:
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = quickSort(unsortedArray.slice()); // Create a copy to avoid modifying the original array

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
