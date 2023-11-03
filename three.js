// for of

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num)
}

const greetings = "hello world"
for(const greet of greetings){
    // console.log(greet)
}

// MAP and its methods
const map = new Map()

map.set('IN', 'India')
map.set('UAE', 'Saudi Arabia')
map.set('IND', 'Indonesia')
map.set('CAN', 'Canada')

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value)
}