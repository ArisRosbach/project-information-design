// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

console.log('Project Information Design');

// maps
const mapIntro = document.getElementById("mapIntro");
const map1hor = document.getElementById("map1hor");
const map2hor = document.getElementById("map2hor");
const map3hor = document.getElementById("map3hor");
const map1ver = document.getElementById("map1ver");
const map2ver = document.getElementById("map2ver");
const map3ver = document.getElementById("map3ver");
const map4ver = document.getElementById("map4ver");
const map5ver = document.getElementById("map5ver");
const map6ver = document.getElementById("map6ver");
const map7ver = document.getElementById("map7ver");
const map8ver = document.getElementById("map8ver");
const mapAhor = document.getElementById("mapAhor");
const mapBhor = document.getElementById("mapBhor");
const mapChor = document.getElementById("mapChor");
const mapDhor = document.getElementById("mapDhor");


// Kaarten
mapIntro.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  mapIntro.classList.toggle("mapClicked");
})

map1hor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map1hor.classList.toggle("mapClicked");
})

map2hor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map2hor.classList.toggle("mapClicked");
})

map3hor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map3hor.classList.toggle("mapClicked");
})

map1ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map1ver.classList.toggle("mapClicked");
})

map2ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map2ver.classList.toggle("mapClicked");
})

map3ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map3ver.classList.toggle("mapClicked");
})

map4ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map4ver.classList.toggle("mapClicked");
})

map5ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map5ver.classList.toggle("mapClicked");
})

map6ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map6ver.classList.toggle("mapClicked");
})

map7ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map7ver.classList.toggle("mapClicked");
})

map8ver.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  map8ver.classList.toggle("mapClicked");
})

mapAhor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  mapAhor.classList.toggle("mapClicked");
})

mapBhor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  mapBhor.classList.toggle("mapClicked");
})

mapChor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  mapChor.classList.toggle("mapClicked");
})

mapDhor.addEventListener("click", () => {
  console.log("Ik ben geklikt");
  mapDhor.classList.toggle("mapClicked");
})

// Buttons nav
document.querySelectorAll("button.nav").forEach(button => {
  button.addEventListener("click", e => {
    let pagina = document.querySelector("."+e.target.parentElement.value);
    console.log("."+e.target.parentElement.value);
    pagina.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})


const page2ver = document.getElementById("2ver");

// Buttons Wereldbol
document.querySelectorAll("button.involved").forEach(button => {
  button.addEventListener("click", e => {
    page2ver.className = 'page page2ver';

    if(e.target.id == "TT"){
      page2ver.classList.add("page2verTT");
    } else if (e.target.id == "TN"){
      page2ver.classList.add("page2verTN");
    } else if (e.target.id == "MI"){
      page2ver.classList.add("page2verMI");
    } 
  });
})