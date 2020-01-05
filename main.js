const canvas = document.getElementById('canvas');
const canvas_width = canvas.width; //1000
const canvas_height = canvas.height //400
const ctx = canvas.getContext('2d');
const log = (msg) => {
    console.log(msg);
}
//context setup
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas_width, canvas_height);
ctx.lineWidth = 1.5;
//end

// creating scene
const img = new Image();
const speed = 10;
let timer;
img.src = './images/offline-sprite-1x.png';
img.classList="imgclass"
let cloud_x,cloud_y,cloud_old_x,cloud_old_y;
img.onload = () => {
    timer = setInterval(() => {
        drawscore(ctx);
        drawmovingdragon(ctx,img);
      drawhorizontalline(ctx,img,speed);
     drawcloud(ctx,img,speed);
    }, 100);  
}
//end
//registrering events
window.addEventListener('keydown',(e)=>{
e.keyCode == 32?jumpdragon(ctx,img):'';
})
//end