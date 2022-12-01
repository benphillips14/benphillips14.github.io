// ref

var block = document.getElementById("obstacle");

var hole = document.getElementById("hole");

var character = document.getElementById("character");

var jumping = 0;


// using listner 
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
