// const user = {
//     userName : 'Manas',
//     email : 'manas@google.com',

//     welcomeMessage : function () {
//         console.log(`${this.userName}, hello and welcome to our website.`)
//         // console.log(this)// If we want to use any surrounding variables we can use "this" keyword and get the access of the surrounding variables. Also when we print "this" in inside the scope such as function scope in this case we are getting the current context of that particular environment within where "this" is made to print.
//     }
// }

// user.welcomeMessage()
// user.userName = 'Maddy'
// user.welcomeMessage()
console.log(this)// As for now we are in the node environment on doing console.log on "this" it gives an empty object because our global object is an empty object. Whereas when we console.log "this" in the browser we get a window object as the global object



//  const chai = function () {
//     let userName = 'Manas'
//     console.log(`Hey ${this.userName}, are you up for a coffee ?`)
//     // console.log(this)
// }
// chai()

// const chai = () => {
//     let username = "manas"
//     console.log(this.username)
    
// }
// chai()

// implicit return 

// const addTwoNum = (num1, num2) => num1 + num2// this is where the implicit return is happening when we are not putting the variables in the scope and javascript is assuming this is where it needs to pull their swords on their own hence the implicit return happening.

// console.log(addTwoNum(2,3))

const addTwoNum = (num1, num2) => (num1+num2)//This is also another way to how we can use the imlicit return property by javascript. NOTE: Just as we apply the curly braces javascript moves out of the play to implicitly return us any value leaving us to the work. Hence we will then need to explicitly return the value we want from our code.
// console.log(addTwoNum(3,5))

// const addTwo = (num1, num2) => ({username: "Manas"})// We can only implicitly return the function value while using objects is when we wrap them under parentheses.
// console.log(addTwo(2,3))