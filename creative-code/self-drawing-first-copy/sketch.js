var t;

function setup() {
  createCanvas(500, 500)
  background(255);
  noFill();
  t = 200;
}

function draw() {
  var x1 = width * noise(t + 200);
  var x2 = width * noise(t + 46);
  var x3 = width / noise(t + 450);
  var y1 = height * noise(t + 276);
  var y2 = height / noise(t + 159);
  var y3 = height * noise(t + 20);

  arc(x1, y1, x2, y2, x3, y3, CHORD);
  t += 0.009;
}