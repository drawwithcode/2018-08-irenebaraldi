var value = 0;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  angleMode(DEGREES);

  // by defaults equals to 30
  setShakeThreshold(10);
  frameRate(12);
}

function draw() {
  background(r, g, b);


    fill(g, b, r);
    noStroke();
    ellipse(width/2, height/2, value*1.1);

fill(255);
text('shake and rotate', 100, 100);
textSize(100);

}

function deviceTurned(){
   myTurnedAxis = turnAxis;

   if(turnAxis === 'Z') {
		b = random()*255;
	} else if(turnAxis === 'X') {
		r = random()*255;
	} else if(turnAxis === 'Y') {
		g = random()*255;
	}

}

function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}
