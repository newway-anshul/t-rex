const canvas = document.getElementById('canvas');
const canvas_width = canvas.width; //1000
const canvas_height = canvas.height //400
const ctx = canvas.getContext('2d');
const log = (msg) => {
    console.log(msg);
}
//context setup
ctx.fillStyle = 'white';
ctx.strokeStyle ="black";
ctx.fillRect(0, 0, canvas_width, canvas_height);
ctx.lineWidth = 1;
//end

// creating scene
const img = new Image();
const speed = 20;
let timer;
img.src = './images/offline-sprite-1x.png';
img.onload = () => {
    timer = setInterval(() => {
        ctx.clearRect(0,0,800,200)
        Draw();     
    }, 100);
 
}
function Draw(){
        ctx.clearRect(0,0,800,200)
        Ground.drawhorizontalline(ctx, img, speed);
        Clouds.drawcloud(ctx, img, speed);       
        Score.drawscore(ctx); 
        Obstacles.drawObstacles(ctx,img,speed); 
        Dragon.drawmovingdragon(ctx, img);
}
//registrering events
window.addEventListener('keydown', (e) => {
    e.keyCode == 32 ? Dragon.jumpdragon(ctx, img) : '';
})
function resetTimer(){
    clearInterval(timer);
}
function restartTimer(){
    timer = setInterval(Draw,100);
}

canvas.addEventListener('click', (e) => {
    if(Utils.gameOver){
        Score.resetScore();
        Clouds.resetcloud();
        Obstacles.resetObstacles();
        Dragon.resetDragon();
        Utils.gameOver = false;
        restartTimer();
    }
})
document.getElementById('trex-restart').addEventListener('click',()=>{
  resetTimer();  
  Score.resetScore();
  Clouds.resetcloud();
  Obstacles.resetObstacles();
  Dragon.resetDragon();
  Utils.gameOver = false;
  restartTimer();
});
document.getElementById('trex-pause').addEventListener('click',()=>{
    resetTimer();
  });
//end



















































//end
function draw(){
    ctx.clearRect(0,0,800,200)
     Score.drawscore(ctx);        
     Ground.drawhorizontalline(ctx, img, speed);
    // Clouds.drawcloud(ctx, img, speed);
     drawObstacles(ctx,img,speed);
    //  Dragon.drawmovingdragon(ctx, img);
      window.requestAnimationFrame(draw)
}
