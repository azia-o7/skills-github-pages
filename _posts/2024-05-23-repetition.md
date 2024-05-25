- - -
title: "Repetition"
date: 2024-05-23
- - -
# Repetition Experimentation
## The original project and First Variation.
Earlier within the module, we had a workshop on repetition, variation and chance and Vera Molnar. Her work was mainly iterating shapes into different sizes across the paper whist having them animated at the same time. I was inspired by this but wanted to go my own route with this. I experimented for the entirety of the lesson and ended up with this starting piece for my work followed by the first variation of it. I decided that this was going to be more showcase piece as this was my most original work that mostly came from me and not from a YouTube video that I had found for inspiration.
Screenshot 1: <br>
![This is one screenshot of Vera's work since her website was not working.](/skills-github-pages/images/vera-molnar-example-work.png)<br>
Screenshot 2: <br>
![This is one screenshot of my original experimentation](/skills-github-pages/images/repetition-original-screenshot.png)<br>
Screenshot 3: <br>
![This is one screenshot of my transparent variation of the original](/skills-github-pages/images/repetition-first-copy-screenshot.png)<br>

The main code is more simple compared to the flow fields and sine waves. It uses for loops, translate, rotate and push/pop along with frameRate. ** For ** loops draws the shapes that have been called from the drawTile ** function ** that I created which had the code for the rectangles in it. This would allow the rectangles to be in different positions across and down because of the iteration. ** Translate ** places the rectangle down on the screen and this is then looped by the ** for ** loop. ** Rotate ** is what is causing it to be animated as it is rotating at a specific ** frameCount ** across. ** Push ** and ** Pop ** controls the shapes of the document without within them so it doesn't affect anything outside of the program. This was so I could easily translate the shapes within the function that I call within the loop. 

The outcome created this animated pattern with the rectangles that would occassionally turn into a wave pattern. For the variation, I added a simple ** noFill ** function so that shapes were transparent. I actually like this version more because it feels more like a black and white drawing the computer created. The wave animation also looks like it flows a lot more naturally on the transparent version than it does on the original starting point I had. They both keep the black and white theme that Vera Molnar had for the artwork shown above as well. I didn't really have a theme other than just experiementing with the code but I knew for later experiments in this one, I wanted to have some sort of theme to them.
## The Original Code
```
let step
let numAcross=40

function setup() {
  createCanvas(500, 500);
  step=width/numAcross
  frameRate(10)
}

function draw() {
  background(220);
  
  for(let i=0; i<numAcross; i++){
    for (let j=0; j<numAcross; j++){
      drawTile(i,j,step)
    }
  }
}

function drawTile(across,down,step){
  push()
  translate((across+0.5)*step,(down+0.5)*step)
  angleMode(DEGREES)
  rotate(frameCount*across)
  rect(0,0,random(step*5),random(step))
  pop()
}
```
[See the Code here.](/skills-github-pages/creative-code/repetition-original/index.html)
## Variation 1's Code
```
let step
let numAcross=40

function setup() {
  createCanvas(500, 500);
  step=width/numAcross
  frameRate(10)
}

function draw() {
  background(220);
  
  for(let i=0; i<numAcross; i++){
    for (let j=0; j<numAcross; j++){
      drawTile(i,j,step)
    }
  }
}

function drawTile(across,down,step){
  let numSquares=4
  noFill()
  push()
  translate((across+0.5)*step,(down+0.5)*step)
  angleMode(DEGREES)
  rotate(frameCount*across)
  for(let k=0; k<numSquares; k++){
    rect(0,0,random(step*5),random(step))
  }
  pop()
}
```
[See the Code here.](/skills-github-pages/creative-code/repetition-first-copy/index.html)

## Variation 2
I decided to try and work with a different shape for the next piece so I decided to use the ellipse shape instead. I kept playing around with the movement, colour and positioning until I got to this animated eye effect which was gray scaled. I did try to do a random colour effect initially but I could only get it to cycle through gray scaled colours. I had also managed to get them to all layer on top of each other to create this sort of multiple changing eyes effect. I went for this design in the end and coloured it in a dark gray to symbolise a kind of dark feeling. I was somewhat inspired by the "biblically accurate" angels that were written in the Ezekiel verses and the emphasis on how many eyes they had. I wanted to relate this to some people's fear of AI or their phones and computers listening and watching everything humans do similary to the angels. People have also found the "biblically accurate" angels disturbing as well when they were making the rounds on the internet in 2010. With the well known quote, "do not be afraid", I wanted to have the same sort of unsettling feeling that AI and the "biblically accurate" angels give people.

Screenshot: <br>
![This is a picture of a "biblically accurate" angel that was making its rounds on the internet in 2010](/skills-github-pages/images/biblically-accurate-angel.webp)<br>

As for the code differences between the two, I halved the ** numAcross ** value so that my program didn't crash as that was an easy way for the program to break. I changed the background to a different colour to fit the mood of the piece. I changed the ** translate ** figures and made it an ellipse with  ** random ** step values multiplied by 10. I had to turn the ** rotate ** to 360 as I only wanted one centre eye so I had to remove ** frameCount **. I found any other number started to the move piece off screen so 360 was the best I could do to make sure the piece stayed in one place.

Screenshot: <br>
![This is one screenshot of my circle variation of the original](/skills-github-pages/images/repetition-second-copy-screenshot.png)<br>
## Variation 2's Code
```
let step
let numAcross=20

function setup() {
  createCanvas(500, 500);
  step=width/numAcross
  frameRate(10)
}

function draw() {
  background(120);
  
  for(let i=0; i<numAcross; i++){
    for (let j=0; j<numAcross; j++){
      drawTile(i,j,step)
    }
  }
}

function drawTile(across,down,step){
  push()
  translate((across-0.2)/step,(down+0.9)/step)
  angleMode(DEGREES)
  rotate(360)
  fill(45)
ellipse(250,250,random(step*10),random(step*10))
  pop()
}
```
[See the Code here.](/skills-github-pages/creative-code/repetition-second-copy/index.html)

## Final Variation and **Showcase Piece**
This is my final variation and my main showcase piece of all the experiments I have done. I went back to rectangle shapes and started to experiment trying to create a moving structure out of the smaller pieces. After much trial and error, I made my final structure. I kept the colour scheme black and white since I was inspired by the music video for Lagtrain and even the song somewhat inspired me as well (Source: https://youtu.be/UnIhRpIT7nc?feature=shared). Another music video that somewhat inspired the main structure of the piece was Patchwork Eden as they have 3D block like buildings and other shapes to create strange looking structures. Albeit, the music video has a more colourful tone to it (Source: https://youtu.be/ZlyQu4LGyxo?feature=shared). The piece also looks like TVs that have been stacked on top of each other which also links to the Patchwork Eden music video as there was a distorted TV character within that video as well. I liked how this one turned out and I had a lot of fun trying to experiment with creating the final structure to what I wanted it to look like based on my original idea.

The final alterations for this code was changing the outer **for** loop

Screenshot: <br>
![This is the screenshot of the showcase piece](/skills-github-pages/images/repetition-final-copy-screenshot.png)

## Final Variation's Code
```
let step
let numAcross=40

function setup() {
  createCanvas(500, 500);
  step=width/numAcross
  frameRate(10)
}

function draw() {
  background(220);
  
  for(let i=0; i<360; i++){//Accident
    for (let j=0; j<numAcross; j++){
      drawTile(i,j,step)
    }
  }
}

function drawTile(across,down,step){
  push()
  translate((across*2)/step,(down*2)*step)//Accident
  angleMode(DEGREES)
  rotate(30)//Accident
  rect(225,0,random(step*10),random(step*5))//Accident
  pop()
}
```
[See the Code here.](/skills-github-pages/creative-code/repetition-final-copy/index.html)
