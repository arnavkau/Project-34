const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world

var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs8,obs9,obs10,obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20,obs21,obs22,obs23,obs24,obs25,obs26,obs27,obs28,obs29,obs30,obs31,obs32;

var ground

var base1,base2

var balls = []
var cannon,cannonBall,angle;

var wall

function setup() {
  createCanvas(1400,600);
  angleMode(DEGREES)
  angle = 0
  engine = Engine.create();
  world = engine.world;
  
 

 
  cannon = new Cannon(200,530,200,100,angle)
  ground = new Ground(0,580,1200, 10)
  base1 = new Ground(1200, 500, 400, 10)
  base2 = new Ground(925,230,225,10)
  wall = new Ground(2,1,10,1600)

  obs1 = new Box(1125,480,25,50,30)
  obs2 = new Box(1150,480,25,50,40)
  obs3 = new Box(1175,480,25,50)
  obs4 = new Box(1200,480,25,50)
  obs5 = new Box(1225,480,25,50)
  obs6 = new Box(1250,480,25,50)
  obs7 = new Box(1275,480,25,50)
  obs8 = new Box(1150,430,25,50)
  obs9 = new Box(1175,430,25,50)
  obs10 = new Box(1200,430,25,50)
  obs11 = new Box(1225,430,25,50)
  obs12 = new Box(1250,430,25,50)
  obs13 = new Box(1175,380,25,50)
  obs14 = new Box(1200,380,25,50)
  obs15 = new Box(1225,380,25,50)
  obs16 = new Box(1200,330,25,50, 40)
  obs17 = new Box(925,190,25,50)
  obs18 = new Box(900,190,25,50)
  obs19 = new Box(875,190,25,50)
  obs20 = new Box(850,190,25,50)
  obs21 = new Box(950,190,25,50)
  obs22 = new Box(975,190,25,50)
  obs23 = new Box(1000,190,25,50)
  obs24 = new Box(875,140,25,50)
  obs25 = new Box(900,140,25,50)
  obs26 = new Box(925,140,25,50)
  obs27 = new Box(950,140,25,50)
  obs28 = new Box(975,140,25,50)
  obs29 = new Box(900,90,25,50)
  obs30 = new Box(925,90,25,50)
  obs31 = new Box(950,90,25,50)
  obs32 = new Box(925,40,25,50)


}


function draw() 
{
  background(27,27,27);
  Engine.update(engine)
  obs1.display()
  obs2.display()
  obs3.display()
  obs4.display()
  obs5.display()
  obs6.display()
  obs7.display()
  obs8.display()
  obs9.display()
  obs10.display()
  obs11.display()
  obs12.display()
  obs13.display()
  obs14.display()
  obs15.display()
  obs16.display()
  obs17.display()
  obs18.display()
  obs19.display()
  obs20.display()
  obs21.display()
  obs22.display()
  obs23.display()
  obs24.display()
  obs25.display()
  obs26.display()
  obs27.display()
  obs28.display()
  obs29.display()
  obs30.display()
  obs31.display()
  obs32.display()

  wall.show()
  ground.show()
  base2.show()
   base1.show()

  for(var i = 0; i<balls.length; i++)
  {
    showCannonBalls(balls[i])
  }
  
  cannon.display()
  
}

function keyPressed()
{
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    Matter.Body.setAngle(cannonBall.body, cannon.angle)
    balls.push(cannonBall)
   }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) 
  {

  
    balls[balls.length-1].shoot();
  }
}

function showCannonBalls(ball, i)
{
   if(ball)
   {
    ball.display()
    ball.debug = true
   }
   
   }

  