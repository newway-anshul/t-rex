/*
 This js file contains function which are commonly used at various places
*/
var Utils={};
Utils.clearCanvas=function(ctx,x,y,w,h)
{
   // ctx.clearRect(0,0,800,200);
   // ctx.fillRect(x,y,w,h);
    //ctx.strokeRect(x,y,w,h)
   //ctx.fill();
}
Utils.drawImage=function(ctx,img,img_x,img_y,img_w,img_h,x,y,w,h)
{
    ctx.drawImage(img,img_x,img_y,img_w,img_h,x,y,w,h);
}