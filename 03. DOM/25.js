// var div = document.getElementById("playground")
// console.log(div)

// var p = document.getElementsByClassName("text")
// console.log(p)

// var h1 = document.getElementsByTagName("h1")
// console.log(h1)

//

var div = document.querySelector('#playground')
div.innerHTML = '<h2 style="color: red">From JS</h2>'
console.log(div.innerHTML);

var p = document.querySelectorAll('.text')
console.log(p);

var h1 = document.querySelector('h1')
h1.textContent = h1.textContent + " + JS"
console.log(h1);

var ul = document.querySelector('div#playground > ul')
console.log(ul);

var input = document.querySelector('input')
input.value = 222
console.log(input.value);