const step = 1;
const WIDTH = 600;
const HEIGHT = 400;
const BALLSIZE = 20;
const CARSIZE = 40;
var max = WIDTH - CARSIZE;
var min = 0;
var xGame = 0; // tomato div coordinate
var yGame = 0;
var direction = "right";

//seting up the game for the first time
function setup() {
    xGame = document.getElementById("game").offsetLeft;
    yGame = document.getElementById("game").offsetTop;
    // console.log("X = " + xGame + ", Y = " + yGame+ HEIGHT - CARSIZE);
    document.getElementById("car").style.top = yGame+ HEIGHT - CARSIZE + "px";
    document.getElementById("car").style.left = xGame+ "px";
    min = xGame;
    max = max + xGame;
}

function retry(){
    //Deleting balls
        var allElements = document.getElementsByClassName("drop");
        for(var i = 0; i < allElements.length;i++){
            allElements[i].remove();
        }
    document.getElementById("car").style.left = xGame+ "px";
}

function rain() {
    //creating and adding the drop
    var drope = document.createElement('div');
    drope.className = 'drop';
    drope.style.left = Math.random() * (max - min) + min + "px";
    drope.style.top = yGame + "px";
    drope.id = 'drop';
    document.getElementById('game').appendChild(drope);
}
//for Cars, but u can us it with anything
function moveRight(elem) {
    var x = document.getElementById(elem).offsetLeft;
    x = x + step;
    document.getElementById(elem).style.left = x + "px";
}
//for cars
function moveLeft(elem) {
    var x = document.getElementById(elem).offsetLeft;
    x = x - step;
    document.getElementById(elem).style.left = x + "px";
}
//for drops
function moveDown(elem) {
    var allElements = document.getElementsByClassName("drop");
    for(var i = 0; i < allElements.length;i++){
        var y = allElements[i].offsetTop;
        y = y + step;
        allElements[i].style.top = y + "px";
    }
}
//function for moving the car (brown Div) right and left
function move(elem) {
    var x = document.getElementById(elem).offsetLeft;
    if (x >= max) {
        direction = "left"
    } else if (x <= min) {
        direction = "right"
    }

    if (direction == "right") {
        moveRight(elem);
    } else if (direction == "left") {
        moveLeft(elem);
    }
}

function gameOver(){
    //asking user if he want to repeat
    let test = confirm("GameOver 😣 replay ?");
    //if the answer is yes
    if(test){
        clearTimeout(my_time);
        retry();
    }else
    {
        //you can add another things for your needs
        clearTimeout(my_time);
    }
}
//function for moving the drops
function dropRain() {
    //getting all the drops
    var elements = document.getElementsByClassName("drop");
    // for each drop
    for( var i = 0; i < elements.length; i++){
        var v = elements[i].offsetTop;
        var v2 = elements[i].offsetLeft;
        // if it didn't hit the bottom keep going down
        if (v < yGame+HEIGHT-BALLSIZE) {
            moveDown('drop');
            //otherwise, remove the ball
        } else if (v >= yGame+HEIGHT-BALLSIZE) {
            elements[i].remove();
        }
        //Getting car position to see if it didn't hit the drop
        var carXL = document.getElementById('car').offsetLeft;
        var carXR = carXL + CARSIZE;
        var caryT = document.getElementById('car').offsetTop;
        //if the car hit the ball
        if(v2 < carXR && v+BALLSIZE >caryT && v2+BALLSIZE > carXL ){ 
            gameOver();
            break;//breaking the loop
        }
        
    }
}

//loop function
function timer() {
    //start moving the car
    move("car");
    //randomly adding new drops
    if(Math.random()<0.005){// <= change this value to have more drops
        rain();
    }
    //if there are drops, keep downing them
    if (document.getElementById('drop')) {
        dropRain();
    }else{ // Otherwise, create one
        rain();
    }
    my_time = setTimeout('timer()', 10);
}
setup();
rain();
timer();
