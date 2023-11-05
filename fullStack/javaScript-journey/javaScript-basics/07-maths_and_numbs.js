const score = 500
// console.log(score)
const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))
// console.log(balance.toLocaleString())

const otherNum = new Number(33.533)
// console.log(otherNum.toPrecision(3))

const newNum = new Number(1000000) 
// console.log(newNum.toLocaleString('en-IN'))

//  +++++++++++++++++++++++++++Maths++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-5))
// console.log(Math.round(5.7))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(77.3))
// console.log(Math.min(5,3,52,5))
// console.log(Math.max(33,55,33,3))

// We are going to use Math.random quite often.

// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)