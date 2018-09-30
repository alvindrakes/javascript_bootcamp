const notes = [{}, {
    title: 'My next trip',
    body: 'I would go to Japan'
}, {
    title: 'Habits to work on',
    body: 'exercise more'
}, {
    title: 'office stuff',
    body: 'Get a new seat '
}]


// DOM - document object model
// object = javascript object
// document = html document

// remove the 1st paragraph element
// const p = document.querySelector('p')
// p.remove()


// how to remove all paragraph tags
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    
    p.textContent = 'Hello my new world'
    //console.log(p.textContent)
    //p.remove()
})


// how to add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element added using createElement'

// appendChild add item at the end of the body
document.querySelector('body').appendChild(newParagraph)