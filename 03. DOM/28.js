var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')

// box2.classList.add('blue')
 box2.classList.remove('blue')

 var hasClass = box2.classList.contains('box')
 console.log(hasClass)

 if (hasClass) {
     box2.classList.add('blue')
 } else {
     box2.classList.remove('blue')
 }