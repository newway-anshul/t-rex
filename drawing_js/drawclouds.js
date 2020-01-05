var Clouds = (function () {
    var pre_clouds_done = false;
    var clouds = getcloudcount();

    function getcloudcount() {

        var count = Math.floor(Math.random() * 4 + 1);
        var positionarry = [];
        for (let i = 0; i < count; i++) {
            positionarry[i] = { x: Math.floor(Math.random() * 800), y: Math.floor(25 + Math.random() * 80) }
        }
        return positionarry;
    };
    return {
        drawcloud: function (ctx, img, speed) {
            if (!pre_clouds_done) {
                clouds.forEach(e => {
                    Utils.clearCanvas(ctx, 800 + e.x, e.y, 50, 25);
                });
                clouds.forEach((element, index) => {
                    if (800 + element.x - speed <= -50) {
                        log(800 + element.x - speed + 'slicing ');
                        clouds.splice(index, 1);
                        clouds.length == 0 ? pre_clouds_done = true : '';
                    }
                    else {
                        Utils.drawImage(ctx, img, 84, 0, 50, 25, 800 + element.x - speed, element.y, 50, 25);
                        clouds[index].x = element.x - speed;
                    }
                });
            }
            else {
                clouds = getcloudcount();
                log('drawing clouds' + clouds.length);
                pre_clouds_done = false;
            }
        }
    }
})();

