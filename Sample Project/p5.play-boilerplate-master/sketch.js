var hr
var min
var sec

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
   angleMode(DEGREES)
   
}

function draw() {
  background(255,255,255);  
  //drawSprites();
  translate (200,200)
  rotate (-90)
   hr=hour()
   mn=minute()
   sc=second()

   hra=map(hr%12,0,12,0,360)
   mna=map(mn,0,60,0,360)
   sca=map(sc,0,60,0,360)

   push ()
   rotate (hra)
   stroke ("red")
   strokeWeight(7)
   line (0,0,50,0)
   pop ()
   
   push ()
   rotate (mna)
   stroke ("blue")
   strokeWeight(4)
   line (0,0,50,0)
   pop ()

   push ()
   rotate (sca)
   stroke ("green")
   strokeWeight(2)
   line (0,0,50,0)
   pop ()

   push ()
   noFill()
   stroke("red")
   strokeWeight(10)
   arc(0,0,150,150,0,hra)
   pop ()

   push ()
   noFill()
   stroke("blue")
   strokeWeight(8)
   arc(0,0,130,130,0,mna)
   pop ()

   push ()
   noFill()
   stroke("green")
   strokeWeight(5)
   arc(0,0,115,115,0,sca)
   pop ()
}