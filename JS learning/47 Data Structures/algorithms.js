// Bubble Sort
function bubble_sort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return result;
}

// Selection Sort
function selection_sort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        let min_index = i;

        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[min_index]) {
                min_index = j;
            }
        }

        [result[i], result[min_index]] = [result[min_index], result[i]];
    }

    return result;
}

// Insertion Sort
function insertion_sort(arr) {
    const result = [...arr];

    for (let i = 1; i < result.length; i++) {
        const current = result[i];
        let j = i - 1;

        while (j >= 0 && result[j] > current) {
            result[j + 1] = result[j];
            j--;
        }

        result[j + 1] = current;
    }

    return result;
}

// Merge Sort
function merge_sort(arr) {
    if (arr.length <= 1) return [...arr];

    const middle = Math.floor(arr.length / 2);
    const left = merge_sort(arr.slice(0, middle));
    const right = merge_sort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}

// Quick Sort
function quick_sort(arr) {
    if (arr.length <= 1) return [...arr];

    const pivot = arr[arr.length - 1];
    const smaller = [];
    const greater = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            smaller.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quick_sort(smaller), pivot, ...quick_sort(greater)];
}

// Linear Search
function linear_search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }

    return -1;
}

// Binary Search
function binary_search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) return middle;

        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// Recursive Binary Search
function recursive_binary_search(
    arr,
    target,
    left = 0,
    right = arr.length - 1
) {
    if (left > right) return -1;

    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) return middle;

    if (arr[middle] < target) {
        return recursive_binary_search(
            arr,
            target,
            middle + 1,
            right
        );
    }

    return recursive_binary_search(
        arr,
        target,
        left,
        middle - 1
    );
}

// Jump Search
function jump_search(arr, target) {
    const length = arr.length;

    if (length === 0) return -1;

    const jump_size = Math.floor(Math.sqrt(length));
    let start = 0;
    let end = jump_size;

    while (
        start < length &&
        arr[Math.min(end, length) - 1] < target
    ) {
        start = end;
        end += jump_size;

        if (start >= length) return -1;
    }

    for (let i = start; i < Math.min(end, length); i++) {
        if (arr[i] === target) return i;
        if (arr[i] > target) return -1;
    }

    return -1;
}

// Set Search
function set_search(arr, target) {
    return new Set(arr).has(target);
}

// Map Search
function map_search(records, target_id) {
    const records_map = new Map(
        records.map(record => [record.id, record])
    );

    return records_map.get(target_id);
}

// Test Data
const numbers = [7, 3, 8, 2, 6, 3];
const sorted_numbers = [2, 3, 6, 7, 8, 10, 12, 15];
const target = 10;

// Sorting Results
console.log("===== SORTING =====");
console.log("Original:", numbers);
console.log("Bubble Sort:", bubble_sort(numbers));
console.log("Selection Sort:", selection_sort(numbers));
console.log("Insertion Sort:", insertion_sort(numbers));
console.log("Merge Sort:", merge_sort(numbers));
console.log("Quick Sort:", quick_sort(numbers));

// Searching Results
console.log("\n===== SEARCHING =====");
console.log("Linear Search:", linear_search(sorted_numbers, target));
console.log("Binary Search:", binary_search(sorted_numbers, target));

console.log(
    "Recursive Binary Search:",
    recursive_binary_search(sorted_numbers, target)
);

console.log("Jump Search:", jump_search(sorted_numbers, target));
console.log("Set Search:", set_search(sorted_numbers, target));

// Map Search
const students = [
    { id: 101, name: "Anu" },
    { id: 102, name: "Bala" },
    { id: 103, name: "Charan" }
];

console.log("Map Search:", map_search(students, 102));