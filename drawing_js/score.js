var Score = (function () {
    var counter = 0;
    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };
    return {
        drawscore: function (ctx) {
            ++counter;
            Utils.clearCanvas(ctx, 650, 0, 150, 20);
            ctx.save();
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.font = '15px serif'
            ctx.fillText("Your Score : " + pad(counter, 5), 650, 20);
            ctx.restore();
        }
    }
})();