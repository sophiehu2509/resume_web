
var floor1_hover_bg = 'url(images/merryChris5.png)'; 
var floor1_inactive_bg = 'url(images/merryChris1.png)';

var floor2_hover_bg = 'url(images/merryChris4.png)';
var floor2_inactive_bg = 'url(images/merryChris2.png)';


$(document).ready(function(){
 
    var keep_floor1_highlighted = false;
    var keep_floor2_highlighted = false;
    var judge = false;

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
            //keep_floor1_highlighted = true;
            //keep_floor2_highlighted = false;
            judge = false;
            return;
        }
        //keep_floor2_highlighted = true;
        $('.floor1').css('background', floor1_hover_bg);
        $('.floor1').css('background-size', 'cover');
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
            //keep_floor1_highlighted = true;
            //keep_floor2_highlighted = false;
            judge = false;
            return;
        }
        //keep_floor2_highlighted = true;
        $('.floor2').css('background', floor2_hover_bg);
        $('.floor2').css('background-size', 'cover');
        //$('.floor1').css('background', floor1_inactive_bg);
        //$('.floor1').css('background-size', 'cover');
        //keep_floor1_highlighted = false;
        judge = true;

       
    });
});








