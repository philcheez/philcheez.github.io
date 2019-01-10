function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  noStroke();
  fill(255,100,0,100);
  rect(200,200,100,100);
  
  stroke(100,100,100);
  strokeWeight(3)
  fill(250,0,0);
  ellipse(mouseX,mouseY,random(10,100));
  
  stroke(200,0,0);
  line(0,200,400,200);
  
  fill(random(0,255),random(0,255),random(0,255));
  beginShape();
  vertex(300,200);
  vertex(200,300);
  vertex(400,300);
  vertex(300,400);
  endShape(CLOSE);
}