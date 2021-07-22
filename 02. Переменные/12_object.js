var person = {
    name: 'Василия',
    year: 1990,
    family: ['Елена', 'Семён'],
    calculateAge: function() {
        this.age = 2018 - this.year
    }
}

console.log(person)
console.log(person.year)

console.log(person.calculateAge())