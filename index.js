;(function() {
  'use strict';

  const canvas = document.querySelector('canvas');
  const world = {
    '0-0':  [0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,0,0],
    '0--10': [1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1,
              1,1,1,1,1,1,1,1,1,1]
  };

  let camera = {
    x: 0,
    y: 0,
    box 5
  };

  let player = {x: 4, y: 0, size: 5};

  canvas.setAttribute('height', window.innerHeight);
  canvas.setAttribute('width', window.innerWidth);

  const ctx = canvas.getContext('2d');

  window.addEventListener('keydown', onKeyPress);

  function onKeyPress(e) {
    switch (e.keyCode) {
      case 37:
        player.x -= 1;
        break;
      case 39:
        player.x += 1;
        break;
      case 40:
        player.y -= 1;
        break;
      default:
    }
  }

  function drawPlayer(player) {
    ctx.beginPath();
    ctx.arc(player.x * player.size + player.size/2,
            window.innerHeight - player.y * player.size - player.size / 2, player.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function drawGround(player) {
    world[player.x + '-' + player.y].forEach((v) =>
        ctx.fillRect(player.x)
        )
  };

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawPlayer(player);
    drawGround(player);
    requestAnimationFrame(draw);
  }

  draw();

})();
