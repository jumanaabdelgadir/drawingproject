var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Jumana"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  background(0, 255, 0); // try changing this to a blue background
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(30, 20, 55, 55);// Draw a 30x20 pixel rectangle at coordinate (55,55)
  triangle(7004, 900, 777, 333, 88, 960);
  quad(608, 80, 400, 60, 300, 60, 45, 76);
  line(500, 500, 200, 200);//HERE IS THE LINE  

  fill("red");
  ellipse(200, 200, 200, 200);
  ellipse(250, 250, 200, 200);
  ellipse(300, 300, 200, 200);
  drawThreeYellowCircles();  
  drawOneBlueSquare();
    
}

function drawThreeYellowCircles() {
  fill("red");
  ellipse(200, 200, 200, 200);
  ellipse(250, 250, 200, 200);
  ellipse(300, 300, 200, 200);
}

function drawOneBlueSquare() {
  fill("blue");
  rect(250, 250, 200, 200);  
}