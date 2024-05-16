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
  
  for (var i = 0; i < 80; i++) {
    var r = map(sin(frameCount), -1, 1, 100, 255)
    var g = map(i, 0, 50, 100, 255)
    var b = map(cos(frameCount), -1, 1, 100, 255)
    
    stroke(r, g, b)
        
    rotate(5)
    
    beginShape()
    for (var j = 0; j < 360; j += 75){
      var rad = i * 2
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 6 + i * 20) * 35
      
      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}