
var floor1_hover_bg = 'url(images/merryChris4.png)'; 
var floor1_inactive_bg = 'url(images/merryChris1.png)';

var floor2_hover_bg = 'url(images/merryChris5.png)';
var floor2_inactive_bg = 'url(images/merryChris2.png)';


$(document).ready(function(){
     //  $.fn.snow();

    var keep_floor1_highlighted = false;
    var keep_floor2_highlighted = false;
    var judge = false;
    $('.link').css('opacity', '0');
    $('.floor1 h2').css('opacity', '1');
    // FIRST FLOOR
    /*$('.floor1').mouseover(function(){
        $('.floor1').css('background', floor1_hover_bg);
         $('.floor1').css('background-size', 'cover');
        
    });
    $('.floor1').mouseout(function(){
        if (keep_floor1_highlighted) {
            $('.floor1').css('background', floor1_hover_bg);
            $('.floor1').css('background-size', 'cover');
            $('.floor2').css('background', floor2_inactive_bg);
             $('.floor1').css('background-size', 'cover');
            
        } else if (keep_floor2_highlighted) {
            $('.floor2').css('background', floor2_hover_bg);
            $('.floor2').css('background-size', 'cover');
            $('.floor1').css('background', floor1_inactive_bg);
            
        } else {
            $('.floor1').css('background', floor1_inactive_bg);
             $('.floor1').css('background-size', 'cover');
           
        }
    });*/
    $('.floor1').on('click', function(){
     
        //keep_floor1_highlighted = true;
        //keep_floor2_highlighted = false;

        if (judge){
            //$('.floor2').css('background', floor2_hover_bg);
            //$('.floor2').css('background-size', 'cover');
            $('.floor1').css('background', floor1_inactive_bg);
            $('.floor1').css('background-size', 'cover');
            $('.floor1 h2').css('opacity', '1');
            //keep_floor1_highlighted = true;
            //keep_floor2_highlighted = false;
            judge = false;
            return;
        }
        //keep_floor2_highlighted = true;
        $('.floor1').css('background', floor1_hover_bg);
        $('.floor1').css('background-size', 'cover');
        $('.floor1 h2').css('opacity', '0');
        //$('.floor2').css('background', floor2_inactive_bg);
        //$('.floor2').css('background-size', 'cover');
        //keep_floor1_highlighted = false;
        judge = true;
        
    });
    
    // SECOND FLOOR
    /*$('.floor2').mouseover(function(){
        $('.floor2').css('background', floor2_hover_bg);
        $('.floor2').css('background-size', 'cover');
    });
    $('.floor2').mouseout(function(){
        if (keep_floor1_highlighted) {
            $('.floor1').css('background', floor1_hover_bg);
            $('.floor1').css('background-size', 'cover');
            $('.floor2').css('background', floor2_inactive_bg);
            
        } else if (keep_floor2_highlighted) {
            $('.floor2').css('background', floor2_hover_bg);
            $('.floor2').css('background-size', 'cover');
           
          
        } else {
            $('.floor2').css('background', floor2_inactive_bg);
            $('.floor2').css('background-size', 'cover');
           
        }
    });*/
    $('.floor2').on('click', function(){

        if (judge){
            //$('.floor1').css('background', floor1_hover_bg);
            //$('.floor1').css('background-size', 'cover');
            $('.floor2').css('background', floor2_inactive_bg);
            $('.floor2').css('background-size', 'cover');
             $('.link').css('opacity', '0');
            //keep_floor1_highlighted = true;
            //keep_floor2_highlighted = false;
            judge = false;
            return;
        }
        //keep_floor2_highlighted = true;
        $('.floor2').css('background', floor2_hover_bg);
        $('.floor2').css('background-size', 'cover');
        $('.link').css('opacity', '1');
        //$('.floor1').css('background', floor1_inactive_bg);
        //$('.floor1').css('background-size', 'cover');
        //keep_floor1_highlighted = false;
        judge = true;

       
    });


});

/*window.onload = function() {

   var canvas = document.getElementById("sky");
   var ctx = canvas.getContext("2d");

   var W = canvas.innerWidth;
   var H = canvas.innerHeight;
   //canvas.width=W;
   //canvas.height=H;

   var mf = 100;
   var flakes = [];

   //look through the empty flakes and apply attributes
   for (var i = 0; i<mf;i++){
    flakes.push({
        x:Math.random()*W;
        y:Math.random()*H;
        r:Math.random()*5 + 2; //min of 2px and max of 7px
        d:Math.random() + 1; //density of the flake
    })
   }

   //draw flakes onto canvas
   function drawFlakes(){
        ctx.clearRect(0,0, W, H);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for(var i = 0;i<mf;i++){
            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        moveFlakes();
   }

   //animate the flakes
   var angle = 0;
   function moveFlakes(){
        angle += 0.01;
        for(var i = 0; i<mf; i++){
            //store current flake
            var f = flake[i];

            //update X and Y coordinates of each snowflake
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) *2;

            //if the snowflake reaches the bottom, send a new one to the top
            if (f.y > H){
                flake[i] = {x: Math.random() * W, y:0, r:f.r, d: f.d}
            }
        }
   }

   setInterval(drawFlakes, 25);

}*/










