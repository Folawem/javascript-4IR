// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age:")

age = parseInt(age)

if (age >= 18) {
    alert("You are old enough to drive.")
} else {
    let yearsToWait = 18 - age;
    alert("You need to wait " + yearsToWait + " more year(s) to be old enough to drive.")
}


// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt("Enter your age:")

let myAge = 17;  

yourAge = parseInt(yourAge)

if (yourAge > myAge) {
    console.log("You are older than me.")
} else if (yourAge < myAge) {
    console.log("I am older than you.")
} else {
    console.log("We are the same age.")

}


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

function compareNumbers(a, b) {
    if (a > b) {
        return 'a is greater than b'
    } else {
        return 'a is less than b'
    }
}

console.log(compareNumbers(10, 5))
console.log(compareNumbers(3, 8)) 

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

function isEven(number) {
    if (number % 2 === 0) {
        return number + " is an even number.";
    } else {
        return number + " is not an even number.";
    }
}
console.log(isEven(2));  
console.log(isEven(15));  



// EXERCISE 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 80 && score <= 100):
            grade = 'A';
            break
        case (score >= 70 && score <= 79):
            grade = 'B';
            break
        case (score >= 60 && score <= 69):
            grade = 'C';
            break
        case (score >= 50 && score <= 59):
            grade = 'D'
            break
        case (score >= 0 && score <= 49):
            grade = 'F'
            break
        default:
            grade = 'Invalid score'
    }

    return "Grade: " + grade
}


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer


function checkSeason(month) {
    month = month.toLowerCase()

    switch (month) {
        case 'september':
        case 'october':
        case 'november':
            return 'The season is Autumn.'
        case 'december':
        case 'january':
        case 'february':
            return 'The season is Winter.'
        case 'march':
        case 'april':
        case 'may':
            return 'The season is Spring.'
        case 'june':
        case 'july':
        case 'august':
            return 'The season is Summer.'
        default:
            return 'Invalid month entered.'
    }
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let dayUserInput = prompt('What day is today ?');
let day = dayUserInput.toLowerCase();

switch (day) {
  case 'monday':
    console.log('Today is Monday. It is a working day.')
    break
  case 'tuesday':
    console.log('Today is Tuesday. It is a working day.')
    break
  case 'wednesday':
    console.log('Today is Wednesday. It is a working day.')
    break
  case 'thursday':
    console.log('Today is Thursday. It is a working day.')
    break
  case 'friday':
    console.log('Today is Friday. It is a working day.')
    break
  case 'saturday':
    console.log('Today is Saturday. It is a weekend day.')
    break;
  case 'sunday':
    console.log('Today is Sunday. It is a weekend day.')
    break
  default:
    console.log('It is not a valid day of the week.')
}
