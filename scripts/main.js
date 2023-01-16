// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';
import count from './count.js';

console.log('Hello, world!');

let data = count(5, 5);

console.log(data);



const intro = document.getElementById("item-intro");
const uitleg1 = document.getElementById("item-uitleg1");
const uitleg2 = document.getElementById("item-uitleg2");
const uitleg3 = document.getElementById("item-uitleg3");

const mozam1 = document.getElementById("item-mozam1");
const mozam2 = document.getElementById("item-mozam2");
const mozam3 = document.getElementById("item-mozam3");
const mozam4 = document.getElementById("item-mozam4");
const mozam5 = document.getElementById("item-mozam5");
const mozam6 = document.getElementById("item-mozam6");
const mozam7 = document.getElementById("item-mozam7");
const mozam8 = document.getElementById("item-mozam8");

const advies1 = document.getElementById("item-advies1");
const advies2 = document.getElementById("item-advies2");
const advies3 = document.getElementById("item-advies3");


const buttonIntroHor = document.getElementById("buttonIntroHor");
const buttonIntroVer = document.getElementById("buttonIntroVer");
const button1hor = document.getElementById("button1hor");
const button2hor = document.getElementById("button2hor");
const button3hor = document.getElementById("button3hor");

const button1ver = document.getElementById("button1ver");
const button2ver = document.getElementById("button2ver");
const button3ver = document.getElementById("button3ver");
const button4ver = document.getElementById("button4ver");
const button5ver = document.getElementById("button5ver");
const button6ver = document.getElementById("button6ver");
const button7ver = document.getElementById("button7ver");
const button8ver = document.getElementById("button8ver");

const buttonAhor = document.getElementById("buttonAhor");
const buttonBhor = document.getElementById("buttonBhor");
const buttonChor = document.getElementById("buttonChor");

buttonIntroHor.addEventListener("click", () => {
  console.log("button clicker");
  uitleg1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button1hor.addEventListener("click", () => {
  console.log("button clicker");
  uitleg2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2hor.addEventListener("click", () => {
  console.log("button clicker");
  uitleg3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3hor.addEventListener("click", () => {
  console.log("button clicker");
  intro.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonIntroVer.addEventListener("click", () => {
  console.log("button clicker");
  mozam1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button1ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam4.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button4ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam5.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button5ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam6.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button6ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam7.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button7ver.addEventListener("click", () => {
  console.log("button clicker");
  mozam8.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button8ver.addEventListener("click", () => {
  console.log("button clicker");
  advies1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonAhor.addEventListener("click", () => {
  console.log("button clicker");
  advies2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonBhor.addEventListener("click", () => {
  console.log("button clicker");
  advies3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonChor.addEventListener("click", () => {
  console.log("button clicker");
  advies1.scrollIntoView({ behavior: 'smooth', block: 'center' });
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