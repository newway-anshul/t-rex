var img_x_new = img_x_old = 0;
var img_y = 180;
var image_verticle_clip = 55
var img_width; //canvaswidth
function drawhorizontalline(ctx, img, speed) {
    img_width = ctx.canvas.width;
    ctx.save();
    if (img_x_new > -img_width) {
        clearcanvas(img_x_old, img_y, img_width, img_y);
        ctx.translate(img_x_new, img_y);
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        clearcanvas(img_width + img_x_new, img_y, -img_x_new, img_y)
        ctx.translate(img_width + img_x_new, img_y);
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    else {
        log('time to clear')
        clearcanvas(img_width + img_x_new, img_y, -img_x_new, img_y)
        ctx.translate(img_width + img_x_new, img_y);
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    if (img_x_new + img_width > -canvas_width) {
        clearcanvas(2 * img_width + img_x_new, img_y, -img_x_new, img_y)
        ctx.translate(2 * img_width + img_x_new, img_y);
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    else {
        img_x_new = img_x_old = 0;
    }

    img_x_old = img_x_new;
    img_x_new = img_x_new - speed;
}
function clearcanvas(x, y, w, h) {
    ctx.clearRect(x, y, w, h);
    ctx.fillRect(x, y, w, h);
}

/*
 img_width=ctx.canvas.width;
   // to clear  first image
    ctx.clearRect(img_x_old, img_y, img_width, 80);
    ctx.fillRect(img_x_old, img_y, img_width, img_y);
   //end
   //to clear second image
    ctx.clearRect(img_width + img_x_new, img_y, -img_x_old, img_y);
    ctx.fillRect(img_width + img_x_new, img_y, -img_x_old, img_y);
    //end
    //clear text//
    ctx.clearRect(img_x_old,140,50,50);
    ctx.fillRect(img_x_old,140,50,50)
    //done
    // if (img_x_new < ctx.canvas.width)
    // {
    //     ctx.save();
    //     ctx.fillStyle = 'rgb(200, 200, 200)';
    //     ctx.fillText('img1', img_x_new, 150);
    //     ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, img_x_new, img_y, img_width, img_y);
    // }
    // else{
    //     log('stop drawing  image1');
    //     ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, -2*img_width + img_x_new, img_y, img_width, img_y);
    // }
    if(img_x_new-img_width<ctx.canvas.width)
    {
        ctx.drawImage(img, 0, image_verticle_clip, img_width, img_y, img_width + img_x_new, img_y, img_width, img_y);
    }
    // else{
    //     log('stopl drawing image2');
    //     img_x_new=img_x_old = 0
    // }

    img_x_old = img_x_new;
    img_x_new = img_x_new - speed;
    ctx.restore();*/