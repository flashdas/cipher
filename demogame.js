// Undo the anti flicker code in misc.js, IDK why but misc.js never reveals the canvas
// Probably the canvas is never considered ready by jquery because it constantly updates?
document.write('<style type="text/css">body{display:block}</style>');

const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");


var paused = false;

let x = 123;
let y = 123;

let downPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

let speed = 1;
let size = 30;

function mainLoop() {
    if (!paused) {
        inputs();
        clearScreen();
        drawBox();
        requestAnimationFrame(mainLoop);
    }
}
function togglePause() {
    if (paused) {
        resumeGame();
    } else {
        pauseGame();
    }
}
function pauseGame() {
    document.getElementById("pauseLabel").innerHTML = "Game is Paused";
    paused = true;
}
function resumeGame() {
    paused = false;
    document.getElementById("pauseLabel").innerHTML = "";
    mainLoop();
}

function inputs() {
    if (downPressed) { y += speed; }
    if (upPressed) { y -= speed; }
    if (leftPressed) { x -= speed; }
    if (rightPressed) { x += speed; }
}

function drawBox() {
    c.fillStyle = "blue";
    c.fillRect(x,y,size,size);
}

function clearScreen() {
    c.fillStyle = "white";
    c.fillRect(0,0,canvas.clientWidth,canvas.height);
}

document.body.addEventListener("keydown", keydown);
document.body.addEventListener("keyup", keyup);

function keydown(event) {
    if(event.keyCode == 37) { leftPressed = true; }
    if(event.keyCode == 38) { upPressed = true; }
    if(event.keyCode == 39) { rightPressed = true; }
    if(event.keyCode == 40) { downPressed = true; }
}
function keyup(event) {
    if(event.keyCode == 37) { leftPressed = false; }
    if(event.keyCode == 38) { upPressed = false; }
    if(event.keyCode == 39) { rightPressed = false; }
    if(event.keyCode == 40) { downPressed = false; }
}

mainLoop();
