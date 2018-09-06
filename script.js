//Genererer et random tal mellem 1-6 og udskriver til id="resultat"
function kastTerning() {
    var randomTal = Math.floor((Math.random() * 6) + 1);
    document.getElementById("resultat").innerHTML = randomTal;

    if(randomTal == "6") {
        document.getElementById("vurdering").innerHTML = "Du slog en sekser! Du er kongen!"
    }
    else {
        document.getElementById("vurdering").innerHTML = "Du slog IKKE en sekser!"
    }
}

function tidligereSlag() {
    var forrigeSlag = document.getElementById("resultat").innerHTML;
    document.getElementById("tidligereSlag").innerHTML += ", " + forrigeSlag;
}