// bubble sort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let n = 0; n < arr.length - 1; n++) {
        // ascending order
        if(arr[n] > arr[n + 1]) {
          const temp = arr[n];
          arr[n] = arr[n + 1];
          arr[n + 1] = temp;
        }
    } 
  }

  return arr;
}

console.log(bubbleSort([9, 8, 7, 6, 5, 4]));

// time complexity is n^2
// space complexity o(1)


function mergeSort(arr) {

  if(arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
  const sortedArray = [];
 
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift())
    }
  }

  return [...sortedArray, ...left, ...right];
}


console.log(mergeSort([9, 8, 7, 6, 5, 4]));