var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90);

  //calculating time using pre defined function using p5js.
  hr = hour();
  mn = minute();
  sc = second();

  // To create itreatine rotation.
  scAngel=map(sc,0,60,0,360);
  mnAngel=map(mn,0,60,0,360);
  hrAngel=map(hr%12,0,12,0,360);

  // drawing the seconds hand
  push();
  rotate(scAngel);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  // drawing the arcs.
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngel);

  push();
  rotate(hrAngel);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke(0,0,255);
  arc(0,0,200,200,0,hrAngel);

  push();
  rotate(mnAngel);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke(0,255,0);
  arc(0,0,250,250,0,mnAngel);
}
