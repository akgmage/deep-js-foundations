// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const found = objects.find((item) => item.id === "a");
console.log(found);
