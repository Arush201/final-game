const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine
var world

var fruitsImg
var signImg
var bushImg
var witchImg
var ghostImg
var boyImg

var PLAY = 1
var END = 0
var gameState = PLAY
var backgroundImg

var obstacleGroup 

var score = 0

function preload(){
  fruitsImg = loadImage("images/fruits.png")
  signImg = loadImage("images/sign.png")
  bushImg = loadImage("images/bush.png")
  witchImg = loadImage("images/witch.png")
  backgroundImg = loadImage("images/town.jpg")
  ridingImg = loadImage( "images/riding.png")
  jumpImg = loadImage( "images/jump.png")
  neelingImg = loadImage( "images/neeling.png")
  ghostImg = loadImage("images/ghost.png")

}

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(windowWidth,windowHeight);

  boy = createSprite(250,windowHeight-30,100,100)
  boy.addAnimation("riding" ,ridingImg)
  boy.addAnimation("jump" , jumpImg)
  boy.addAnimation("neel" , neelingImg)

  boy.scale = 0.2
  ground = createSprite(windowWidth/2,windowHeight-10,width*2.5,30)
  ground.x = ground.width/2
  ghost = createSprite(100,windowHeight-30,100,100)
  ghost.addImage(ghostImg)
  ghost.scale = 0.6

  obstacleGroup = new Group()

}

function draw() {


  Engine.update(engine)

  background(backgroundImg)

  if(gameState === PLAY){
    createObstacles()

    if(ground.x < 0){
      ground.x = ground.width/2
    }

    if(keyWentDown("space")){
      boy.changeAnimation("jump" , jumpImg)
    }
    if(keyWentUp("space")){
      boy.changeAnimation("riding" , ridingImg)

    }

    if(keyWentDown("DOWN_ARROW")){
      boy.changeAnimation("neel" , neelingImg )
      boy.scale = 0.17

    }

    if(keyWentUp("DOWN_ARROW")){
      boy.changeAnimation("riding" , ridingImg)

    }

    if(boy.isTouching(obstacleGroup)){
      gameState = END
    }

    ground.velocityX = -1
    boy.velocityY = boy.velocityY + 0.5

  }else if(gameState === END){
    obstacleGroup.setVelocityXEach(0)
    ghost.velocityX = 1
  
    if(ghost.isTouching(boy)){
      ghost.velocityX = 0
     
    }
  }

  if(keyDown("r") && gameState === END){
    reset()
  }

  boy.collide(ground)
  ghost.collide(ground)

  drawSprites();

 
    fill("white")
    textSize(40)
    text("Score :" + score , windowWidth-300,100)
    if(gameState === PLAY){
      score = score + 1
    }
  

  if(gameState === END){
    push()
    fill("red")
    textFont("Chiller")
    textSize(70)
    text("Boy Was Caught",windowWidth/2-200,windowHeight-500)
    text("Press R to restart", windowWidth/2-200,windowHeight-600)
    pop()
  }

  

}

function createObstacles(){

  if(frameCount % 130 === 0 ){
    var obstacle = createSprite(windowWidth,windowHeight-50)
    var randAnimation = Math.round(random(1,4))
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
      obstacle.y = windowHeight - 150
    }
    
    obstacle.velocityX = -5

    obstacleGroup.add(obstacle)  
    
    console.log(boy.y)
  }

}

function keyPressed(){
  if(keyCode === 32 && gameState === PLAY  && boy.y >=  500 ){
    boy.velocityY = -13
  }
}

function reset(){
  gameState = PLAY

  ghost.x = 100

  score = 0 

  obstacleGroup.destroyEach()

}


