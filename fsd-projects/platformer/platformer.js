$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200, 0, 20, 300);
createPlatform(1350, 400, 40, 50, "white");
 createPlatform(1000, 0, 20, 650);
createPlatform(500, 650, 30, 700);
createPlatform(400, 100, 100, 450);
createPlatform(1200, 650, 100, 30)
createPlatform(1000, 600, 100, 30)
createPlatform(1200, 480, 100, 30)



    // TODO 3 - Create Collectables

createCollectable("steve", 1350, 300, 0.50, 0.80, "white");
createCollectable("diamond", 1000, 700, 0.5, 0.7);
createCollectable("max", 500, 550, 0.2, 0.10);



    
    // TODO 4 - Create Cannons
createCannon("right", 600, 2900);
createCannon("left", 300, 2000)
createCannon("top", 800, 1000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
