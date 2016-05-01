(function () {
  'use strict';

  window.onload = main;

  function main() {
    var number1Input = document.getElementById('number1');
    var number2Input = document.getElementById('number2');
    var operationSelect = document.getElementById('operation');
    var calculateButton = document.getElementById('calculateButton');

    var resultSpan = document.getElementById('result');


    calculateButton.onclick = function () {
      var number1 = +number1Input.value;
      var number2 = +number2Input.value;
      var operator = operationSelect.options[operationSelect.selectedIndex].value;

      var result = calculate(number1, number2, operator);

      resultSpan.innerHTML = '' + result;

    };

  };



  function calculate(number1, number2, operator) {
    var result;

    if (operator === '*') {
      result = number1 * number2;
    } else if (operator === '+') {
      result = number1 + number2;
    } else if (operator === '-') {
      result = number1 - number2;
    } else if (operator === '/') {
      result = number1 / number2;
    }

    return result
  }

})();
