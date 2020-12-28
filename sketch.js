const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine
var world

var fruitsImg
var signImg
var bushImg
var witchImg

var PLAY = 1
var END = 0
var gameState = PLAY


var obstacleGroup 


function preload(){
  fruitsImg = loadImage("images/fruits.png")
  signImg = loadImage("images/sign.png")
  bushImg = loadImage("images/bush.png")
  witchImg = loadImage("images/witch.png")


}

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(windowWidth,windowHeight);

  boy = new Boy(250,windowHeight-30,100,100)
  ground = new Ground(windowWidth/2,windowHeight-10,width,30)
  ghost = new Ghost(100,windowHeight-30,100,100)

  obstacleGroup = new Group()

}

function draw() {


  Engine.update(engine)
  background("white")

  if(gameState === PLAY){
    createObstacles()
    if(boy.boySprite.isTouching(obstacleGroup)){
      gameState = END
    }

  }else if(gameState === END){
    obstacleGroup.setVelocityXEach(0)
    ghost.body.velocity.x = 1
    
  }


  boy.display()
  ground.display()
  ghost.display()



  drawSprites();

}

function createObstacles(){

  if(frameCount % 130 === 0 ){
    var obstacle = createSprite(windowWidth,windowHeight-50)
    var randAnimation = Math.round(random(1,4))
    console.log(randAnimation)
    if(randAnimation === 1){
      obstacle.scale = 0.2
      obstacle.addImage(signImg)
    }else if(randAnimation === 2){
      obstacle.scale = 0.2
      obstacle.addImage(bushImg)
    }else if(randAnimation === 3){
      obstacle.scale = 0.2
      obstacle.addImage(fruitsImg)
    }else{
      obstacle.addImage(witchImg)
      obstacle.scale = 0.3
      obstacle.y = windowHeight - 140
    }
    
    obstacle.velocityX = -5

    obstacleGroup.add(obstacle)                                                                                  
  }

}

function keyPressed(){
  if(keyCode === 32 && gameState === PLAY){
    boy.image = loadImage("images/jump.png")
    Matter.Body.setPosition(boy.body,{x : 250 , y : windowHeight-250})
  
  }
}


