const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground;
var ground, tower;
var backgroundImg;
var towerImg;
var cannon;
var angle;
var cannonball
var balls = []

function preload() {
  backgroundImg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(0, height - 10, width * 2, 10, options)
  World.add(world, ground)

  tower = Bodies.rectangle(160, 350, 160, 310, options)
  World.add(world, tower)

  angleMode(DEGREES)
  angle = 20;
  cannon = new Cannon(180, 110, 130, 100, angle)


}

function draw() {
  background(189);

  image(backgroundImg, 0, 0, 1200, 600)
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 10)
  push()
  imageMode(CENTER)
  image(towerImg, tower.position.x, tower.position.y, 160, 310)

  pop()
  cannon.display()

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
  }

}

function keyPressed() {
  if (keyCode === 65) {
    cannonball = new CannonBall(cannon.x, cannon.y)
    balls.push(cannonball)
  }
}

function showCannonBalls(ball, i) {
  if (ball) {
    ball.display()
  }
}

function keyReleased() {
  if (keyCode === 65) {
    balls[balls.length - 1].shoot()
  }
}