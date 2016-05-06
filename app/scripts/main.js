var haslo = 'Łukasz';
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ileSkuch = 0

var haslo1 = "";

for (var i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") {
    haslo1 = haslo1 + " ";
  }
  else {
    haslo1 = haslo1 + "-";
  }

}

function wypiszHasło() {
  document.getElementById('haslo').innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";


function start() {
  var tresc_diva = "";

  for (i = 0; i <= 34; i++) {
    var element = "lit" + i;
    tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
    if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;
  wypiszHasło();
}

String.prototype.ustawZnak = function (miejsce, znak) {
  if (miejsce > this.length - 1)return this.toString();
  else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);


};

function sprawdz(nr) {
  var trafiona = false;
  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == litery[nr]) {
      haslo1 = haslo1.ustawZnak(i, litery[nr]);
      trafiona = true;
    }
  }
  if (trafiona == true) {
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#006600";
    document.getElementById(element).style.color = "#00ff00";
    document.getElementById(element).style.border = "3px solid #00ff00";
    document.getElementById(element).style.cursor = "default";
    wypiszHasło();
  }
  else {
    var element = "lit" + nr;
    document.getElementById(element).style.background = "#660000";
    document.getElementById(element).style.color = "#ff0000";
    document.getElementById(element).style.border = "3px solid #ff0000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    ileSkuch++;
    var obraz = "img/s" + ileSkuch + ".jpg";
    document.getElementById('szubienica').innerHTML = '<img src="' + obraz + '" alt=""/>';

  }

  if (haslo == haslo1) {
    document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }

  if (ileSkuch >= 9) {
    document.getElementById("alfabet").innerHTML = "Przykro mi. Prawidłowe hasło to: " + haslo + '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }


}




