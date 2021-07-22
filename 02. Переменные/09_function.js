var carName = 'Ford'
var carYear = 2008

var personYear = 1990



function calculateAge(year) {
    var currentYear = 2020
    var result = currentYear - year

    return result    
}

function checkAndLogAge(year, name, compareTo) {
    
    if (calculateAge(year) < compareTo) {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    }  

}

checkAndLogAge(carYear, 'машины', 10)
checkAndLogAge(2012, 'человека', 30)