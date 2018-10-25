// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  //Refreshes to next frame
  requestAnimationFrame(main);
};


// Start Game
var isGameStarted = false;
var then = Date.now();
reset();
main();
