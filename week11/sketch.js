function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 249, 217);

  strokeWeight(5);

  stroke(247, 216, 37);

  for (var x = 0; x <= width; x += 100) {
    for (var y = 0; y <= height; y += 100) {
    fill(random(54, 168, 50), 0, random(227, 45, 136));

      ellipse(x, y, 50, 50);
      rect(175, 175, 55, 55)
  }
}
}
