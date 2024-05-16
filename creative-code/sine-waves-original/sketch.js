function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  orbitControl()
  
  rotateX(60)
  
  noFill()
  stroke(255)
  
  for (var i = 0; i < 50; i++) {
    var r = map(sin(frameCount), -1, 1, 0, 255)
    var g = map(i, 0, 20, 0, 255)
    var b = map(cos(frameCount), -1,1,255,0)
    
    stroke(r, g, b)
        
    rotate(frameCount/50)
    
    beginShape()
    for (var j = 0; j < 360; j += 10){
      var rad = i * 2
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 10) * 50
      
      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}