let myBook = {
    // we have properties for an object 

    title: 'Musashi',
    author: 'Eiji Yoshikawa',
    pages: 1000
}

let otherBook = {

    title: 'Harry Potter',
    author: 'J.K Rowling',
    pages: 800
}

let printProperties = function(book) {
    console.log(`${book.title} is by ${book.author}.`)
}

printProperties(myBook)
printProperties(otherBook)


// returning multiple preperties
let getSummary =  function(book) {
    return{
        summary: `${book.title} is by ${book.author}.`,
        pageCount: `${book.title} is ${book.pages} pages long.`
    }
}

let bookSummary = getSummary(myBook)
console.log(bookSummary.summary)
console.log(bookSummary.pageCount)


// challenge  area
// create function - take farenheit in - return object with all three

let tempCalc = function(farenheit) {

    return {
        farenheit: farenheit,
        kelvin: (farenheit + 459.67) * 5 / 9,
        celcius: (farenheit - 32) * 5 / 9
    }
}

let temperature = tempCalc(100)
console.log(`The input farenheit is ${temperature.farenheit}, converted into kelvin is ${temperature.kelvin} 
converted into celcius is ${temperature.celcius}.`)