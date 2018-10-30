// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  //Refresh to next frame
  requestAnimationFrame(main);


};


// Start Game
var isGameStarted = false;
var then = Date.now();
reset();
main();

// Back Button
ctx.fillText("Go Back", 200, canvas.height / 2);

