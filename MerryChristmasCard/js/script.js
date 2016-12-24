
var floor1_hover_bg = 'url(images/merryChris4.png)'; 
var floor1_inactive_bg = 'url(images/merryChris1.png)';

var floor2_hover_bg = 'url(images/merryChris5.png)';
var floor2_inactive_bg = 'url(images/merryChris2.png)';


$(document).ready(function(){

    var keep_floor1_highlighted = false;
    var keep_floor2_highlighted = false;
    var judge = false;
    $('.link').css('opacity', '0');
    $('.floor1 h2').css('opacity', '1');

    $('.floor1').on('click', function(){

        if (judge){
            $('.floor1').css('background', floor1_inactive_bg);
            $('.floor1').css('background-size', 'cover');
            $('.floor1 h2').css('opacity', '1');
            judge = false;
            return;
        }
        $('.floor1').css('background', floor1_hover_bg);
        $('.floor1').css('background-size', 'cover');
        $('.floor1 h2').css('opacity', '0');
        judge = true;
        
    });
    $('.floor2').on('click', function(){

        if (judge){
            $('.floor2').css('background', floor2_inactive_bg);
            $('.floor2').css('background-size', 'cover');
             $('.link').css('opacity', '0');
            judge = false;
            return;
        }
        $('.floor2').css('background', floor2_hover_bg);
        $('.floor2').css('background-size', 'cover');
        $('.link').css('opacity', '1');
        judge = true;  
    });


});

