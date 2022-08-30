const pollutedArr = [2, 3, 4, 5, undefined, 10];
const newArr = pollutedArr.filter((x) => Number.isInteger(x)).map((x) => x * 2);
console.log(newArr);
