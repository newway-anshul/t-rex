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















































































// var gamestatus = true;
// window.addEventListener('keypress',(e)=>{

//     if(gamestatus && e.code=="Space"){
//       clearInterval(timer);
//       gamestatus = false;
//     }
//     else {
//         timer = setInterval(() => {
//             drawjumpingdragon(ctx,img);
//             drawhorizontalline(ctx,img,speed);
//            drawcloud(); 
//         }, 100);
//         gamestatus = true;
//     }
    
// })














































































































































































// function moveimage() {

//     ctx.clearRect(img_x_old, 80, img_width, 80);
//     ctx.fillRect(img_x_old, 80, img_width, 80);
//     ctx.clearRect(0, 80, img_x_old, 80);
//     ctx.fillRect(0, 80, img_x_old, 80);
//     if (img_x_new < 800)
//     { 
//         ctx.drawImage(img, 0, 0, img_width, 80, img_x_new, 80, img_width, 80);
//     }
//     else{
//         log('stop drawing  image1');
//         ctx.drawImage(img, 0, 0, img_width, 80, -2*img_width + img_x_new, 80, img_width, 80);
//     }
//     if(img_x_new-img_width<800)
//     {
//         ctx.drawImage(img, 0, 0, img_width, 80, -img_width + img_x_new, 80, img_width, 80);
//     }
//     else{
//         log('stopl drawing image2');
//         img_x_new=img_x_old = 0
//     }
    
//     img_x_old = img_x_new;
//     img_x_new = img_x_new + speed;


// }
























































































































































/*var img = new Image();
img.src = "./offline-sprite-1x.png";
var x = 0;
var j=0;
var next_x,pre_x;
var direction_factor=10
img.onload = ()=>{
    ctx.drawImage(img,0,0,600,80,0,0,600,80);
}
function nextimage(){
    ctx.clearRect(pre_x,80,100,50);
    ctx.fillRect(pre_x,80,100,80);
    var next_x = Math.floor(Math.random()*1100);
    ctx.drawImage(img,next_x,0,100,80,100,80,100,80);
    pre_x=next_x;
}




/*
 ctx.clearRect(image_initialorigin, 250, image_width, 50);
    ctx.fillRect(image_initialorigin,250,image_width,50);
    ctx.drawImage(img,img_x,55,image_width,55,image_initialorigin,250,image_width,50);
    */

/*
various images
cloud = ctx.drawImage(img,85,0,49,25,0,228,50,25);
line = ctx.drawImage(img,0,55,1200,55,0,228,600,50);
var gamestatus = true;
window.addEventListener('keypress',(e)=>{

    if(gamestatus && e.code=="Space"){
      clearInterval(timer);
      gamestatus = false;
    }
    else {
        timer = setInterval(() => {
          drawcloud()  
        }, 100);
        gamestatus = true;
    }
    
})
*/