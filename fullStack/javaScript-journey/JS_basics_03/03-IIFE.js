// Immediately Invokes Function Expression

(function chai() {
    let username = "Manas"
    console.log(`Hey ${username}, wanna have a cup of chai.`)
}) (); // We have to remember the fact that when using two IIFE consecutively there is a set protocol where in we haver to just add ';' a semicolon to tell javaScript on when to stop the function.

((name) => {
    console.log(`Hola ${name}, How are we doing in the learning journey so far `)
}) ('Manas')