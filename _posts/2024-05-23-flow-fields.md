- - -
title: "Flow Fields"
date: 2024-05-23
- - -
# Flow Fields Experimentation
## The original project
From the sine waves experimentation, I had come across the flow fields that were made with Perlin Noise and decided to experiment with that for my next project. Like the sine waves, I started of with the original code so I could experiment with it further.
I followed this tutorial that I found on ** YouTube ** which let me get a basic understanding of Perlin Noise and the flow fields.
https://youtu.be/sZBfLgfsvSk?feature=shared

This is my starting point with the Perlin Noise Flow Fields code.

Screenshot 1: <br>
![This is one screenshot of the code with the flow fields moving in the original direction.](/skills-github-pages/images/flow-fields-original-screenshot-1.png)<br>
Screenshot 2: <br>
![And this is a screenshot of the code with the flow fields moving in different direction after I clicked it several times.](/skills-github-pages/images/flow-fields-original-screenshot-2.png)

The main code of the fields consists of arrays, for loops, noise, sine, cosine and createVector. The **for** loops is to create the number of particles that are flowing in the program on the screen at any given time. The **for** loop is used over the **while** loop because the number of particles is a constant variable that stays the same in the program. The **arrays** stores the number of iterations of the particles that happen in the program which allows the program to loop it in the **for** loop. These two both save time on writing lots of lines in the program. **Noise** is the most important part of the code. It is similar to random as in it returns random numbers to the user. However, this can be tuned to be more organic and smoother for a more realistic feel of the program. **Noise** also produces different results each time it loads up however, I have put **noiseSeed** so that it generates the same sequence each time. **Sine** oscillates the shape up and down and **cosine** oscillates the shape left and right. These basically control the particles' movement as well. **createVector** determines the particle's magnitude and direction in the program. I have assigned the **random** value to the width and height so that it is more natural in its movements as well and flows a lot more pleasingly to the eyes. I also added **mouseReleased** for some human interaction with the program so the user could click to change the direction of the particles.
Overall, the original flow fields gives me a lot to work with as I am able change variables and perhaps change the way that it looks. I was inspired by space for the flow fields experiments as the original project looks like shooting stars and further works in the experimentations add onto this as well. I was also similarly inspired by Dave Whyte again since having loops of iterations seems to be a common theme with my experiments. Dave Whyte also uses dots and other small shapes to create a bigger picture that flows smoothly. This is a link to one of his works "Star Swirl": https://dribbble.com/shots/1679277-Star-Swirl

## The Original Code
```
let particles = [];
const num = 1000;

const noiseScale = 0.01;

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255)
}

function draw() {
  background(0, 10);
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
```
[See the Code here. You can click the particles to change their direction.](/skills-github-pages/creative-code/flow-fields-original/index.html)

## Variation 1
This is my first variation of the project. It looks quite similar to the first project however, I changed the **num** variable to hold 10000 particles instead of the original 1000. I had also changed the **noiseScale** of the piece to 0.005 instead of 0.01. It does gives the work a little stutter but I think it fits in with the main difference which is the changing colours of the star field. The colors change every 60 frames to a random colour on the RGB scale. This combined with the stutter makes the color change look a lot smoother at times which was a complete accident on my part. This allows the colors to transition more seamlessly it seems as though they are changing colours with the movement of the particles. I really liked how this turned out despite it being unintentional with the change of the **noiseScale** to a completely random value I came up with. There wasn't a lot more to this piece other than it keeps the same loops and iterations as Dave Whyte's work did. It just feels like a more complete version of the starting point. I could've tried to make each particle a different colour to have a more interesting effect if I were to improve it.

Screenshot 1: <br>
![This is one screenshot of the code with the flow fields moving in the original direction.](/skills-github-pages/images/flow-fields-first-copy-screenshot-1.png)<br>
Screenshot 2: <br>
![And this is a screenshot of the code with the flow fields moving in different direction after I clicked it several times.](/skills-github-pages/images/flow-fields-first-copy-screenshot-2.png)

