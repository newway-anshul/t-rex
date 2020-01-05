var img_x_new=img_x_old = 0;
var img_y = 180;
var image_verticle_clip=55
var img_width; //canvaswidth
function drawhorizontalline(ctx,img,speed){
    img_width=ctx.canvas.width;
    ctx.clearRect(img_x_old, img_y, img_width, 80);
    ctx.fillRect(img_x_old, img_y, img_width, img_y);
    ctx.clearRect(0, img_y, img_x_old, img_y);
    ctx.fillRect(0, img_y, img_x_old, img_y);
    if (img_x_new < ctx.canvas.width)
    { 
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, img_x_new, img_y, img_width, img_y);
    }
    else{
        log('stop drawing  image1');
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, -2*img_width + img_x_new, img_y, img_width, img_y);
    }
    if(img_x_new-img_width<ctx.canvas.width)
    {
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, -img_width + img_x_new, img_y, img_width, img_y);
    }
    else{
        log('stopl drawing image2');
        img_x_new=img_x_old = 0
    }
    
    img_x_old = img_x_new;
    img_x_new = img_x_new + speed;
}