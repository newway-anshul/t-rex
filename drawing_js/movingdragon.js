var dragon_img_positions=[{
    x:765,
    y:0    
},{
    x:809,
    y:0
}];
var initialimage=0;
var dragon_width=44;
var dragon_height=58;
var dragon_screen_position={
    x:10,
    y:130
}
var isjumping = false;
function drawmovingdragon(ctx,img){
   if(isjumping){
       return
   } 
   else{
    clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
   if(initialimage == 0){
    drawImage(ctx,img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
       initialimage = 1;
   }
   else{
    drawImage(ctx,img,dragon_img_positions[1].x,dragon_img_positions[1].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y,dragon_width,dragon_height);
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
        clearCanvas(ctx,dragon_screen_position.x,dragon_screen_position.y-vy*pre_i,dragon_width,dragon_height);
        drawImage(ctx,img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y-vy*i,dragon_width,dragon_height);
        pre_i = i;
    } 
    // for(let i =0;i<10;i++){
    //     ctx.clearRect(dragon_screen_position.x,dragon_screen_position.y+vy*pre_i,dragon_width,dragon_height);
    //     ctx.fillRect(dragon_screen_position.x,dragon_screen_position.y+vy*pre_i,dragon_width,dragon_height);
    //     ctx.drawImage(img,dragon_img_positions[0].x,dragon_img_positions[0].y,dragon_width,dragon_height,dragon_screen_position.x,dragon_screen_position.y+vy*i,dragon_width,dragon_height);
    //     pre_i = i;
    // }    

}