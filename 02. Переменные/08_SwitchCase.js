var carColor = 'red'
var message

// if (carColor === 'green') {
//     message = 'Цвет машины зеленый'
// } else if (carColor === 'red') {
//     message = 'Цвет машины красный'
// } else {
//     message = 'цвет не определен'
// }

switch (carColor) {
    case 'green':
        message = 'Цвет машины зеленый'
        break
    case 'red':
        message = 'Цвет машины красный'
        break 
    default:
    message = 'цвет не определен'
}

console.log(message)