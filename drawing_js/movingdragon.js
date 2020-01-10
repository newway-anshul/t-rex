var Dragon = (function () {
    var dragon_img_positions = [{
        x: 765,
        y: 0
    }, {
        x: 809,
        y: 0
    }];
    var initialimage = 0;
    var dragon_width = 44;
    var dragon_height = 50;
    var dragon_screen_position = {
        x: 10,
        y: 140
    }
    var isjumping = false;
    var vy = .5;
    var max_height = false;
    var direction = 1;
    
    return {
        drawmovingdragon: function (ctx, img) {
            
            if (isjumping) {
                Dragon.jumpdragon(ctx,img);
            }
            else {
                /*we are not clearing as it is not required becase we are showing same width and  height image at same location
                  Utils.clearCanvas(ctx, dragon_screen_position.x, dragon_screen_position.y, dragon_width, dragon_height);
                */
                if (initialimage == 0) {
                    Utils.drawImage(ctx, img, dragon_img_positions[0].x, dragon_img_positions[0].y, dragon_width, dragon_height, dragon_screen_position.x, dragon_screen_position.y, dragon_width, dragon_height);
                    initialimage = 1;
                }
                else {
                    Utils.drawImage(ctx, img, dragon_img_positions[1].x, dragon_img_positions[1].y, dragon_width, dragon_height, dragon_screen_position.x, dragon_screen_position.y, dragon_width, dragon_height);
                    initialimage = 0;
                }
            }
            
         },
        jumpdragon: function (ctx, img) {
           isjumping = true;
           if(max_height){
               direction = -1;
           }
           Utils.clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y+10*direction*vy,dragon_width,dragon_height);
           Utils.drawImage(ctx,img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
           dragon_screen_position.y=dragon_screen_position.y-direction*10*vy;  
           if(dragon_screen_position.y==60){
               max_height = true;
           }  
           if(max_height && dragon_screen_position.y == 145){
               isjumping = false;
               max_height = false;
               dragon_screen_position.y = 140;
               Utils.clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y+10*direction*vy,dragon_width,dragon_height);
               Utils.drawImage(ctx,img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
               direction = 1
               dragon_screen_position.y = 140;
               
           }    
           

        }
    }
})();































































































































function drawmovingdragon(ctx,img){
   if(isjumping){
       return
   } 
   else{
    Utils.clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
   if(initialimage == 0){
    Utils.drawImage(ctx,img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
       initialimage = 1;
   }
   else{
    Utils.drawImage(ctx,img,dragon_img_positions[1].x,dragon_img_positions[1].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
    initialimage = 0;
   }
   }

}
function jumpdragon(ctx,img){
    isjumping = true;
    var vy=1;
    clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
    var pre_i=0
    for(let i =0;i<10;i++){
        Utils.clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y-vy*pre_i,dragon_width,dragon_height);
        Utils.drawImage(ctx,img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y-vy*i,dragon_width,dragon_height);
        pre_i = i;
    } 
    // for(let i =0;i<10;i++){
    //     ctx.clearRect(dragon_screen_position.x,dragon_screen_position.y+vy*pre_i,dragon_width,dragon_height);
    //     ctx.fillRect(dragon_screen_position.x,dragon_screen_position.y+vy*pre_i,dragon_width,dragon_height);
    //     ctx.drawImage(img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y+vy*i,dragon_width,dragon_height);
    //     pre_i = i;
    // }    

}