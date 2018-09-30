// student score, total possible score 
// 15/20 -> you got C (75%)!
let letterGrade = ''

const gradeCalc = function(studentScore, totalScore) {
    const gradeScore = (studentScore / totalScore) * 100
    const grade = checkGrade(gradeScore)
    return console.log(`You got a ${grade} ${gradeScore}% !`)
}

const checkGrade = function (gradeScore) {

    if (gradeScore >= 90) {
         letterGrade = 'A'
    } else if (gradeScore >=80 && gradeScore <=89 ) {
         letterGrade = 'B'
    } else if (gradeScore >= 70 && gradeScore <= 79) {
         letterGrade = 'C'
    } else if (gradeScore >= 60 && gradeScore <= 69) {
         letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return letterGrade
}

 gradeCalc(40, 100)
 gradeCalc(30, 40)
