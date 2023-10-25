let score = "manas" 
// console.log(typeof score)

let valueInNumber = Number(score)// this is the conversion of a string to number happening
// console.log(typeof valueInNumber)// the output over here says "typeof is a number"
// console.log(valueInNumber) // but as we console.log the variable where we stored our conversion it says NaN(Not a Number)

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)

let str1 = "hello"
let str2 = " manas"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); /*first character is a string which then forces computer to think that the rest of the values are also a string even though they are numbers. */
// console.log(1 + 2 + "2");/*here are the numbers representing the face value hence arthematic operations are performed for the first two character and then the concatenation of the string. */

// console.log( (3 + 4) * 5 % 3);//percent or the modulus gives the remainder of the operation.

// console.log(+true);
// console.log(+"");