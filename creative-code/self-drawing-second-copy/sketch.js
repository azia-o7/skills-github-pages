var t;

function setup() {
  createCanvas(500, 500)
  background(40);
  fill(255)
  t = 100;
}

function draw() {
  var x1 = width * noise(t + 256);
  var x2 = width / noise(t + 125);
  var x3 = width * noise(t + 90);
  var y1 = height / noise(t + 327);
  var y2 = height * noise(t + 47);
  var y3 = height / noise(t + 273);
  triangle(x1, y1, x2, y2, x3, y3);
  
  var x1q = width / noise(t + 382);
  var x2q = width * noise(t + 34);
  var x3q = width / noise(t + 38);
  var x4q = width * noise(t + 79);
  var y1q = height / noise(t + 343);
  var y2q = height * noise(t + 465);
  var y3q = height / noise(t + 236);
  var y4q = height * noise(t + 12);
  quad(x1q, y1q, x2q, y2q, x3q, y3q, x4q, y4q)
  t += 0.005;
}