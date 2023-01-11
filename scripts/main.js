// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';
import count from './count.js';

console.log('Hello, world!');

let data = count(5, 5);

console.log(data);



const home = document.getElementById("item-home");
const uitleg1 = document.getElementById("item-uitleg1");
const uitleg2 = document.getElementById("item-uitleg2");
const uitleg3 = document.getElementById("item-uitleg3");
const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button.addEventListener("click", () => {
  console.log("button clicker");
  uitleg1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button1.addEventListener("click", () => {
  console.log("button clicker");
  uitleg2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2.addEventListener("click", () => {
  console.log("button clicker");
  uitleg3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3.addEventListener("click", () => {
  console.log("button clicker");
  home.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);