let num = 95.8234

// sepcify the number of decimals we want to keep
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 10 - 20
//console.log(randomNum)


// Challenge area
let guessCorrect = function(guess) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) 
    return guess == randomNum
}

console.log(guessCorrect(2))
console.log(guessCorrect(4))
console.log(guessCorrect(1))