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
  
  for (var i = 0; i < 160; i++) {
    var r = map(sin(frameCount), -1, 1, 100, 255)
    var g = map(i, 0, 20, 100, 255)
    var b = map(cos(frameCount), -1,1,255,100)
    
    stroke(r, g, b)
        
    rotate(frameCount/50)
    
    beginShape()
    for (var j = 0; j < 1000; j += 359){
      var rad = i * 2
      var x = rad * cos(j/2)
      var y = rad * sin(j/2)
      var z = sin(frameCount * 9 + i * 60) * 100
      
      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}