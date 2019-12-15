//initial setup
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const timerValue = document.getElementById('timervalue');
const dragon = document.getElementById('dragon');
//end
const canvas = document.getElementById('canvas');
const canvas_width = canvas.width; //1000
const canvas_height = canvas.height //400
const ctx = canvas.getContext('2d');
const verticle_gap = 25
let interval = 10;
let timer;
let randomtimer;
startBtn.addEventListener('click', () => {
    interval = parseInt(timerValue.value);
    draw();
})
stopBtn.addEventListener('click', () => {
    clearTimeout(timer);
})
//context setup
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas_width, canvas_height);
ctx.lineWidth = 1.5;
//end

//draw horizontal line
draw()

var radom_x = canvas_width;
var randomcalled = false
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(canvas_width, canvas_height - verticle_gap);
    randomcalled ? drawrandom() : callrandom();
    
    ctx.lineTo(0, canvas_height - verticle_gap);
    ctx.stroke();
    
    timer = setTimeout(draw, interval);
    drawObstacles(...[3,4]);
}

function drawrandom() {

    randomcalled = true
    if (radom_x > 0) {
        --radom_x;
       // ctx.quadraticCurveTo(canvas_width-50, canvas_height-verticle_gap-25, canvas_width, canvas_height-verticle_gap);
        ctx.lineTo(radom_x, canvas_height - verticle_gap);
        ctx.lineTo(radom_x - 5, canvas_height - 30);
        ctx.lineTo(radom_x -10, canvas_height - verticle_gap);
        //ctx.lineTo(radom_x + 20, canvas_height - verticle_gap);
    }
    else {
        console.log('rander completed')
        radom_x = canvas_width;

        clearTimeout(randomtimer);
        randomtimer = 0;
        randomcalled = false
    }

}
function callrandom() {

    if (!randomtimer) {
        let calltime = Math.floor(Math.random() * 5);
        randomtimer = setTimeout(drawrandom, calltime * 1000);
    }
}

function drawObstacles(linewidth,noofobstacles,zoomlevel){
     
     ctx.lineWidth=linewidth;
     for(var i =0;i<noofobstacles;i++){
     /* vertocle line*/
     ctx.beginPath()
     ctx.moveTo(500+i*25,canvas_height-verticle_gap);
     ctx.lineTo(500+i*25,300);
     ctx.stroke();
     /*end*/
     /*surrounding branches*/
     ctx.beginPath();
     ctx.moveTo(500+i*25-5,310);
     ctx.lineTo(500+i*25-5,350);
     ctx.lineTo(500+i*25,355);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(500+i*25+5,310);
     ctx.lineTo(500+i*25+5,360);
     ctx.lineTo(500+i*25,365);
     ctx.stroke();
     /*edn*/
     }
     
}

function dragonMove() {
    
    dragon.style.backgroundPositionX == "-88px" ? dragon.style.backgroundPositionX = "-132px" : dragon.style.backgroundPositionX = "-88px"
    setTimeout(() => {
        dragonMove()
    }, 200);
}
window.addEventListener('keydown',jump);
var jumptimer;
function jump(e){
  if(jumptimer){
      return
  }
    dragon.style.backgroundPositionX = "-44px"
    if(e.code=="Space"){
      dragon.classList.add('jump');    
    }
    jumptimer = setTimeout(()=>{
        dragon.classList.remove("jump");
        dragon.style.backgroundPositionX = "-88px";
        clearTimeout(jumptimer)
    },1000)
}
dragonMove();