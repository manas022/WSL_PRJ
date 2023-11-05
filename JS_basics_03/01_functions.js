function greet(){
    name = 'Manas'
    return `Hello ${name}, How are you doing?`
}
// console.log(greet())


function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // console.log('Manas') Anything after the return statement is considered dead
    // return result
    return num1 + num2 // We can also directly return the value and give them the specification.
}

const result = addTwoNumbers(2,3)
// console.log(result)

function loginUserName(username) {
    if (username === undefined){
        console.log('Please enter a username')
        return // this return statment here nullify the statement if this block of code is executed and won't go further down to the below return statement to print that code simultaneously.
    }
    return `${username}, just logged in` 
}

// console.log(loginUserName()) // In case we haven't given any arguments while calling the functions then it calls undefined on default and will output undefined in the place of 'username' 

function calculatedPrice(val1, val2, ...val){
    return val1
}

// console.log(calculatedPrice(100, 200, 300, 500, 700))

