var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf,leaf2,orangeleaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.mouseX;

//creating apple
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.08;
apple.velocityY=2;

//creating leaf
leaf = createSprite(random(30,200),210,20,20);
leaf.addImage(leafImg);
leaf.scale = 0.09;
leaf.velocityY=2;

leaf2 = createSprite(350,210,20,20);
leaf2.addImage(leafImg);
leaf2.scale = 0.09;
leaf2.velocityY=2;

//creating
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}