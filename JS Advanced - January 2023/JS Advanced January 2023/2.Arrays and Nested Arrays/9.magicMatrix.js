function solve(arr) {
  let sumR = 0;
  let sumC = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].join("");
    for (let j = 0; j < current.length; j++) {
      sumC += Number(current[j]);
      sumR += Number(current[0]);
    }
  }

  if (sumC === sumR) {
    console.log("true");
  } else {
    console.log("false");
  }
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);

// Write a function that checks if a given matrix of numbers is magical.A matrix is magical if the sums of the cells of every row and every column are equal.

// The input comes as an array of arrays, containing numbers(number 2D matrix).The input numbers will always be positive.

// The output is a Boolean result indicating whether the matrix is magical or not.
