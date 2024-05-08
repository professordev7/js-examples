/**
 * 
 * @param {*} arr 
 * @param {*} n 
 */
function bubblesort(arr, n) {
  let i, j, temp;
  let swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were swapped in the inner loop, then the array is sorted
    if (!swapped) {
      break;
    }
  }
}

function main() {
  let arr = [20, 50, 30, 70, 40, 90, 10];
  let n = arr.length;
  bubblesort(arr, n);
  console.log("Sorted array: ");
  for (let i = 0; i < n; i++) {
    console.log(arr[i], " ");
  }
}


main();