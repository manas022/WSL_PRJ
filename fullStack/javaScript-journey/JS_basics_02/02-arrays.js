const marvel = ['spiderman', 'ironman', 'vision']
const dc = ['superman','flash', 'batman']

const combined_heroes = marvel.concat(dc)// concatenates two distinct arrays into one.
// console.log(combined_heroes)

const allHeroes = [...marvel, ...dc]
// console.log(allHeroes)// takes both the values of the arrays and put them into one(basically does the same thing.)

const newArr = [1, 2, 3 , [4, 5], 6, [7, 8, [9, 10]]]
// const realArr = newArr.flat(Infinity)
// console.log(realArr)

console.log(Array.isArray('Manas'))
console.log(Array.from('Manas'))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3))//gives out an array of the given elements that are not in an array form
