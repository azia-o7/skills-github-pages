- - -
title: "Repetition"
date: 2024-05-23
- - -
# Repetition Experimentation
## The original project
Screenshot: <br>
![This is one screenshot of the code with the computer drawing a bezier curve artpiece.](/skills-github-pages/images/self-drawing-original-screenshot.png)<br>
## The Original Code
```
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
```
[See the Code here.](/skills-github-pages/creative-code/self-drawing-original/index.html)

## Variation 1
Screenshot: <br>
![This is one screenshot of the code with the computer drawing a arc artpiece.](/skills-github-pages/images/self-drawing-first-copy-screenshot.png)<br>
## Variation 1's Code
```
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
```
[See the Code here.](/skills-github-pages/creative-code/self-drawing-first-copy/index.html)

## Variation 2
Screenshot: <br>
![This is one screenshot of the code with the computer drawing a conjoined quadralateral and triangle artpiece.](/skills-github-pages/images/self-drawing-second-copy-screenshot.png)<br>
## Variation 2's Code
```
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
```
[See the Code here.](/skills-github-pages/creative-code/self-drawing-second-copy/index.html)

## Final Variation
Screenshot: <br>
![This is one screenshot of the code with the computer drawing 2 rainbow circle patterns artpiece.](/skills-github-pages/images/self-drawing-final-copy-screenshot.png)<br>
## Final Variation's Code
```
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
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  fill(r, g, b);
  noStroke();
  ellipse(x1, y1, 80, 80)
  
  ellipse(x2, y2, 80, 80)
  t += 0.009;
}
```
[See the Code here.](/skills-github-pages/creative-code/self-drawing-final-copy/index.html)