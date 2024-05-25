- - -
title: "Sine Waves"
date: 2024-05-16
- - -
# Sine Waves Experimentation
## The original project
Whilst learning about 3D graphics in p5.js, I branched off to do my own research about what I could do with 3D which is how I came across Sine Waves. I started of with the original code just to build the basic sine wave so I could experiment with it further.
I followed this tutorial that I found on **YouTube** which gave a basic understanding of Sine Waves and some experimentation with it.
https://youtu.be/vmhRlDyPHMQ?feature=shared

This is my starting point with the Sine Waves code.

Screenshot 1: <br>
![This is one screenshot of the code with the sine waves moving upwards.](/skills-github-pages/images/sine-wave-original-screenshot-1.png)<br>
Screenshot 2: <br>
![And this is a screenshot of the code with the sine waves moving downwards](/skills-github-pages/images/sine-wave-original-screenshot-2.png)

The main code consists of for loops, maps, rotate and using sine and cosine to create the wave structure. The **for** loops create the number of waves in the structure but also what the structure looks like on a basic level. The **for** loop is used over the ** while ** loop because you as the user create the number of iterations. The **map** function re-maps a number within a specific range to another specific range. It calls one value which could be the number 3 between 0 and 10, and then remaps it within a different range for example, 0 to 100. So the returned value would be 30 as that is the same value as 3 within the original range. **Rotate** turns the shape and because I have paired it with **frameCount**, it will constantly be rotating within that frame count. **Sine** oscillates the shape up and down and **cosine** oscillates the shape left and right. This is why it is called a sine wave since they both control the "wave" motion of the shape. Since the work relies on frameCounts, time is a very important factor and influence on this final project. I also added **orbitControl** so I could allow the user to change the angle of how they see the waves. This proved to be helpful within the variations as they started making different shapes when looked at from above.
Overall, I think the outcome of the Sine Waves with my project is similar to some of Dave Whyte's work since both of us used iterations to create different shapes and these both loop continously. One of his project **Sphere Rings** is a good example of this where it uses circles to make a sphere and it seems to use the **map** function to change the numbers from one range to another. A lot of his work uses the **map** function to change the value of the number from one range to another which shows the increasing size and position of the values. The link to his work **Sphere Rings** can be found here: https://dribbble.com/shots/1675477-Sphere-Rings

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
[See the Code here. You can click and drag the sine waves to change your viewpoint of them.](/skills-github-pages/creative-code/sine-waves-original/index.html)

## Variation 1
This is my first variation of the project. There are several noticable differences between the original and this variation. The main difference is that the shape is no longer circles but they are pentagons now. This was done by changing Line 25's third for loop rule from **j += 10 to 75**. This was something I found out by accident by just changing the values. From this experiment, the higher the number, the more defined edges it has since any number lower is more rounder and closer to a circle. The shape is also bigger as I added more "rings" to make it 80 rings instead of 50. This change was on Line 15. I did change Line 17's values on the green map but I think this just slightly changed how much the green impacts the waves. I decided to also change the rotate from **frameCount** to the a flat value of 5. This seems to have sped up the animation of how quickly it rotates around. Line 29 impacts the speed that the waves oscillates and I increased the numbers so it oscillates faster. This has created a more interesting shape for the project.

I do like how this one turned out but I think I could've gone with a more interesting and smoother shape for when you look at it from the side. I think I could've portrayed the flower from the top whilst having a nicer sine wave to look at from the default view.

