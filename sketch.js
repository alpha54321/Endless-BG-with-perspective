var roadImage,tree1,tree2,tree3;
var road;
var lines,linesarray=[];

function preload()
{
  tree1 = loadImage("tree_1.png");
  tree2 = loadImage("tree_2.png");
  tree3 = loadImage("tree_3.png");


}

function setup() 
{
  createCanvas(600, 600);
  for(var i = 6; i >-3;i--)
   {
      lines = createSprite(300,100*i,20,30);
      lines.shapeColor = "white";
      lines.velocityY = 2;  
      linesarray.push(lines); 
   }
  
}

function draw() 
{
  background("#523D22");

  shape(width/2+60,0, width/2-60,0,width/2-250,height, width/2+250,height);
  
  for(var i = 0 ;i <linesarray.length;i++)
  {
    if(linesarray[i].y >650)
    {
      linesarray[i].y = -50;
    }
  }
  grass();
  drawSprites();
}

function grass()
{
  if(frameCount% 200 ===0)
  {
    var grass = createSprite(130,-100);
    var pic = round(random(1,3));
    grass.velocityY= 2;
    grass.velocityX = -0.5;
    grass.scale = 0.8;
    switch(pic)
    {
      case 1: grass.addImage(tree1);
              break;
      case 2: grass.addImage(tree2);
              break;
      case 3: grass.addImage(tree3);
              break;

    }
    
  }
  else if(frameCount% 250 === 0)
  {
    var grass = createSprite(470,-120);
    var pic = round(random(1,3));
    grass.velocityY= 2;
    grass.velocityX = 0.5;
    grass.scale = 0.8;
    switch(pic)
    {
      case 1: grass.addImage(tree1);
              break;
      case 2: grass.addImage(tree2);
              break;
      case 3: grass.addImage(tree3);
              break;

    }
    
  }
}