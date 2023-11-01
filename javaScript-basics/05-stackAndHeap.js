clearInterval//Here we are going to discuss about the stacks and heaps on how the variables are stored and accessed when looking in the memory.

//we are first discussing about the stacks(primitive)

let name = 'manas'
let anotherName = name
anotherName = 'maddy'
console.log(anotherName)
console.log(name)

/*What happens in the stacks is that when a already declared variable is stored in another variable there is a copy of the first variable given to the 2nd variable. so when logging both (name and anotherName) we will get two different outputs. */


// --- HEAPS(Non-Primitive)
let obj1 = {
    email : 'user@google.com',
    age : 33
}

let obj2 = obj1
obj2.email = 'manas@google.com'
console.log(obj1)
console.log(obj2)

/*What is happening over in here is that when we change the value of email of obj2(and remember obj1 is stored in the obj2) as the obj1 is where the roots of obj2 are pointing at, hence when the property 'email' was changed for the obj2, the common reference point for both the variables is what made the value of email was allowed a change in obj1. 
summary : HEAPS points to a reference of the value stored in the memory. */