const lang = ['Javascript', 'ruby', 'java', 'python']

const val = lang.forEach((item) => {
    // console.log(item)
    // return item // "OUTPUT = UNDEFINED" >>> this means that if we are capturing the traversing of our forEach and then printing them under the variable it is stored, 'we are not getting anything in return; meaning forEach doesn't return any value to our console.'
})

// console.log(val)


// using filter function and how we can write the code using different syntax
const myNums = [1,2,3,4,5,6,7,8,9,10]

//1st way : implicit call(meaning, that javascript is implicitly return the values without us having to write the return keyword)
// const newNums = myNums.filter((val) => val > 4)
// console.log(newNums)

//2nd way : we have added a pair of parantheses and keeping rest the same as above.
// const newNums = myNums.filter((val) => (val > 4))
// console.log(newNums)


// const newNums = myNums.filter((val) => {
//     return val > 4 // as we can see that in here as we have started the scope by applying the braces which forces us to explicity make the return possible for our engine to see and address that value of which we are trying the access to.
// })
// console.log(newNums)

// by using forEach (note: as we know that forEach doesn't return any particular value, hence, we need to bend logic in to it)

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums)// so as we saw over here that we were made to insert a logic in to the forEach for us to get those values. (numerous ways to tap in to the loops and get our work done, the journey has just begin and I am already loving hwo these things are working.)
