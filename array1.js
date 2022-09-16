
// initialize array
const names =["mamatha","prudvi","satish"];

console.log(names)

// push() function : append multiple values to the array at the end
names.push("Sudhakar", "Sai");
onsole.log(names)

const names1 =["mamatha","prudvi","satish"];

//pop() function: This method is use to remove elements from the end of an array
names1.pop();

console.log(names1)

//The array method forEach() loop's through any array, executing a provided function once for each array element in ascending index order. This function is known as a callback function.

names.forEach((name) => {
    console.log(name);
});