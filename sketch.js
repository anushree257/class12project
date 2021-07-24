var boy , boyrunning;
var path , pathmoving;
var boundary1 , boundary2;

function preload(){
  //pre-load images
  boyrunning = loadAnimation("Runner-1.png","Runner-2.png");
  pathmoving = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  boy = createSprite(190,310,50,50);
  boy.addAnimation( "walking",boyrunning);
  boy.scale = 0.1;
  
  //creating the moving path
  path = createSprite(190,200,250,390);
  path.addImage("runningpath",pathmoving);
  path.velocityY = +5;
  
  //creating boundarie sprites
  boundary1 = createSprite(10,200,100,400);
  boundary2 = createSprite(387,200,120,400);
}

function draw() {
  background(0);
  boy.depth = path.depth;
  boy.depth = boy.depth+1;

  // turning the boundaries invisible
  boundary1.visible = false;
  boundary2.visible = false;

  //moving along with the mouse
  boy.x = World.mouseX;

  //creating boundaries for boy to collide
  if(boy.isTouching(boundary1)) {
    boy.collide(boundary1);
  }

  if(boy.isTouching(boundary2)) {
    boy.collide(boundary2);
  }
  
  //to reset background
  if(path.y > 400) {
    path.y = height/2;
  }

  drawSprites();
}
