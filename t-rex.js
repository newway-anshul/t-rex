var T_rex = function(){
    var ctx;
    var img = new Image();
    function init(canvas){
     ctx = canvas.getcontext('2d');
     img.src = './images/offline-sprite-1x.png';

    }
    function clearcanvas(){
       ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    function getcontext(){
        return ctx;
    }
    function getscore(){

    }

}

