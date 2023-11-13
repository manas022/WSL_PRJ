function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 2 * min); 
  }
  
  function randomChallenge() {
    const categories = ['intro', 'callbacks', 'closures', 'async', 'OOP', 'recursion'];
    let randomIndex = Math.floor(Math.random() * categories.length);
    let category = categories[randomIndex];
    let num
    if (category == 'intro') {
      num = randomNumber(1, 19);
    } else if (category === 'callbacks') {
        num = randomNumber(1, 24);
    } else if (category === 'closures') {
      num = randomNumber(1, 19);
    } else if (category === 'asynch') {
      num = randomNumber(1, 10);
    } else if (category === 'oop') {
      num = randomNumber(1, 15);
    } else if (category === 'recursion') {
      num = randomNumber(1, 10);
    }
    console.log(category + ' ' + num)
  }
  
  randomChallenge()