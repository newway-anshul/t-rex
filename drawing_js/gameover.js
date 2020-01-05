function gameover(ctx,img,timer){
    clearInterval(timer);
    Utils.drawImage(ctx,img,484,14,192,17,ctx.canvas.width/2-20,ctx.canvas.height/2,192,19);
    Utils.drawImage(ctx,img,0,0,40,40,350,65,40,40);
}