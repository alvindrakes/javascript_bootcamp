let greetUser = function () {
    console.log('Welcome to the darkside user!')
}

let square_number = function(input) {
    let result = input * 2
    return result
}

greetUser()

let value = square_number(3)
console.log(value)



// Challenge Lecture 21
// Convert Farenheit to Celsius
let FarenheitToCelsius = function(farenheit) {
    celcius = (farenheit - 32) * 5 / 9
    return celcius 
}

// Call a couple of times () 
let temp1 = FarenheitToCelsius(200)
let temp3 = FarenheitToCelsius(500)

// print the converted value 
console.log(temp1)
console.log(temp3)