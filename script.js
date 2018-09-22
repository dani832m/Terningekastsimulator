var count = 0;

/*  Genererer et random tal mellem 1-6 og udskriver til id="resultat".
    Baseret på tallet gives en tekstbaseret vurdering, og count inkrementeres.  */
function kastTerning() {
    count++;
    var randomTal = Math.floor((Math.random() * 6) + 1);
    document.getElementById("resultat").innerHTML = randomTal;

    if(randomTal == "1") {
        document.getElementById("vurdering").innerHTML = "Eins! En ægte éner, slår en éner <3"
    }
    else if(randomTal == "2") {
        document.getElementById("vurdering").innerHTML = "Snake Eyes. Guess who's watching -.-"
    }
    else if(randomTal == "3") {
        document.getElementById("vurdering").innerHTML = "Tre! Havde det været Ludo, havde du slået en stjerne."
    }
    else if(randomTal == "4") {
        document.getElementById("vurdering").innerHTML = "Fire - Slaget du ikke rigtig kan bruge til noget. Tillykke."
    }
    else if(randomTal == "5") {
        document.getElementById("vurdering").innerHTML = "En femmer. Så tæt på at slå en sekser! :("
    }
    else {
        document.getElementById("vurdering").innerHTML = "SEKSER! Du må stjæle en pakke!"
    }

    document.getElementById("totalCount").innerHTML = count;
}

/*  Tilføjer det tidligere slag til id="tidligereSlag". */
function tidligereSlag() {
    var forrigeSlag = document.getElementById("resultat").innerHTML;
    document.getElementById("tidligereSlag").innerHTML += ", " + forrigeSlag;
}