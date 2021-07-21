var currentYear = 2021

var carName = 'ford'
var carYear = 2019

var carAge = currentYear - carYear

// если в.м. меньше 5 лет ...
// если в.м. больше или равно 5 лет и меньше или равно 10 лет ...
// иначе другое сообщение

if (carAge < 5) {
    console.log(carName + ' меньше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равно 5 лет и меньше или равно 10 лет')
} else {
    console.log(carName + ' гавно')
}
