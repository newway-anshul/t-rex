var Obstacles = (function () {
    var obstaclesdone = false;
    var obstacle_images= [
        {
            x:226,
            y:0,
            w:17,
            h:40,
            type:'1',        

        },
        {
            x:262,
            y:0,
            w:17,
            h:40,
            type:'1'
        },
        {
            x:226,
            y:0,
            w:36,
            h:37,
            type:'1'
        },
        {
            x:245,
            y:0,
            w:34,
            h:35,
            type:'1'
        },
        {
            x:296,
            y:0,
            w:36,
            h:36,
            type:'1'
        },
        {
            x:332,
            y:0,
            w:25,
            h:48,
            type:'0'
        },
        {
            x:332,
            y:0,
            w:50,
            h:48,
            type:'0'
        },
        {
            x:382,
            y:0,
            w:25,
            h:48,
            type:'0'
        },
        {
            x:382,
            y:0,
            w:50,
            h:48,
            type:'0'
        }
        // {
        //     x:134,
        //     y:0,
        //     w:46,
        //     h:36,
        //     type:'2'
        // },
        // {
        //     x:180,
        //     y:0,
        //     w:46,
        //     h:33,
        //     type:'2'
        // }
    ]
    var obstacles = getobstacles();
    var height_factor = 0;
    function drawObstacles(ctx, img, speed) {

        if (!obstaclesdone ) {
            obstacles.forEach((element, index) => {
                if(element.obs_screen_x<100)
                {
                 checkforcollision(ctx,img,element);
                }
                
                if (element.obs_screen_x+element.obs_image.w < 0) {
                    log(800 + element.obs_screen_x - speed + 'slicing ');
                    obstacles.splice(index, 1);
                    obstacles.length == 0 ? obstaclesdone = true : '';
                }
                else {
                    element.obs_screen_x = element.obs_screen_x - speed;
                    if (element.obs_image.type == 1) {
                        height_factor = 10;
                    }
                    else {
                        height_factor = 0
                    }
                    Utils.drawImage(
                        ctx,
                        img,
                        element.obs_image.x,
                        element.obs_image.y,
                        element.obs_image.w,
                        element.obs_image.h,
                        element.obs_screen_x,
                        element.obs_screen_y + height_factor,
                        element.obs_image.w,
                        element.obs_image.h
                    );                    
                }
            });
            console.log(obstacles);
        }
        else {
            obstacles = getobstacles();
            obstaclesdone = false;
        }
    }
    function resetObstacles(){
      obstaclesdone = true;
    }
    function getobstacles() {
        //var count = Math.floor(Math.random() * 4 + 1);
        var count = 1
        var obstacles = [];
        for (let i = 0; i < count; i++) {
            obstacles[i] = {
                obs_screen_x: 800 + Math.floor(Math.random() * 81) * 10,
                obs_screen_y: 140,
                obs_image: obstacle_images[Math.floor(Math.random() * obstacle_images.length)]
            }
        }
        return obstacles;
    }

    function checkforcollision(ctx,img,element) {
        let dragonPosition = Dragon.getDragonPosition();
        if (element.obs_screen_x  < 50 && element.obs_screen_x >0) {
            if ( dragonPosition.y == element.obs_screen_y || 
                (dragonPosition.y+50 > element.obs_screen_y 
                    && 
                dragonPosition.y+50<element.obs_screen_y+element.obs_image.h))
                {
                Utils.sound().out()
                GameOver.gameover(ctx,img);               
            }
        }
    }
  
    
    return {
        drawObstacles: drawObstacles,
        resetObstacles:resetObstacles
    }
})()