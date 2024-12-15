function compareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
const arr3: number[] = [1, 2, 4];
const arr4: number[] = [1, 2, 3, 4];

console.log(compareArrays(arr1, arr2)); // true
console.log(compareArrays(arr1, arr3)); // false
console.log(compareArrays(arr1, arr4)); // false