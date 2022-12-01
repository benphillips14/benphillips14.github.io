
//variables for hole,PC,obstacle jumping and the score counter
var obstacle = document.getElementById("obstacle");
var hole = document.getElementById("hole");
var PC = document.getElementById("PC");
var jumping = 0;
var counter = 0;

// adding event listner and variables to return values proportional to my page
// This sets the hole the player must go through to random values (ranged in px)
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

//
setInterval(function(){
    var PCTop = parseInt(window.getComputedStyle(PC).getPropertyValue("top"));
    if(jumping==0){
        PC.style.top = (PCTop+3)+"px";
    }
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-PCTop);
    if((PCTop>480)||((obstacleLeft<20)&&(obstacleLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        PC.style.top = 100 + "px";
        counter=0;
    }
},10);

//Basic jumping function for my PC, 

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var PCTop = parseInt(window.getComputedStyle(PC).getPropertyValue("top"));
        if((PCTop>6)&&(jumpCount<15)){
            PC.style.top = (PCTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}












//creating gravity function by essientially pushing our character down in px every tick, unless we jump (used computed styles to grab our PC)

