(function () {
  'use strict';

  window.onload = main;

  function main() {
    var ball = document.getElementById('ball');
    var blueBall = document.getElementById('blueBall');

    var moveLeftButton = document.getElementById('moveLeft');
    var moveRightButton = document.getElementById('moveRight');
    var moveUpButton = document.getElementById('moveUp');
    var moveDownButton = document.getElementById('moveDown');

    moveLeftButton.onclick = moveLeft;
    moveRightButton.onclick = moveRight;
    moveUpButton.onclick = moveUp;
    moveDownButton.onclick = moveDown;


    function moveLeft() {
      var actualLeftPosition = +(ball.style.left.replace('px', ''));
      if (actualLeftPosition > 0) {
        var newLeftPosition = actualLeftPosition - 10;
        ball.style.left = newLeftPosition + 'px';
      }

      removeBlueBallIfCollide();

    }

    function moveRight() {
      var actualLeftPosition = +(ball.style.left.replace('px', ''));
      if (actualLeftPosition < 340) {
        var newLeftPosition = actualLeftPosition + 10;
        ball.style.left = newLeftPosition + 'px';
      }

      removeBlueBallIfCollide();
    }

    function moveUp() {
      var actualTopPosition = +(ball.style.top.replace('px', ''));
      if (actualTopPosition > 0) {
        var newTopPosition = actualTopPosition - 10;
        ball.style.top = newTopPosition + 'px'
      }

      removeBlueBallIfCollide();
    }

    function moveDown() {
      var actualTopPosition = +(ball.style.top.replace('px', ''));
      if (actualTopPosition < 340) {
        var newTopPosition = actualTopPosition + 10
        ball.style.top = newTopPosition + 'px'
      }

      removeBlueBallIfCollide();
    }


    function removeBlueBallIfCollide() {
      var actualRedLeftPosition = +(ball.style.left.replace('px', ''));
      var actualRedTopPosition = +(ball.style.top.replace('px', ''));
      var actualBlueLeftPosition = +(blueBall.style.left.replace('px', ''));
      var actualBlueTopPosition = +(blueBall.style.top.replace('px', ''));

      //Math.abs(-10);
      //Math.abs(10);
      // LUB: ||
      // I : &&

      var distanceX = Math.abs(actualRedLeftPosition - actualBlueLeftPosition);
      var distanceY = Math.abs(actualRedTopPosition - actualBlueTopPosition);

      if (distanceX < 60 && distanceY < 60) {
        //blueBall.parentNode.removeChild(blueBall);
        var newLeftPosition = getRandomInt(35) * 10;
        var newTopPosition = getRandomInt(35) * 10;
        blueBall.style.left = newLeftPosition + 'px';
        blueBall.style.top = newTopPosition + 'px';
      }
    }


    function getRandomInt(n) {
      return Math.floor((Math.random() * n));
    }


  };

})();
