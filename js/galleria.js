document.addEventListener("DOMContentLoaded", () => {
    const kepek = document.querySelectorAll(".galleria img");
    const felugro = document.getElementById("felugro");
    const felugroKep = document.getElementById("felugrokep");
    const felugroBezar = document.getElementById("kepbezaras");

    kepek.forEach(img => {
        img.addEventListener("click", () => {
            felugroKep.src = img.src;
            felugro.style.display = "flex";
        });
    });

    felugroBezar.addEventListener("click", () => {
        felugro.style.display = "none";
    });

    felugro.addEventListener("click", (e) => {
        if (e.target === felugro) {
            felugro.style.display = "none";
        }
    });
});
