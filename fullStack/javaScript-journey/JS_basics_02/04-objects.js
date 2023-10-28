// We are learning about objects a little more here.

const tinder = {}

tinder.id = '123abc'
tinder.name = 'manas'
tinder.email = 'manas@google.com'

// console.log(tinder)

const regularUser = {
    email : 'someone@user.com',
    username : {
        fullName : {
            firstName : "Manas",
            lastName : "Dongre"
        }
    }
}

// console.log(regularUser.username.fullName.firstName)


const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = { 3 : 'c', 4 : 'd'}
const obj3 = {5 : 'e', 6 : 'f'}
// const obj4 = {...obj1,...obj2, ...obj3}
const obj4 = Object.assign({}, obj1, obj2,obj3)// This is also a way to assign the different values in the target object

// console.log(obj4)


const keys = Object.keys(tinder)//usage of "Object.keys" and "Object.values" are heavily used as it returns the output in the form of arrays which can later be combined for looping and many more.
const values = Object.values(tinder)
console.log(keys)
console.log(values)