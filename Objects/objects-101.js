let myBook = {
    // we have properties for an object 

    title: 'Musashi',
    author: 'Eiji Yoshikawa',
    pages: '1000'
}

console.log(myBook.author)
console.log(myBook.pages)
console.log(`${myBook.title} is by ${myBook.author}`)

// change properties
myBook.title = 'Harry Potter'
console.log(`${myBook.title} is by ${myBook.author}`)


// challenge area
let bestFriend = {
    name: 'Chan Chun Ming',
    age: 21,
    location: 'Sungai Long'
}

console.log(`${bestFriend.name} is ${bestFriend.age} years old and he lives in ${bestFriend.location}.`)

bestFriend.age = 28
console.log(`${bestFriend.name} is ${bestFriend.age} years old and he lives in ${bestFriend.location}.`)