// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'folawe'
let lastName = 'oluseun'
let country = 'nigeria'
let city = 'lagos'
let age = '50'
let isMarried = 'no'
let year = '2024'

// 2. Check if type of '10' is equal to 10

let string = '10' ;
let number = 10; 
 console.log(typeof string ==  typeof number);

// 3. Check if parseInt('9.8') is equal to 10
// let num = 10
// parseInt('9.8') == 10

// 4. Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
// ii. Write three JavaScript statement which provide falsy value.

5
"hello"
true

0
NaN
null

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

// 7. Use the Date object to do the following activities
// i. What is the year today?
// ii. What is the month today as a number?
// iii. What is the date today?
// iv. What is the day today as a number?
// v. What is the hours now?
// vi. What is the minutes now?
// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.

const currentTime = new Date()
console.log(currentTime)

const yea_r = currentTime.getFullYear()
const mont_h = currentTime.getMonth()
const today = `tuesday`
const date = currentTime.getDay()
const hours = currentTime.getHours()
const min = currentTime.getMinutes()
const time = currentTime.getTime()

console.log(yea_r)
console.log(mont_h + 1)
console.log(today)
console.log(date)
console.log(hours)
console.log(min)
console.log(time)



// EXERCISE 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt("enter base: ")
// let height = prompt("enter height: ")
// let area = 0.5 * base * height 
// let answer = alert(area)


// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let a = prompt("enter side a: ")
// let b = prompt("enter side b: ")
// let c = prompt("enter side c: ")
// let perimeter = a + b + c
// let answer2 = alert(perimeter)


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length =prompt("Enter the length of the rectangle:")
// let width = prompt("Enter the width of the rectangle:")

// let area2 = length * width
// let perimeter2 = 2 * (length + width)

// alert(area2)
// alert(perimeter2)


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = parseFloat(prompt("enter the radius of the circle:"))

// const pi = 3.14;

// let area3 = pi * radius * radius
// let circumference = 2 * pi * radius

// alert(area3)
// alert(circumference)

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2


let slope = 2

let yIntercept = -2

let xIntercept = 1


console.log(slope)
console.log(yIntercept)
console.log(xIntercept)

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2, y1 = 2
let x2 = 6, y2 = 10

let slope2 = (y2 - y1) / (x2 - x1)

console.log(slope2)



// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = -3

let y = (x**2) + (6*x) + 9

console.log(y)

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let hours2 = parseInt(prompt("enter hours worked:"))
// let rate = parseInt(prompt("enter rate per hour:"))
// let weeklyEarning = hours2 * rate
// alert(weeklyEarning)

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

// let name = prompt("Enter your name:")
// if (name.length > 7) {
//     console.log("your name is long")
// } else {
//     console.log("your name is short")
// }


// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

let ageDifference = myAge - yourAge
console.log(ageDifference)

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.


// let birthYear = prompt("Enter your birth year:")
// let currentYear = new Date().getFullYear()
// let age2 = currentYear - birthYear
// 2
// if (age >= 18) {
//     console.log(age2)
// } else {
//     let waitYears = 18 - age2
//     console.log(age2)
// }


// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years


// let years = prompt("Enter number of years you live:");
// let secondsLived = years * 365 * 24 * 60 * 60;
// alert(secondsLived);


// 15. Create a human readable time format using the Date time object

const currentTime2 = new Date()
console.log(currentTime)
const year2 = currentTime.getFullYear()
const month = currentTime.getMonth()
const date2 = currentTime.getDate()
const time2 = currentTime.getTime()
const day = currentTime.getDay()
const min2 = currentTime.getMinutes()
const hour = currentTime.getHours()
console.log(year)
console.log(month + 1)
console.log(date)
console.log(time)
console.log(day)
console.log(min)
console.log(hour)

console.log(`${year2}-${month + 1}-${date2} ${hour}:${min2}`)

console.log(`${date2}-${month + 1}-${year2} ${hour}:${min2}`)

console.log(`${date2}/${month + 1}/${year2} ${hour}:${min2}`)

