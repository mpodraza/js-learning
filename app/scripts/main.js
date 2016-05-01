(function () {
  'use strict';

  window.onload = doSomething;

  function doSomething() {
    //calculate(3, 2, '*');


    var result = superCalculate([1, 4, 8, 12, 25], '+');
    document.write(result);
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


  function polacz(charsTable) {
    var result = '';

    for (var i = 0; i < charsTable.length; i++) {
      result = result + charsTable[i];
    }

    return result;
  }

  function sum(numberTable) {
    var result = 0;
    for (var i = 0; i < numberTable.length; i++) {
      result = result + numberTable[i]
    }

    return result

  }

  function superCalculate(sCalculateTable, operator) {
    var result = sCalculateTable[0];

    for (var i = 1; i < sCalculateTable.length; i++) {
      result = calculate(result, sCalculateTable[i], operator);
    }
    return result;

  }

  return result

})();
