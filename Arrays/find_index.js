// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects.findIndex((item) => item.id === "c");
console.log(foundIndex);

// return the index of the first occurrence of the number 8 in the ranks array
const ranks = [1, 5, 7, 8, 10, 7];
const index = ranks.findIndex((rank) => rank === 8);
console.log(index);
