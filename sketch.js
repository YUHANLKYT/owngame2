var bg, bgsprite
var heart1, heart2, heart3
var shootersprite, shooter1, shootershoot, zombie
var explosion, lose, win

function preload(){
  bg = loadImage("assets/bg.jpeg")
  heart1 = loadImage("assets/heart_1.png")
  heart2 = loadImage("assets/heart_2.png")
  heart3 = loadImage("assets/heart_3.png")
  shooter1 = loadImage("assets/shooter_1.png")
  shooter2 = loadImage("assets/shooter_2.png")
  shootershoot = loadImage("assets/shooter_3.png")
  zombie = loadImage("assets/zombie.png")
  explosion = loadSound("assets/explosion.mp3")
  lose = loadSound("assets/lose.mp3")
  win = loadSound("assets/win.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bgsprite = createSprite(displayWidth/2,displayHeight/2,50,50)
  bgsprite.addImage(bg)
  bgsprite.scale = 1.2

  shootersprite = createSprite(displayWidth/5,displayHeight/2,50,50)
  shootersprite.addImage(shooter2)
  shootersprite.scale = 0.3
  shootersprite.debug = true
  shootersprite.setCollider("rectangle",0,0,200,450)
}

function draw(){
  drawSprites()

  if(keyWentDown("SPACE")){
    shootersprite.addImage(shootershoot)

  }

  else if(keyWentUp("SPACE")){
    shootersprite.addImage(shooter2)
  }

  if(keyWentDown("UP_ARROW") || touches.length > 0 && touches[0].y < windowHeight/2){
    shootersprite.y = shootersprite.y - 30
  }

  if(keyWentDown("DOWN_ARROW") || touches.length > 0 && touches[0].y > windowHeight/2){
    shootersprite.y = shootersprite.y + 30
  }

}