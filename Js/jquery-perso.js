// Script pour cacher le menu au scrolldown et le remettre au scrolltop
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                        $('.menu').fadeOut(500);
                    }
                    else{
                    $(".menu").fadeIn(500);
                    }
            if ($(window).scrollTop() > 1) {
                $('.carre-header').fadeOut(500);
            }
            else{
              $('.carre-header').fadeIn(500);
            }
            if($(window).scrollTop() > 1200){
              $('.name').fadeOut(500);
            }
            else{
              $('.name').fadeIn(500);
            }
            if($(window).scrollTop() > 1200){
              $('.fonction').fadeOut(500);
            }
            else{
              $('.fonction').fadeIn(500);
            }
            if($(window).scrollTop() > 1200){
              $('.mb_share').fadeOut(500);
            }
            else{
              $('.mb_share').fadeIn(500);
            }


            if($(window).scrollTop() > 1200){
              $('.bar-recherche').fadeOut(500);
            }
            else{
              $('.bar-recherche').fadeIn(500);
            }


        });


    });


// Effet avec le carré header :
$(function(){
  $('.carre-header').fadeOut(50);
  $('.button-plus').click(function(){
    $('.carre-header').fadeIn(300);
  });

});
