function take<T>(arr:T[], n: number):T[] {
  if (n >= arr.length) {
    return arr;
  }
  const newArr:T[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i])
  }
  return newArr;
}

const result = take<number>([3, 4, 5, 2, 1, 33], 2) 

// const newArr = take([3, 4, 5, 2, 1, 33], 2);
// console.log(newArr);