//  9.22: Custom Shapes - p5.js Tutorial
// https://www.youtube.com/watch?v=76fiD5DvzeQ


function setup() {
  // put setup code here

  createCanvas(800,700);
  background(250);
 
}

function draw() {
  // put drawing code here


// strokeWeight(1); oefening custom shapes
//   beginShape();

//   vertex(50,0);
//   vertex(150,100);
//   vertex(150,100);
//   vertex(200,150);
//   vertex(150,200);
//   vertex(100,250);
//   vertex(50,300);
//   vertex(100,350);
//   vertex(150,400);
//   vertex(200,450);
//   vertex(150,500);
//   vertex(100,550);
//   vertex(50,600);


//   endShape();


//   beginShape();

//   vertex(250,0);
//   vertex(200,50);
//   vertex(100,150);
//   vertex(50,200);
//   vertex(100,250);
//   vertex(150,300);
//   vertex(200,350);
//   vertex(150,400);
//   vertex(100,450);
//   vertex(50,500);
//   vertex(100,550);
//   vertex(100,550);
//   vertex(150,600);

//   endShape();

strokeWeight(30);
stroke(250,0,0);
line(200,100,100,100);
line(100,200,200,200);
line(200,300,100,300);
line(200,400,100,400);
line(200,500,100,500);

noFill();
stroke(0);
strokeWeight(10 );
beginShape();

vertex(100,50);
vertex(200,150);
vertex(100,250);
vertex(200,350);
vertex(100,450);
vertex(200,550);

endShape();


beginShape();

vertex(200,50);
vertex(100,150);
vertex(200,250);
vertex(100,350);
vertex(200,450);
vertex(100,550);

endShape();


  

}