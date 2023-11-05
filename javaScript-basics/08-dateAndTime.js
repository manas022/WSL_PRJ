// DATE 
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23)// 22 is the Date in here.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date('2023-1-23')
let myCreatedDate = new Date('03-22-2023')
// console.log(myCreatedDate.toDateString())//The date considered in here is 23 but a day less when given manually

// console.log(typeof myCreatedDate)

let myDateStamp = Date.now()
// console.log(typeof myDateStamp)

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)// Returns the output but it refers the array's indexing, Hence (+1) 
console.log(newDate.getDay())
console.log(newDate.getDate())