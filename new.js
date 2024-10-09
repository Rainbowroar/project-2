// User-defined function for sorting an array
function customSort(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        console.log("Error: Input is not an array.");
        return;
    }

    // Perform a simple sorting algorithm (e.g., bubble sort)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Return the sorted array
    return arr;
}

// Example usage
let numbers = [5, 2, 9, 1, 5, 6];
console.log("Original array:", numbers);

let sortedNumbers = customSort(numbers);
console.log("Sorted array:", sortedNumbers);

