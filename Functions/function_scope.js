// function scope behaves the same way as if-else scope

let FarenheitToCelsius = function (farenheit) {
    celcius = (farenheit - 32) * 5 / 9

    if (celcius <= 0) {
        let isFreezing = true
    }

    return celcius
}

// Call a couple of times () 
let temp1 = FarenheitToCelsius(200)
let temp3 = FarenheitToCelsius(500)

// print the converted value 
console.log(temp1)
console.log(temp3)