let add = function(num1, num2, num3) {
    return num1 + num2 + num3
}

let result = add(10, 5, 7)
console.log(result)

// default arguments 
let getScoreText = function (playerName = 'Anonymous', playerScore = 0) {
   //return 'Name: ' + playerName + ', Score: ' + playerScore 
   return `Name: ${playerName}, Score: ${playerScore}`
}

// if you don't want to provide value for the 1st argument, then you neeed assign 'undefined'
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)




// Challenge area
// A 25% tip on $40 would be %10
let tipCalc = function(total, tipPercent = 0.2) {
    let tipPercentage = tipPercent * 100
    let tipResult = total * tipPercent
    return `A ${tipPercentage}% on $${total} would be $${tipResult}.`
}


let tipGiven = tipCalc(100)
let tipGiven2 = tipCalc(500, 0.3)
console.log(tipGiven)
console.log(tipGiven2)




// Template String
name = 'Bob'
age = 21
console.log(`Hey, my name is ${name}! I am ${age} years old haha`)