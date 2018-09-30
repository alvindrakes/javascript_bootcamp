let name = "Alvin" //it's valid to not assign a value to a variable 

// undefined for variables
if (name == undefined) {
    console.log("Please provide your name!")
} else {

    console.log(name)
}


// undefined for functions
//undefined because no return value for this function
let square = function(num) {
    console.log(num)  
}

let results = square()
console.log(results)


// Null as assigned value, undefined is for error while null is for explicitely null assigned value 
let age  = 21

age = null 

console.log(age)