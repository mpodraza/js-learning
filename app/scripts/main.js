var haslo = 'Baba z wozu koniom lżej';
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

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


function start() {
  var trescDiva = "";

  for (var i = 0; i < 35; i++) {
    trescDiva = trescDiva + '<div class="litera">A</div>';
    if (i == 6) {
      trescDiva = trescDiva + '<div style="clear:both;"></div>'
    }
  }

  document.getElementById("alfabet").innerHTML = trescDiva;


  wypiszHasło();
}