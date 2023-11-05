/* ARRAYS 
Arrays are the compilation of elements stored together. Note: Elements stored in the Arrays can be of different "Data types" We can access the elements of arrays by calling out their on their indexes.
*/

const myArr = [0, 1, 2, 3, 4, 5] 
const myArr1 = new Array(0, 1, 2, 3, 4, 5) 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(2))
// console.log(myArr.indexOf(3))


// console.log(myArr)
// console.log(myArr1)


const newArr = myArr.join
// console.log(newArr)
// console.log(typeof newArr)
// console.log(myArr)

// SLICE AND SPLICE 

console.log("A ", myArr)

const mN1 = myArr.slice(1,3)
console.log("B ", mN1)

const mN2 = myArr.splice(1,3)
console.log("C ", mN2)
console.log("D ", myArr)

