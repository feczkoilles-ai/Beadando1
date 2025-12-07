const m = document.getElementById("m");
const bezarasgomb = document.getElementById("m-bezaras");
const mcim = document.getElementById("m-cim");
const mar = document.getElementById("m-ar");
const mkep = document.getElementById("m-kep");
const mkepLink = document.getElementById("m-kep-link");
const mgomb =document.getElementById("m-gomb")
let valasztott = [];

const termekek = document.querySelectorAll(".ital");

termekek.forEach(termek => {
  termek.addEventListener("click", () => {
    const cim = termek.querySelector("h1").innerText;
    const ar = termek.querySelector("p").innerText;
    const kepf = termek.querySelector("img").src;
    const kepa = termek.querySelector("img").alt;
    const wiki = termek.getAttribute("data-wiki");

    mcim.innerText = cim;
    mar.innerText = ar;
    mkep.src = kepf;
    mkep.alt = kepa;
    mkepLink.href = wiki;

    m.classList.add("nyit");
  });
});



mgomb.addEventListener("click", () => {
  const ujTermek = mcim.innerText;
  valasztott.push(ujTermek);

  const li = document.createElement("li");
  li.innerText = ujTermek;
  const termekLista = document.getElementById("termekLista");
  termekLista.appendChild(li);
});



bezarasgomb.addEventListener("click", () => {
  m.classList.remove("nyit");
});

window.addEventListener("click", (e) => {
  if (e.target === m) {
    m.classList.remove("nyit");
  }
});