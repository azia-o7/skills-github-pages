var t;

function setup() {
  createCanvas(500, 500)
  background(255);
  stroke(0, 30);
  noFill();
  t = 100;
}

function draw() {
  var x1 = width * noise(t + 115);
  var x2 = width * noise(t + 200);
  var x3 = width * noise(t + 300);
  var x4 = width * noise(t + 400);
  var y1 = height * noise(t + 255);
  var y2 = height * noise(t + 275);
  var y3 = height * noise(t + 295);
  var y4 = height * noise(t + 455);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  t += 0.005;
}