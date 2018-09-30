
const todos = [{
    text: 'get cat food',
    completed: false
}, {
    text: 'clean room',
    completed: true
}, {
    text: 'do dishes',
    completed: false
}, {
    text: 'bath now',
    completed: true
}]

// delete 3rd item 
// add new item onto the end
// remove the 1st item from the list

// todo.splice(2, 1) // start at index 2 and delete 1 item
// todo.push('go to the gym')
// todo.shift()

// console.log(`You have ${todo.length} todos.`)

//console.log(`You have ${todo.length} left to do!`);


// let todoLeft = todo.forEach(function (item, index) {
//     if (index == 0) {
//         console.log(`${index+1}st todo is ${item}.`);
//     } else if (index == 3) {
//         console.log(`${index+1}th todo is ${item}.`);
//     } else if(index == 1) {
//         console.log(`${index+1}nd todo is ${item}.`);
//     } else {
//         console.log(`${index+1}rd todo is ${item}.`);
//     }
// })


// for (let i = 0; i < todo.length; i++) {
//     console.log(`${i+1}. ${todo[i]}`);
// }

const removeTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
            return todo.text.toLowerCase() === todoText.toLowerCase()
    })
   
    if (index > -1) {
        todos.splice(index, 1)
    }
}

removeTodo(todos, 'get god cat food')
console.log(todos)
