$(window).scroll(function() {
    mac_bottom = $('#introduce');
    if (window.pageYOffset > mac_bottom.offset().top) {
        $('.nav_sub_bar').addClass('active');
    } else {
        $('.nav_sub_bar').removeClass('active');
    }
});

$(document).ready(function(){
    $(".nav_bar").on("click",function(){
        $("#gnb").animate({width:"380px"},500);
    });
    $(".close_btn").on("click",function(){
        $("nav").animate({width:"0px"},500);
    });
});

