document.addEventListener("DOMContentLoaded", function () {
  console.log("Visszajelzes.js betöltve");

  const button = document.getElementById("gomb");

  button.addEventListener("click", function () {
    const felhasznalonev = document.getElementById("felhasznalonev");
    const boldogsag = document.getElementById("boldogsag");
    const kiszolgalas = document.getElementById("kiszolgalas");
    const koktelok = document.getElementById("koktelok");
    const tisztasag = document.getElementById("tisztasag");
    const megjegyzes = document.getElementById("megjegyzes");
    const feltetelek = document.getElementById("feltetelek");
    const ital = document.getElementById("ital");

    if (!felhasznalonev.value.trim()) {
      alert("Kérjük, add meg a felhasználónevedet!");
      return;
    }
    if (!feltetelek.checked) {
      alert("Kérjük, fogadd el az adatkezelési feltételeket!");
      return;
    }
  if (felhasznalonev.value === felhasznalonev.value.toLowerCase()) {
      alert("Legalább egy nagybetűnek kell lennie a felhasználónévben!");
    return;
  }
    const tablazat = document.getElementById("visszajelzes-tablazat");
    const tbody = tablazat.querySelector("tbody");

    const osszatlag = ((parseInt(boldogsag.value) + parseInt(kiszolgalas.value) + parseInt(koktelok.value) + parseInt(tisztasag.value)) / 4).toFixed(2);

    const sor = document.createElement("tr");
    sor.innerHTML = `
      <td>${felhasznalonev.value}</td>
      <td>${osszatlag}</td>
      <td>${ital.value}</td>
      <td>${megjegyzes.value}</td>
    `;
    tbody.appendChild(sor);

    const sorok = tbody.querySelectorAll("tr");
    let osszeg = 0;
    sorok.forEach(s => {
      osszeg += parseFloat(s.children[1].innerText);
    });

    const atlag = (osszeg / sorok.length).toFixed(2);

    let tfootCella = document.querySelector("tfoot tr td:nth-child(2)");
    if (!tfootCella) {
      tfootCella = document.createElement("td");
      document.querySelector("tfoot tr").appendChild(tfootCella);
    }
    tfootCella.innerText = atlag;

    felhasznalonev.value = "";
    boldogsag.value = 10;
    kiszolgalas.value = 10;
    koktelok.value = 10;
    tisztasag.value = 10;
    ital.value = "";
    megjegyzes.value = "";
    feltetelek.checked = false;

    alert("Köszönjük a visszajelzésedet!");
  });
});
