let phase =11 ;
let zoff = 0;
let Darumad;
let Darumad1;
let song;
let shapes = [];
let img;

function preload()
{
  Darumad = loadFont("summer85.ttf");
  Darumad1 = loadFont("VCR_OSD_MONO_1.001 2.ttf");
  song = loadSound('Whitney Houston - I Wanna Dance With Somebody  (2).flac',loaded);
  img = loadImage('QR.png');
}


function loaded()
{
  song.play();
}


function setup()
{
  createCanvas(800, 1000);
  song.loop();
}


function draw()
{
  background(12);
  
  
  for (let i = 0; i < shapes.length; i++)
  {
    const shape = shapes[i];
    shape.display();
  }

  // Generate a random shape every second
  if (frameCount % 60 === 0) {
    generateRandomShape();
  }

  
  textStyle(NORMAL);
  stroke(12)
  strokeWeight(1)
  fill(255);
  textSize(32);
  textFont(Darumad1);
  textLeading((mouseX / width) * 32);
  text("What the Heck is Electronic Mail", 30, 40, 200, 200);

  fill(4);
  stroke(250);
  strokeWeight(6);
  textStyle(BOLD);
  textSize(200);
  textFont(Darumad);
  text("THE 80s", 100, 550);
  
  fill(250);
  stroke(0)
  strokeWeight(1);
  
  textStyle(NORMAL);
  textSize(30);
  textFont(Darumad1);
  text("Generative Poster 2023", 220, 630);
  
  strokeWeight(2);
  textStyle(NORMAL);
  textSize(50);
  textFont(Darumad1);
  text("Yuval Edri", 22, 930);
  
  textStyle(NORMAL);
  textSize(70);
  textFont(Darumad1);
  text("21", 680, 100);
  
  textStyle(NORMAL);
  textSize(70);
  textFont(Darumad1);
  text("06", 680, 165);
  textStyle(NORMAL);
  textSize(70);
  textFont(Darumad1);
  text("23", 680, 230);
  
  textStyle(NORMAL);
  textSize(25);
  textFont(Darumad1);
  text("80's Party | Duplex Club | TLV", 25, 970);
  
  
  translate(width / 2, height / 2);
  strokeWeight(10);
  stroke(255,0,162);//outer ring
  
  
  noFill();
  beginShape();
  let noiseMax = mouseX / 200 + 0.5;
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  noStroke();
  stroke(50, 300, 255);// inner ring
  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 2, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 8, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  stroke(230,255,1);//middle ring
  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(5 + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 50, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  
  phase += 0.003;
  zoff += 0.01;
}

// Function to generate a random shape and add it to the shapes array
function generateRandomShape() {
  const x = random(width);
  const y = random(height);
  const size = random(50, 200);
  const color = random(['rgb(255,0,162)', 'rgb(0,255,255)', 'rgb(230,255,1)']);
  const shapeType = random(['circle', 'square', 'triangle']);
  const shape = new Shape(x, y, size, color, shapeType);
  shapes.push(shape);
}

// Shape class
class Shape {
  constructor(x, y, size, color, type) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.type = type;
  }

  display() {
    push();
    fill(this.color);
    noStroke();

    // Draw the shape based on its type
    if (this.type === 'circle') {
      ellipse(this.x, this.y, this.size, this.size);
    } else if (this.type === 'square') {
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    } else if (this.type === 'triangle') {
      const h = this.size * (sqrt(3) / 2);
      triangle(this.x, this.y - this.size / 2, this.x - this.size / 2, this.y + h / 2, this.x + this.size / 2, this.y + h / 2);
    }

    pop();
  }
}
