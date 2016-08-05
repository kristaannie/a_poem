function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Ranga");
}

lastTimeChanged = null;
poemIndex = 0;

function draw() {
  background(150);
  
  rectMode(CENTER);
  strokeWeight(6);
  noFill();
  
  seconds = millis()/1000;
  change = map(sin(seconds * .05), -1, 1, 0, 200);
  for(i=0; i<100; i+=20){
    stroke(change + i % 255,255,change * i % 255, 100);
    rect(windowWidth/2, windowHeight/2, windowWidth- 50 - i, windowHeight- 100 - i);
  }

// stroke(1);
 fill(199, 229, 181, 120);
 textAlign(CENTER);
 
 var poemFunctions = [poem1, poem2, poem3,poem4,poem5,poem6,poem7,poem8,poem9,poem10];
 if (millis() - lastTimeChanged >= 2000) {
    poemIndex = poemIndex + 1;
    if(poemIndex == poemFunctions.length) poemIndex = 0;
    lastTimeChanged = millis();
 }
 poemFunctions[poemIndex]();
  
}

function poem1() {
  textSize(120);
  text("i know what you need",width/2, height/2);
}

function poem2(){
  textSize(120);
  text("give up checking", width/2, height/2);
}

function poem3(){
  textSize(120);
  text("give up reaching", width/2, height/2);
}

function poem4(){
  textSize(120);
  text("give up smiling", width/2, height/2);
}

function poem5(){
  textSize(75);
  text("give up anything that flattens you", width/2, height/2);
}

function poem6(){
  textSize(115);
  text("what you need is insane", width/2, height/2);
}

function poem7(){
  textSize(115);
  text("what you need is easy", width/2, height/2);
}

function poem8(){
  textSize(70);
  text("you knew it once but got bored of it", width/2, height/2);
}

function poem9(){
  textSize(90);
  text("drop to your knees then go lower", width/2, height/2);
}

function poem10(){
  textSize(50);
  flicker = random(100,255)
  fill(random(100,170),0, flicker);
  text("what you need is at the center of the earth of you", width/2, height/2);
}