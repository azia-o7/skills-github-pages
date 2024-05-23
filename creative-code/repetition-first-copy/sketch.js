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