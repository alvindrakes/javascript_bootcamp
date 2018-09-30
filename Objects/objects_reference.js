let myAccount = {
    name: 'alvindrakes',
    expenses: 0,
    income: 0
}

 //changing the properties of another variable that reference the object will also change the value
// let otherAccount = myAccount 
// otherAccount.income = 1000  //myAccount.income becomes 1000 too 

// when we pass in an object, it changes the original object too 
let addExpense = function(account, expense) {
    account.expenses = account.expenses + expense
}

// add income
let addIncome = function(account, income) {
    account.income = account.income + income
}

//resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

//getAccountSummary
let getAccountSummary = function (account) {
    moneyLeft = account.income - account.expenses
    console.log(`Account for ${account.name} has $${moneyLeft}. $${account.income} in income and $${account.expenses} in expenses.`)
}

addIncome(myAccount, 1000)
addExpense(myAccount, 200)
addExpense(myAccount, 200)
getAccountSummary(myAccount)

resetAccount(myAccount)
getAccountSummary(myAccount)