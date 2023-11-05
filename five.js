const languages = ['Javascript', 'python', 'ruby', 'Java', 'go']

languages.forEach(function (val){
    // console.log(val);
})
//making this loop iterate using arrow function:- 
languages.forEach((val1) => {
    // console.log(val1)
})

function printMe(item) {
    // console.log(item)// by explicitly writing a function and then calling it in the parameter of the forEach applied on to languages, we can have the values of the arrays we are trying to get to.
}
// languages.forEach(printMe)

languages.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})// by this example we mean to express is having access and get the visuals that we can even see the index of that value through which the loop hand is travelling through along with the whole array from which it is travelling.


const coding = [
    {
        langName : 'JavaScript',
        shortForm : 'JS'
    },
    {
        langName : 'Python',
        shortForm : 'py'
    },
    {
        langName : 'Ruby',
        shortForm : 'rb'
    }
]

coding.forEach((item) => {
    // console.log(item.langName)
    console.log(item.langName)
})