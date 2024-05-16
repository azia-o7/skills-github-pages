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
  
  for (var i = 0; i < 100; i++) {
    var r = map(sin(frameCount), -1, 1, 100, 255)
    var g = map(i, 0, 20, 100, 255)
    var b = map(cos(frameCount), -1,1,255,100)
    
    stroke(r, g, b)
        
    rotate(frameCount/25)
    
    beginShape()
    for (var j = 0; j < 120; j += 30){
      var rad = i * 2
      var x = rad * cos(j/2)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 10) * 25
      
      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}