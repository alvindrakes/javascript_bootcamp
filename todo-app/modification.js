const todo = [{
    text: 'get cat food',
    completion: false
}, {
    text: 'clean room',
    completion: true
}, {
    text: 'do dishes',
    completion: false
}, {
    text: 'bath now',
    completion: true
}]

// remove all p tags that has the ord 'the' in the text

// const p = document.querySelectorAll('p')

// p.forEach(function(item) {
//     if (item.textContent.includes('the')) {
//         item.remove()
//     }
// })


// Challenge area

const incompleteTodo = todo.filter(function(item) {
    return !item.completion
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodo.length}-todos left!`
document.querySelector('body').appendChild(summary)

todo.forEach(function (item) {
   // let count = 1
    if(item.completion == false) {
        const todoLeft = document.createElement('p')
        todoLeft.textContent = `${item.text}`
       // count++
        document.querySelector('body').appendChild(todoLeft)
        
    }
})

