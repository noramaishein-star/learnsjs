console.log(window, {document});
let heading = document.querySelector('h1');
console.log({heading});
heading.innerText = 'Hello AIT!';

let button = document.querySelector('button');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener('click', event => {
    console.log(event);
    heading.innerText = 'Click, Yes ty';
    heading.style.color = getRandomColor();
});
setInterval(() => {
document.documentElement.style.background = getRandomColor();
}, 10_000)

let input = document.querySelector('input');

input.addEventListener('input', event => {
    console.log(event);
    heading.innerText = input.value.split('').reverse().join('');
})