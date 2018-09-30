let isRaining = true 

isRaining = false
console.log(isRaining);

// difference between const and let based variable
// you cannot assign new value to constant variable

const isHot = true
console.log(isHot);

// properties inside constant object can still be manipulated
const person = {
    name: 'carmen',
    age: 16
}

person.age = 17
console.log(person);