Screenshot 1: <br>
![This is one screenshot of the variation's code with the sine waves moving upwards.](/skills-github-pages/images/sine-wave-first-copy-screenshot-1.png)<br>
Screenshot 2: <br>
![And this is a screenshot of the variation's code with the sine waves moving downwards](/skills-github-pages/images/sine-wave-first-copy-screenshot-2.png)

This is also where **orbitControl** comes in as well since if you click to look at this shape from above, it looks like a rose that is continously moving in a loop which arguably looks a lot better than the shape that the code had original created. This also looks a lot similar to some of Dave Whyte's work as well especially the piece "Chequered Waves". This piece has the same oscillation that both the original and this variation have, but the animation feels like a slower version of the rose's animation. This can be found here: https://dribbble.com/shots/3648612-Chequered-waves

Screenshot 3: <br>
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
[See the Code here. You can click and drag the sine waves to change your viewpoint of them.](/skills-github-pages/creative-code/sine-waves-first-copy/index.html)

## Variation 2
This is my second variation of the project. This heavily deviates from the original work and turns it into something that doesn't even look like waves at all despite the fact that the oscillation is still there. They look more like daggers floating around in a spiral shape that changes into a variety of other shapes as time passes. I increased the "ring" total again to 100 which has created more iterations to the wave. I changed the rotate back to **frameCount** but I decided to divide it by half the amount so it was still moving faster than the originsl. As for the shape looking like flying daggers, I decreased Line 25's original **j < 360 value to 120** which seemed to create the harsher shape and then I increased the **j += 10** from the original to **30** so it would separate the daggers more. I also halved Line 29's final multiplication from **50 to 25** so that the shape would be a lot more flat. By chance, the program decided to create new shapes when you look at it from above as time passes which was an accident that I have kept within the program since it brought a different perspective to the code. The patterns seem to be flowers, pinwheels, propellers but there is also a serpent-like pattern as well which brings a variety of different shapes to the program.

This is where my code seems to divert from looking similar to Dave Whyte's work since he works with either dots or defined shapes whilst my work now has ambigious shapes being created from the dagger pieces that are flying around on the screen. It's pretty much up to the user as to what shapes they see on the screen which brings a different meaning to whoever views the piece. I do think that again, I could've come up with a better shape for looking at it from the default angle since it doesn't look as interesting as the view from the top.

Screenshot 1: <br>
![This is one screenshot of the variation's code at the start of the code.](/skills-github-pages/images/sine-wave-second-copy-screenshot-1.png)<br>
Screenshot 2: <br>
![And this is a screenshot of the variation's code with the base shape of the code.](/skills-github-pages/images/sine-wave-second-copy-screenshot-2.png)

Screenshot 3: <br>
![This is one screenshot of the variation's code and one of the many bird eye view shapes it makes.](/skills-github-pages/images/sine-wave-second-copy-screenshot-3.png)<br>
Screenshot 4: <br>
![And this is a screenshot of the variation's code and one of the many bird eye view shapes it makes.](/skills-github-pages/images/sine-wave-second-copy-screenshot-4.png)


## Variation 2's Code
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
```
[See the Code here. You can click and drag the sine waves to change your viewpoint of them.](/skills-github-pages/creative-code/sine-waves-second-copy/index.html)

## Final Variation
My final variation also heavily diverts from the original design. The design is completely different from what I originally intended. I originally wanted to make the code has the smallest possible shapes by changing the value to **359 as 360** cannot make a shape. I then again increased the number of iterations again so there are now **160 iterations**. I increased the rotation's frameCount back up to the original /50. I changed the **j < 360 to 1000**. I'm not sure what this did but when trying to decrease the number, it failed to make the dots so I kept it at 1000. I then edited Line 28 for the first time by dividing **j by 2** and I changed Line 29 again by increasing several of the numbers to increase the layers of the dots. This created a program that looked like it had rainbow particles jumping around in circles and occassionally making shapes. 

Screenshot 1: <br>
![This is one screenshot of the variation's code before I changed Line 27](/skills-github-pages/images/sine-wave-final-copy-screenshot-1.png)

However, upon changing Line 27 to **divide j by 2**, it created a completely different design. It turned the dots into stars that look like they have been drawn with lines only. 

Screenshot 2: <br>
![This is one screenshot of the variation's code after I changed Line 27](/skills-github-pages/images/sine-wave-final-copy-screenshot-2.png)

This was an accident that I decided to keep as I think it followed the theme I seemed to be keeping to which was perspective and controlling what you see within a series of iterations. I think perspective became a key part of my code when I worked on the first variation and was a theme I carried through to the other ones. Again, this work diverts to be it's own project compared to Dave Whyte's work which is what the original was similar to. I think the final piece could've been a lot better shape wise from the default view as I think I focused more on what it looked like from the top and forgot about what it could look like from the original angle. I do like how the sine waves experiments turned out, it could've been executed a bit more smoothly though.

Screenshot 3: <br>
![This is one screenshot of the variation's code and one of the many bird eye view shapes it makes.](/skills-github-pages/images/sine-wave-final-copy-screenshot-3.png)


## Final Variation's Code
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
```
[See the Code here. You can click and drag the sine waves to change your viewpoint of them.](/skills-github-pages/creative-code/sine-waves-final-copy/index.html)