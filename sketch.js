var cat, mouse, garden;
var catImg1, catImg2, catImg3, catImg4;
var mouseImg1, mouseImg2, mouseImg3, mouseImg4;


function preload() {
    //load the images here
    garden = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    background(garden);
    //create tom and jerry sprites here
    cat = createSprite(catImg1);
    mouse = createSprite(mouseImg1);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2 && cat.y - mouse.y < (cat.width - mouse.wdith)/2){
        cat.velocityX = 0;
        mouse.velocityX = 0;
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
    }

    if (mouse.x - cat.x < (cat.width - mouse.width)/2){
        mouse.velocityX = -6;
    }


    Text(mouseX + ',' + mouseY, 10, 45);
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === left_arrow){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
    }


}