//Genererer et random tal mellem 1-6 og udskriver til id="resultat"
function kastTerning() {
    var randomTal = Math.floor((Math.random() * 6) + 1);
    document.getElementById("resultat").innerHTML = randomTal;
}