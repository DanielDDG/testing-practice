function analyzeArray(arr) {
  const obj = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };

  return obj;
}

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;
  return average;
}

function min(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

function max(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

export { analyzeArray };
