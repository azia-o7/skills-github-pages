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
ellipse(250,250,random(step*10),random(step*10))//Accident change of shapes
  pop()
}