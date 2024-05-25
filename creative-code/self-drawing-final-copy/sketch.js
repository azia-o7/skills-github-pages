let r, g, b;
var t;

function setup() {
  createCanvas(600, 600)
  background(0);
  t = 100;
}

function draw() {
  var x1 = width * noise(t + 43);
  var x2 = width * noise(t + 94);
  var y1 = height * noise(t + 24);
  var y2 = height * noise(t + 45);
  r = 255 * noise(t+26);
  g = 255 * noise(t+31);
  b = 255 * noise(t+43);
  
  fill(r, g, b);
  noStroke();
  ellipse(x1, y1, 80, 80)
  
  ellipse(x2, y2, 80, 80)
  t += 0.009;
}