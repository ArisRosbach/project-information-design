// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

console.log('Hello, world!');

// pagina's
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

const einde = document.getElementById("item-einde");

// buttons
const buttonIntroHor = document.getElementById("buttonIntroHor");
const buttonIntroVer = document.getElementById("buttonIntroVer");

const button1horR = document.getElementById("button1horR");
const button2horR = document.getElementById("button2horR");
const button3horR = document.getElementById("button3horR");
const button1horL = document.getElementById("button1horL");
const button2horL = document.getElementById("button2horL");
const button3horL = document.getElementById("button3horL");
const button1horD = document.getElementById("button1horD");
const button2horD = document.getElementById("button2horD");
const button3horD = document.getElementById("button3horD");

const button1verD = document.getElementById("button1verD");
const button2verD = document.getElementById("button2verD");
const button3verD = document.getElementById("button3verD");
const button4verD = document.getElementById("button4verD");
const button5verD = document.getElementById("button5verD");
const button6verD = document.getElementById("button6verD");
const button7verD = document.getElementById("button7verD");
const button8verD = document.getElementById("button8verD");
const button1verU = document.getElementById("button1verU");
const button2verU = document.getElementById("button2verU");
const button3verU = document.getElementById("button3verU");
const button4verU = document.getElementById("button4verU");
const button5verU = document.getElementById("button5verU");
const button6verU = document.getElementById("button6verU");
const button7verU = document.getElementById("button7verU");
const button8verU = document.getElementById("button8verU");

const buttonAhorR = document.getElementById("buttonAhorR");
const buttonBhorR = document.getElementById("buttonBhorR");
const buttonChorR = document.getElementById("buttonChorR");
const buttonAhorU = document.getElementById("buttonAhorU");
const buttonBhorU = document.getElementById("buttonBhorU");
const buttonChorU = document.getElementById("buttonChorU");
const buttonBhorL = document.getElementById("buttonBhorL");
const buttonChorL = document.getElementById("buttonChorL");

const buttonEindeL = document.getElementById("buttonEindeL");
const buttonEindeB = document.getElementById("buttonEindeB");

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


// Intro buttons
buttonIntroHor.addEventListener("click", () => {
  console.log("button clicker");
  uitleg1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonIntroVer.addEventListener("click", () => {
  console.log("button clicker");
  mozam1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Horizontaal 1 Right
button1horR.addEventListener("click", () => {
  console.log("button clicker");
  uitleg2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2horR.addEventListener("click", () => {
  console.log("button clicker");
  uitleg3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3horR.addEventListener("click", () => {
  console.log("button clicker");
  intro.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Horizontaal 1 Left
button1horL.addEventListener("click", () => {
  console.log("button clicker");
  intro.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2horL.addEventListener("click", () => {
  console.log("button clicker");
  uitleg1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3horL.addEventListener("click", () => {
  console.log("button clicker");
  uitleg2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Horizontaal 1 Down
button1horD.addEventListener("click", () => {
  console.log("button clicker");
  mozam1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2horD.addEventListener("click", () => {
  console.log("button clicker");
  mozam1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3horD.addEventListener("click", () => {
  console.log("button clicker");
  mozam1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});


// Verticaal Down
button1verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam4.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button4verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam5.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button5verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam6.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button6verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam7.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button7verD.addEventListener("click", () => {
  console.log("button clicker");
  mozam8.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button8verD.addEventListener("click", () => {
  console.log("button clicker");
  advies1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Verticaal Up
button1verU.addEventListener("click", () => {
  console.log("button clicker");
  intro.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button2verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button3verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button4verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button5verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam4.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button6verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam5.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button7verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam6.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

button8verU.addEventListener("click", () => {
  console.log("button clicker");
  mozam7.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Horizontaal 2 Up
buttonAhorU.addEventListener("click", () => {
  console.log("button clicker");
  mozam8.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonBhorU.addEventListener("click", () => {
  console.log("button clicker");
  mozam8.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonChorU.addEventListener("click", () => {
  console.log("button clicker");
  mozam8.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Horizontaal 2 Right
buttonAhorR.addEventListener("click", () => {
  console.log("button clicker");
  advies2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonBhorR.addEventListener("click", () => {
  console.log("button clicker");
  advies3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonChorR.addEventListener("click", () => {
  console.log("button clicker");
  einde.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Horizontaal 2 Left
buttonBhorL.addEventListener("click", () => {
  console.log("button clicker");
  advies1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonChorL.addEventListener("click", () => {
  console.log("button clicker");
  advies2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Einde Back
buttonEindeL.addEventListener("click", () => {
  console.log("button clicker");
  advies3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

buttonEindeB.addEventListener("click", () => {
  console.log("button clicker");
  intro.scrollIntoView({ behavior: 'smooth', block: 'center' });
});


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