// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

console.log('Project Information Design');

// Constants
const page2ver = document.getElementById("2ver");

// Buttons maps
document.querySelectorAll("button.maps").forEach(button => {
  button.addEventListener("click", e => {
    let map = document.getElementById(e.target.id);

    map.classList.toggle("mapClicked");
  });
})

// Buttons nav
document.querySelectorAll("button.nav").forEach(button => {
  button.addEventListener("click", e => {
    let page = document.querySelector("."+e.target.parentElement.value);
    
    page.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})

// Buttons world
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