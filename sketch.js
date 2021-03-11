var bg,cat,mouse
var tom,jerry,ca

function preload() {
    bg=loadImage("images/garden.png");
    cat=loadImage("images/cat1.png")
    mouse=loadImage("images/mouse1.png")
    ca=loadAnimation("images/cat2.png,cat3.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    jerry=createSprite(200,530,20,20);
    jerry.addImage(mouse)
    jerry.scale=0.1

    tom=createSprite(800,550,20,20);
    tom.addImage(cat)
    tom.scale=0.1

}


function draw() {

    background(bg);
    

    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimtion("catRunning",catImg2)
      tom.changeAnimation("catRunning")
    }
  

}