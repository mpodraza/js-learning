(function () {
  'use strict';

  window.onload = main;

  function main() {


    var result = toDollars(3.82684301);

    document.write(result);


    function toDollars(pricePLN) {

      var result = pricePLN * 3.82684301;
      return result;

    }


  };

})();
