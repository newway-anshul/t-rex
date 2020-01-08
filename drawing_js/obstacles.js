var obstaclesdone = false;
var obstacles = getobstacles();
function drawObstacles(ctx,img,speed){
    log('calling obstacles');
    if (!obstaclesdone) {
        obstacles.forEach((e,index) => {
           Utils.clearCanvas(ctx, e.x+speed, e.y, 27, 50);
        });
        obstacles.forEach((element, index) => {
            checkforcollision(element,index,speed);
            if (element.x  <= -10) {
                log(800 + element.x - speed + 'slicing ');
                obstacles.splice(index, 1);
                obstacles.length == 0 ? obstaclesdone = true : '';
            }
            else {
                Utils.drawImage(ctx, img, 330, 0, 27, 50, element.x, element.y, 27, 50);
                obstacles[index].x = element.x - speed;
                }
        });
        console.log(obstacles);
    }
    else {
        obstacles = getobstacles();
        log('drawing obstacles' + obstacles.length);
        obstaclesdone = false;
    }
}

function getobstacles(){
   var count = Math.floor(Math.random() * 4 + 1);
    var positionarry = [];
    for (let i = 0; i < count; i++) {
        positionarry[i] = { x: 800+Math.floor(Math.random()*81)*10, y: 140 } //what if position is
    }
    return positionarry;
}
function checkforcollision(element,index,speed){
    if (element.x+10  == 50) {
        alert('collided '+index);
    }
}