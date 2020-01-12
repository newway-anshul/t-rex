var GameOver = (function () {
    function gameover(ctx, img) {
        clearInterval(timer);
        Utils.drawImage(ctx, img, 484, 14, 194, 14, 313,97,194,14);
        Utils.drawImage(ctx, img, 0, 0, 40, 35, 390, 120, 40, 35);
        Utils.setGameFlag();
    }
    return {
        gameover: gameover
    }
})() 