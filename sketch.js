function setup() {
  createCanvas(1000,1000);

}

function draw() {
  background("red");

 

  var hr=hour();
  var mn=minute();
  var sc=second();

  translate(400,400);
  rotate(-90)

  var scAngle=map(sc,0,60,0,360);
  var mnAngle=map(mn,0,60,0,360);
  var hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("white");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  

 strokeWeight(7)
  noFill();
  stroke("purple");
  arc(0,0,610,610,0,scAngle);
  stroke(0,255,0);

  arc(0,0,630,630,0,mnAngle);
  stroke("black");


  
}
