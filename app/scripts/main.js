(function () {
  'use strict';

  window.onload = main;

  function main() {
    var PLNInput = document.getElementById('PLN');
    var dollarsButton = document.getElementById('buttonDolars');
    var dollarsInput = document.getElementById('przekonwertowane');

    dollarsButton.onclick = function () {
      var kwotaWPLN = +PLNInput.value;
      var result = toDollars(kwotaWPLN);
      dollarsInput.innerHTML = '' + result;
    };


    function toDollars(pricePLN) {
      var result = pricePLN * 3.82684301;
      return result;

    }


  };

})();
