    let foglalasok = [];
    let foglalasok2 = [];

    function foglalasElkuldese1() {
        const nev1 = document.getElementById('nev1').value;
        const email1 = document.getElementById('email1').value;
        const datum1 = document.getElementById('datum1').value;
        const ido1 = document.getElementById('ido1').value;
        const asztal1 = document.getElementById('asztal1').value;

        let foglalt = false;
        for (let i = 0; i < foglalasok.length; i++) {
            let f = foglalasok[i];
            if (f.datum === datum1 && f.ido === ido1 && f.asztal === asztal1) {
                foglalt = true;
                break;
            }
        }

        if (foglalt) {
            alert("Ez az asztal már foglalt ezen a napon és időpontban!");
            return false;
        }

        if (nev1==""){
            alert("Kérlek töltsd ki a név mezőt!")
            return false;
        }
        if (datum1==""){
            alert("Kérlek töltsd ki a dátum mezőt!")
            return false;
        }
        if (ido1==""){
            alert("Kérlek töltsd ki az idő mezőt!")
            return false;
        }
        if (email1==""){
            alert("Kérlek töltsd ki az email mezőt!")
            return false;
        }
        if (asztal1==""){
            alert("Kérlek töltsd ki az asztal mezőt!")
            return false;
        }




        foglalasok.push({ nev: nev1, email: email1, datum: datum1, ido: ido1, asztal: asztal1 });

        document.getElementById('nev1').value = "";
        document.getElementById('email1').value = "";
        document.getElementById('datum1').value = "";
        document.getElementById('ido1').value = "";
        document.getElementById('asztal1').value = "";

        alert("Foglalás sikeresen rögzítve!");
        return false;
    }

    function foglalasElkuldese2() {
        const nev2 = document.getElementById('nev2').value;
        const email2 = document.getElementById('email2').value;
        const datum2 = document.getElementById('datum2').value;
        const ido2 = document.getElementById('ido2').value;
        const asztal2 = document.getElementById('asztal2').value;

        let foglalt2 = false;
        for (let i = 0; i < foglalasok2.length; i++) {
            let f = foglalasok2[i];
            if (f.datum === datum2 && f.ido === ido2 && f.asztal === asztal2) {
                foglalt2 = true;
                break;
            }
        }

        if (foglalt2) {
            alert("Ez az asztal már foglalt ezen a napon és időpontban a 2. emeleten!");
            return false;
        }

        foglalasok2.push({ nev: nev2, email: email2, datum: datum2, ido: ido2, asztal: asztal2 });

        document.getElementById('nev2').value = "";
        document.getElementById('email2').value = "";
        document.getElementById('datum2').value = "";
        document.getElementById('ido2').value = "";
        document.getElementById('asztal2').value = "";

        alert("Foglalás sikeresen rögzítve!");
        return false;
    }