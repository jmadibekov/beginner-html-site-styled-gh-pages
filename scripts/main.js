const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = "Bob";
console.log('This is console: ' + myVariable);

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log('4 * 7 is ' + multiply(4, 7));

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}