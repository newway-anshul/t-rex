/*
 This js file contains function which are commonly used at various places
*/
var Utils={};
Utils.clearCanvas=function(ctx,x,y,w,h)
{
    ctx.clearRect(x,y,w,h);
    ctx.fillRect(x,y,w,h);
}
Utils.drawImage=function(ctx,img,img_x,img_y,img_w,img_h,x,y,w,h)
{
    ctx.drawImage(img,img_x,img_y,img_w,img_h,x,y,w,h);
}