
// String literals


const mySym = Symbol('Key1')

let myObj = {
    name : 'Manas',
    "full name" : 'Manas Dongre',
    age : 25,
    [mySym] : 'myKey1',
    role : 'Software developer',
    location : 'remote',
    email : 'manas@google.com',
    isLoggedIn : false,
}

// console.log(myObj.age)
// console.log(myObj['name'])
// console.log(myObj["full name"])
// console.log(myObj[mySym])
// console.log(typeof myObj[mySym]) 

myObj.email = 'manas@microsoft.com'
// console.log(myObj)
// Object.freeze(myObj)
// myObj.email = 'manas@facebook.com'// Used when we want to freeze that particular key:value pair and want no manipulation.
// console.log(myObj)

myObj.greeting = function() {
    let greet1 = 'Hello'
    console.log(`${greet1}, my name is ${this.name}`)

}

console.log(myObj.greeting())