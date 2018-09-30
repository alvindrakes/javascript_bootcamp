let name  = '   Alvin Loh'

// Length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// search for string
let password = 'abc12345'
console.log(name.includes('abc'))

// Trim, remove extra whitespace at the front anf back 
console.log(name.trim())

// Challenge area
let isValidPassword = function(password) {
        return password.length > 8 && !password.includes('password') 
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!%***('))
console.log(isValidPassword('asdfpasdpopassword'))


