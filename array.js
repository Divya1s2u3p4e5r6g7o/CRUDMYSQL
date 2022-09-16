// 1. creating array-----> array created using array literal notation.
//               a[0],      a[1]    a[2]------->position of array
const divya =["mamatha","prudvi","satish"]

console.log(divya)
console.log(divya[0])


// 2. creating array------->array created using the Array() constructor.

const divya1 =new Array("sandeep","sudhakar","pratyusha")
console.log(divya1)


// 3. creating array---->  array created using String.prototype.split().


const divya3 = 'kavya siva'.split('');
console.log(divya3)


const family = ['divya', 'kavya', 'siva'];

console.log(family.join());
// expected output: "Fire,Air,Water"

console.log(family.join(''));
// expected output: "FireAirWater"

console.log(family.join('-'));
// expected output: "Fire-Air-Water"

const fruits = ['Apple', 'Banana'];

console.log(fruits[fruits.length - 1])

console.log(fruits.indexOf('Apple'));
// 1


// const family1 = ['divya', 'kavya', 'siva'];

// const fruitsString = fruits.join('');
// console.log(fruitsString);


// const fruits1 = ['Apple', ''];

// fruits1.includes('Banana'); // true
// fruits1.includes('Cherry'); // false

// // If indexOf() doesn't return -1, the array contains the given item.
// console.log(fruits1.indexOf('Banana') !== -1) // true
// console.log(fruits1.indexOf('Cherry') !== -1) // false


const array1 = [1, 2, 3];

console.log(array1.includes(3));
// expected output: true

const beasts = ['k', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('k'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison'));
// expected output: 4

console.log(beasts.indexOf('sss'));
// expected output: -1



const animal= ['pigs', 'goats', 'sheep'];

const count = animal.push('monkey');
console.log({count});
// expected output: 4
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animal.push('divya', 'mamatha', 'sudhakar');
console.log(animal);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]


ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]