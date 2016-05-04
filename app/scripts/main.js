(function () {
  'use strict';

  window.onload = doSomething;

  function doSomething() {
    var liczbaUchwyt = document.getElementById("number");
    var buttonUchwyt = document.getElementById("unsubscribe");
    buttonUchwyt.onclick = wypisz;


    function wypisz() {
      var napis = "";
      var liczba = liczbaUchwyt.value;

      for (var i = 1; i <= liczba; i++) {
        napis = napis + i + " ";
      }
      document.getElementById("wynik").innerHTML = napis;
    }


    /*
     * Suma liczb od 1 do przekazanego parametru
     * */
    function sum(param) {
    }


  };

})();
