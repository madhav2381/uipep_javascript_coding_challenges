var c = document.getElementById("canvas");
c.addEventListener('click', drawCircle, false);
let running = false;
var ctx = c.getContext("2d");
circle = [];
let animationFrame;
let intervalID;
let range = document.getElementById("myRange");
var output = document.getElementById("demo");
var collition = document.getElementById("collition");
let isRandomX = true;
let playing=true;
let i=0;
collition.innerHTML = 0;




c.width = "600";
c.height = "400";

window.onresize = function() {
  c.width = "600";
  c.height = "400";
}



function drawCircle(event) {


    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = function () {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc((this.x), (this.y), this.radius, 0, 2 * Math.PI)
            ctx.fill();
            this.update();
        }

        this.update = function () {
            if (this.x + this.radius > 600  || (this.x) - this.radius < 0) {
                this.dx = -this.dx
                i++
            }
            if (this.y + this.radius > 400  || this.y - this.radius < 0) {
                this.dy = -this.dy
                i++
            }

            this.x += this.dx;
            this.y += this.dy;

        }
    }

    var pos = getCursorPosition(c, event);
    var clickX = pos.x;
    var clickY = pos.y;
    let speed=5;
    let angle=Math.floor(Math.random()*360);
    let rad=angle*(Math.PI/180);
    dx=Math.cos(rad)*speed;
    dy=Math.sin(rad)*speed
    let radius = 20;
    circle.push(new Circle(clickX,clickY,dx,dy,radius))
    if(!intervalID) {
        intervalID =  setInterval(animate,(20-(range.value/5)));
        setInterval(getCollition,(1000+(20-(range.value/5))));
    }
    animate();

}

function getCursorPosition(canvas, e) {
  // Gets click position
  rect = canvas.getBoundingClientRect();
  
  console.log('getcursorpos');
  
  return {
    x: e.clientX - rect.left, 
    y: e.clientY - rect.top
  };
}

function animate()
{
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for(let i = 0;i<circle.length;i++){
    circle[i].draw();
  }
}

//c.draw = draw;


function clearCanvas() {
  c.height = 400;
}

function pause(){
    clearInterval(intervalID);
    playing=false;
}

function play(){
    
    clearInterval(intervalID);
   intervalID = setInterval(animate,(20-(range.value/5)));
   playing = true;
}

function getCollition(){
    collition.innerHTML = i;
    i=0
}

function changeSpeed(k){
    output.innerHTML = k+"%";
    if(playing)
    {
        clearInterval(intervalID);
        intervalID = setInterval(animate,(20-(k/5)));
    }
}

//http://jsfiddle.net/Xw29r/15/       