// an array of object 
const notes = [{
    title: 'My next trip',
    body: 'I would go to Japan'
}, {
    title: 'Habits to work on',
    body: 'exercise more'
}, {
    title: 'Office modification',
    body: 'Get a new seat '
}]

// add item into array
// notes.push('Note 4')

// console.log(notes.length)
// console.log(notes)

// notes.pop()
// console.log(notes)
// console.log(notes.pop());

// 'shift' method remove 1st item in array
// console.log(notes.shift());

// // 'unshift' method add 1st item in the beginning
// notes.unshift('My new 1st note')

// notes.splice(1, 1)
// notes.splice(1, 0, 'this is new 2nd item') // this will add a new item at index 1
// console.log(notes);

// looping through array
// notes.forEach(function () {
//     console.log('testing 123'); 
// })

// notes.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// })



// // for loop - counting ... 1
// for (let i=1; i<=10; i++) {
//     console.log('Hello world');
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(`you need to ${notes[count]}`);
    
// }

// if no item is found, -1 is returned
// console.log(notes.indexOf('Note 2'))

// if item is found at index specified, return true
// use findindex() if you need index in arrays of non-primitive type eg. objects

const findNote = function (notes, noteTitle) {
    return noteCalled = notes.find(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
} 

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// } 

const note = findNote(notes, 'hello office modification')
console.log(notes)

    


const index = notes.findIndex(function(note, index) {
    return note.title === 'My next trip'
})
console.log(index);
