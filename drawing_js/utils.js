/*
 This js file contains function which are commonly used at various places
*/
var Utils={};
Utils.gameOver = false;
Utils.clearCanvas=function(ctx,x,y,w,h)
{
  // ctx.clearCanvas(0,0,800,200);
}
Utils.drawImage=function(ctx,img,img_x,img_y,img_w,img_h,x,y,w,h)
{
    ctx.drawImage(img,img_x,img_y,img_w,img_h,x,y,w,h);
}
Utils.setGameFlag = function(){
  Utils.gameOver = true;
}
Utils.sound = function(){
  
  let out = function(outsound_src){
     return document.getElementById('outsound').play();
  }
  return {
    out:out
  }
}
