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