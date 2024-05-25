- - -
title: "Repetition"
date: 2024-05-23
- - -
# Repetition Experimentation
## The original project
This is the original bezier curve generative art video that I watched on YouTube. This helped me get a deeper understanding of Perlin Noise when it comes to making generative art and also controlling the **noise** function to make the computer draw similar to a human drawing. This is the video below: 
https://youtu.be/uctX1P3H3xM?feature=shared
This was my starting point with the code.

As for my final project, I wanted to focus on trying to get a computer to almost act like a human and creating generative art as well. I wanted the computer to create its own art and in several different styles using different shapes. There is a smaller amount of code to use because it relies on using Perlin Noise to control the flow and movement of the shapes similar to the flow field experiments I did. I wanted these experiments to focus more on the concept of whether a computer could draw like a human rather than create an actual piece of art. I wanted to focus on the shapes and their positions to create the pieces. I focused on different shapes for each part of the experiments.

The code is relatively simple for the original experiment. It relies on the creation of **variables**, and multiplying the **width** or **height** with the **Perlin Noise**. The Perlin Noise had its own equation with the **t variable** and multiplying that with a random number that I decide. It then has the **shape** which has the variables in it as the values and then give the t variable a final value to control the speed. The main differences from each part of the code are the number values and the shape changes. This can influence the outcome a lot depending on how high and how low those numbers are.

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
The next shape I worked with was the arc shape which was something I hadn't worked with before. It has less values to work with than the bezier curve but you can change the last value to be **PI, CHORD or OPEN** which are fill modes. I changed it to **CHORD** however, my code has **noFill** on it so it was there to stop p5.js from mentioning an error on it. What came from it was a simple drawing of arcs that are quickly being drawn on the screen in black and white. 

The main inspiration was a stop motion flipbook and the old Flipnote Studio application from the Nintendo DS. I wanted to see if the computer could draw in a stop motion style similarly to those. I think it worked out because the arc draws each line quickly in a way where you can see tha it is only drawing one line at a time. This gives it the stop motion sort of feel to it. This was one of the drawing techniques I wanted to try and get the computer to achieve and I think I pulled it off quite well. I could've however, added more to the final variant of this product and make it draw an actual object. At most, it looks like wooden wheels for carriages overlapping on each other but perhaps I could've drawn a wheel moving. It still has a stop motion feel to it however.

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
I wanted to combine two shapes for the next drawing and I wanted the computer to draw something that looked 3D with 2D shapes. I conjoined a triangle and a quadrilateral shape together to create a 3D design. I decided to the **fill** the shape in and keep it as a plain white colour so it could add the extra "lighting" to make it look like it was 3D. What came out of it was a moving butterfly like pattern drawing the shapes on the page. This weird moving shape created a 3D object that looked like a roll of fabric (satin to be precise) and it is placed at the bottom right corner to give it the feel that it is a roll of fabric without seeing the empty space underneath it. I think the shape came out kind of clunky and it only really works when the shape is thinner as when it is wider, it covers up most of the final drawing. I also think I could've found a way to stop the drawing after a certain amount of time as it just draws forever. The 3D effect did come out successfully though.

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
My final project was trying to use the Perlin Noise functions to make it look like the computer was trying to draw with two rainbow "pens". I wanted to try and get the computer to replicate the difficulty a person would have trying to draw with two pens and the slow pauses whilst they are drawing. This was done by changing the **noise** value until I found the perfect value that would make it seem like the computer was struggling to draw with two pens at the same time like a person would. I didn't want it to be two normal ellipses however so I changed them into random colour changing ellipses so it was a lot nicer to look at for a final project. However, I still think there could've been more I could have done to make it look interesting. I could've perhaps gotten them to trace an image that I could've downloaded into **p5.js** so it could've made something more than just a blob of rainbow colours. I do think that it does look like it has the intended effect, I just  could've done more with it. The experiments for this project were a lot more smaller in code, but they all showed different ways a computer could draw like a human in different ways.

Screenshot: <br>
![This is one screenshot of the code with the computer drawing 2 rainbow circle patterns artpiece.](/skills-github-pages/images/self-drawing-final-copy-screenshot.png)<br>
## Final Variation's Code
```
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
```
[See the Code here.](/skills-github-pages/creative-code/self-drawing-final-copy/index.html)