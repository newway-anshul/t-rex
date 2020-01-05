var Ground = (function () {
    var img_x_new = img_x_old = 0;
    var img_y = 180;
    var image_verticle_clip = 55
    var img_width; //canvaswidth
    return {
        drawhorizontalline: function(ctx, img, speed) {
            img_width = ctx.canvas.width;
            ctx.save();
            if (img_x_new > -img_width) {
                Utils.clearCanvas(ctx, img_x_old, img_y, img_width, img_y);
                ctx.translate(img_x_new, img_y);
                Utils.drawImage(ctx, img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                Utils.clearCanvas(ctx, img_width + img_x_new, img_y, -img_x_new, img_y)
                ctx.translate(img_width + img_x_new, img_y);
                Utils.drawImage(ctx, img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            else {
                log('time to clear')
                Utils.clearCanvas(ctx, img_width + img_x_new, img_y, -img_x_new, img_y)
                ctx.translate(img_width + img_x_new, img_y);
                Utils.drawImage(ctx, img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            if (img_x_new + img_width > -canvas_width) {
                Utils.clearCanvas(ctx, 2 * img_width + img_x_new, img_y, -img_x_new, img_y)
                ctx.translate(2 * img_width + img_x_new, img_y);
                Utils.drawImage(ctx, img, 0, image_verticle_clip, img_width, img_y, 0, 0, img_width, img_y);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            else {
                img_x_new = img_x_old = 0;
            }

            img_x_old = img_x_new;
            img_x_new = img_x_new - speed;
        }
    }
})();

