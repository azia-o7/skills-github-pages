- - -
title: "Sine Waves"
date: 2024-05-16
- - -
# Sine Waves Experimentation
## The original project
Whilst learning about 3D graphics in p5.js, I branched off to do my own research about what I could do with 3D which is how I came across Sine Waves. I started of with the original code just to build the basic sine wave so I could experiment with it further.
I followed this tutorial that I found on ** YouTube ** which gave a basic understanding of Sine Waves and some experimentation with it.
https://youtu.be/vmhRlDyPHMQ?feature=shared
This is my starting point with the Sine Waves code.

Screenshot 1: 
![This is one screenshot of the code with the sine waves moving upwards.](/skills-github-pages/images/sine-wave-original-screenshot-1.png)
Screenshot 2: 
![And this is a screenshot of the code with the sine waves moving downwards](/skills-github-pages/images/sine-wave-original-screenshot-2.png)

The main code consists of for loops, maps, rotate and using sine and cosine to create the wave structure. The for loops create the number of waves in the structure but also what the structure looks like on a basic level. The ** for ** loop is used over the ** while ** loop because you as the user create the number of iterations. The ** map ** function re-maps a number within a specific range to another specific range. It calls one value which could be the number 3 between 0 and 10, and then remaps it within a different range for example, 0 to 100. So the returned value would be 30 as that is the same value as 3 within the original range. ** Rotate ** turns the shape and because I have paired it with ** frameCount **, it will constantly be rotating within that frame count. ** Sine ** oscillates the shape up and down and ** cosine ** oscillates the shape left and right. This is why it is called a sine wave since they both control the "wave" motion of the shape. Since the work relies on frameCounts, time is a very important factor and influence on this final project. I also added ** orbitControl ** so I could allow the user to change the angle of how they see the waves. This proved to be helpful within the variations as they started making different shapes when looked at from above.
Overall, I think the outcome of the Sine Waves with my project is similar to some of Dave Whyte's work since both of us used iterations to create different shapes and these both loop continously. One of his project ** Sphere Rings ** is a good example of this where it uses circles to make a sphere and it seems to use the ** map ** function to change the numbers from one range to another. A lot of his work uses the ** map ** function to change the value of the number from one range to another which shows the increasing size and position of the values. The link to his work ** Sphere Rings ** can be found here: https://dribbble.com/shots/1675477-Sphere-Rings

## The Original Code
```
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
```

## Variation 1
This is my first variation of the project. There are several noticable differences between the original and this variation. The main difference is that the shape is no longer circles but they are pentagons now. This was done by changing Line 25's third for loop rule from j += 10 to 75. This was something I found out by accident by just changing the values. From this experiment, the higher the number, the more defined edges it has since any number lower is more rounder and closer to a circle. The shape is also bigger as I added more "rings" to make it 80 rings instead of 50. This change was on Line 15. I did change Line 17's values on the green map but I think this just slightly changed how much the green impacts the waves. I decided to also change the rotate from ** frameCount ** to the a flat value of 5. This seems to have sped up the animation of how quickly it rotates around. Line 29 impacts the speed that the waves oscillates and I increased the numbers so it oscillates faster. This has created a more interesting shape for the project.

Screenshot 1: 
![This is one screenshot of the variation's code with the sine waves moving upwards.](/skills-github-pages/images/sine-wave-first-copy-screenshot-1.png)
Screenshot 2: 
![And this is a screenshot of the variation's code with the sine waves moving downwards](/skills-github-pages/images/sine-wave-first-copy-screenshot-2.png)

This is also where ** orbitControl ** comes in as well since if you click to look at this shape from above, it looks like a rose that is continously moving in a loop which arguably looks a lot better than the shape that the code had original created. This also looks a lot similar to some of Dave Whyte's work as well especially the piece "Chequered Waves". This piece has the same oscillation that both the original and this variation have, but the animation feels like a slower version of the rose's animation. This can be found here: https://dribbble.com/shots/3648612-Chequered-waves
![This is a screenshot of the bird eye's view of the waves which shows the Rose design](/skills-github-pages/images/sine-wave-first-copy-screenshot-3.png)

## Variation 1's Code
```
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
```

## Variation 2
This is my second variation of the project. This heavily deviates from the original work and turns it into something that doesn't even look like waves at all despite the fact that the oscillation is still there. They look more like daggers floating around in a spiral shape that changes into a variety of other shapes.

## Variation 2's Code