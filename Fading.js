var colorS = ['#ffdedb', '#ffa6b3', '#aca0de', '#839dd4', '#6075db'];
// set the color list of the stroke


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#5a05e3');
  noFill();

  for (var x = -25; x <= windowWidth; x += 15) {
    for (var y = -25; y <= windowHeight; y += 20) {

      var index = floor(random() * colorS.length);
      var colorHex = colorS[index];
      stroke(color(colorHex));
      strokeWeight(5);

      arc(x, y, 10, 200, PI - QUARTER_PI, -PI);

    }

  }

}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill(90, 5, 227,180);
  } else {
    fill(90, 5, 227,20);
  }
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
