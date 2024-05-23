let particles = [];
let pathColour;
const num = 10000;
const noiseScale = 0.005;

function setup() {
  createCanvas(600, 600);
  pathColour = random(255)
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  frameRate(60)
}

function draw() {
  background(0, 10);
  stroke(pathColour)
  if (frameCount % 60 == 0) {
    pathColour = color(random(255), random(255), random(255));
  }
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}