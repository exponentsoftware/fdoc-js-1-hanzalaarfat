//2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

function reverseArray(arr) {
  let reverseArr = [];
  while (arr.length) {
    reverseArr.push(arr.pop());
  }

  return reverseArr;
}

console.log(reverseArray(["A", "B", "C"]));
