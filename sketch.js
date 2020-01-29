var myPattern = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(mouseY / 2, mouseY / 4, 255);

  for (var tileY = 0; tileY <= myPattern; tileY++) {
    for (var tileX = 0; tileX <= 400; tileX++) {
      var posX = windowWidth / 8 * tileX;
      var posY = windowHeight / 4 * tileY;

      strokeWeight(mouseX / 40);
      stroke(255 - mouseY / 4, 10, 255 - mouseY / 4);
      fill(255);

      rect(posX - 82, posY - 82, 20, 20);
      rect(posX, posY, 60, 60);
      rect(posX, posY, 20, 20);
      rect(posX + 40, posY + 40, 40, 40);
      rect(posX - 40, posY - 40, 40, 40);
      rect(posX + 40, posY - 40, 40, 40);
      rect(posX - 40, posY + 40, 40, 40);
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