## Variation 1's Code
```
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
```
[See the Code here. You can click the particles to change their direction.](/skills-github-pages/creative-code/flow-fields-first-copy/index.html)

## Variation 2
This is my second variation of the project. This piece, like the sine waves' second piece, heavily deviates from the original starting point. I managed to create a static effect with the particles instead of having them moving which I thought deviated from my space theme I wanted to go with. However, TV static itself links to my previous space themed particles since 1% of the white noise of TV's static comes from CMBR (Cosmic Microwave Background Radiation) which is the electromagnetic radiation that was left over from the Big Bang billions of years ago (Source: https://www.forbes.com/sites/startswithabang/2019/11/13/this-is-how-your-old-television-set-can-prove-the-big-bang/). This made me appreciate the static pattern I created a little bit more than I did when I made it. I'm not sure if I could do more with the static but I could've done a different design if I were to do this project again. I do like the static theme though.

As for the main code, I changed the **num** variable again to 15000 this time. I changed the **noiseScale** to 0 this time, but this was by accident which is the main reason why the static pattern exists. This is because it isn't moving in any direction and hasn't been given a scale so it just stays still. This leads the **sine** and **cosine** to oscillate the particles which is what is causing the moving static as both are oscillating the particles. To test this out, I changed the **noiseScale** to 0.01 and the particles had become tiny moving particles that were moving. I also changed **Line 19's p.x * noiseScale** so it was **p.x / noiseScale**. If you were to change it back to normal, they would be straight particles moving upwards in a diagonal line. I finally changed the background to have a transparency of 50 which makes it look like there are more particles on the screen compared to if I were to leave it on 0.

Screenshot: <br>
![This is one screenshot of the code with the flow fields moving in the original direction.](/skills-github-pages/images/flow-fields-second-copy-screenshot.png)<br>

## Variation 2's Code
```
let particles = [];
const num = 15000;

const noiseScale = 0;

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255)
}

function draw() {
  background(0, 50);
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x / noiseScale, p.y * noiseScale);
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
```
[See the Code here](/skills-github-pages/creative-code/flow-fields-second-copy/index.html)

## Final Variation
This is my final variation of the flow fields and one of my more impressive experiments that I have to offer. It keeps the main particles of the first two experiments but it makes it look like a falling star map. When you click on the particles, it pauses some of them and lets the rest fall. This can be done multiple times and this allows it to create this almost 3D landscape from the falling particles which I found impressive. It deviates from the mostly computer controlled particles to having it half ran by the computer and half user input with clicking the particles. I really like how it blurs both 2D and 3D to make the final piece whilst keeping the space theme that I continued to have throughout these experiments. I could've tried to change the colour of the particles either having them all the same colour or different ones. However, I think the white suits the star map theme a bit more. To make it more interesting, I think changing the colour might have done it.

My final changes were changing the **num** value to 20000 and then changing the noiseScale to 0.001 which seems to run quite smoothly. I changed the background to 30% transparency and the main difference I did was change **Line 21's p.x += cos(a) to p.x + cos(a)**. The reason this was the main change is because I hadn't touched either of the **sine** or **cosine** code during these experiments so I decided to change it. The particles now do not oscillate left and right and they only go up and down. When clicking on them, they turn into dots that don't move but all the particles around do move. This was purely by experimenting on accident which is why my work ended up the way it did. In fact, p5.js puts a warning down for that line of code despite the fact that it still works.

Screenshot 1: <br>
![This is one screenshot of the code with the flow fields moving in the original direction.](/skills-github-pages/images/flow-fields-final-copy-screenshot-1.png)<br>
Screenshot 2: <br>
![And this is a screenshot of the code with the flow fields moving in different direction after I clicked it several times.](/skills-github-pages/images/flow-fields-final-copy-screenshot-2.png)

## Final Variation's Code
```
let particles = [];
const num = 20000;

const noiseScale = 0.001;

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255)
}

function draw() {
  background(0, 30);
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x + cos(a); //Accidentally found this out
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
```
[See the Code here. You can click the particles to change their direction.](/skills-github-pages/creative-code/flow-fields-final-copy/index.html)