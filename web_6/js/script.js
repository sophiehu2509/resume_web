var lnStickyNavigation;
var isNavBarShown = false;

$(document).ready(function(){
	applyHeader();
	//applyNavigation();
	//applyMailTo();
   applyNav();
   // applyStickyNavigation();
});

/*$(function() {
    // Stick the #nav to the top of the window
    var jum = $('.jumbotron');
    
    var isFixed = false;
    var $w = $(window);
    $w.scroll( function() {
        var scrollTop = $w.scrollTop();
        //var shouldBeFixed = scrollTop > navHomeY;
        var shouldBeShow = scrollTop > jum.offset().top + 20;
       // if (shouldBeFixed && !isFixed) 

        if (shouldBeShow ) {
            /*if ($('.navbar').is( ":visible" ) ) {
                $('.navbar').fadeOut(100);
            }*/
            
          
        //$('.navbar').show();
        /*if ($('.navbar').css(('opacity') == '0.75') {
            $('.navbar').css({
            'opacity': '0';
            height:$(window).height() + 'px'
            });
        }
        //$('.navbar').fadeOut(100);
       $('.navbar').fadeIn(500);
        /*$('.navbar').hover(function() { 
                $('.navbar').fadeIn(500);
            },function() {   
                $('.navbar').fadeOut(100);
            });
            isFixed = true;

        }else if (!shouldBeShow ){
              //$('.navbar').fadeIn(500);
            $('.navbar').show();
            $('.navbar').css({opacity:0.75});
        }
       
         
  
    });

});*/

function checkNeedForHiding() {
      if($(window).scrollTop() > lnStickyNavigation){
            $('.navbar').hover(function() { 
                $('.navbar').fadeIn(500);
            },function() {   
                $('.navbar').fadeOut(100);
            });
    }else {
         $('.navbar').hover(function() { 
                $('.navbar').fadeIn(500);
            },function() {   
                $('.navbar').fadeOut(100);
            });
    }
}

function applyStickyNavigation(){
    lnStickyNavigation = $('.jumbotron').offset().top + 20;

    $(window).on(function(){
        checkNeedForHiding();
    });
    checkNeedForHiding();
}




function applyHeader(){
	$('.jumbotron').css({height:$(window).height() + 'px'});
}



function applyNav(){
    var ishead = true;

    
        //$(".navbar").hide();
        $(".navbar").addClass('showme');
        
        // fade in .navbar
        $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 100) {
                $('.navbar').removeClass('showme');  
                isNavBarShown = true;
                
            } else {
                 $('.navbar').addClass('showme');
                isNavBarShown = false;
            }
        });


        /* when navbar is hovered over it will override previous */
       $('.navbar').hover(function () {
            if (isNavBarShown) { return; }
            //$('.navbar').show();
             $('.navbar').addClass('showme');
        }, function () {
            if (!isNavBarShown) { return; }
            //$('.navbar').fadeOut();
            $('.navbar').removeClass('showme');
            //$('.navbar').addClass('showme');
        });
   
    
}






