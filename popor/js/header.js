$(window).scroll(function() {
    mac_bottom = $('#introduce article');
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

$(document).ready(function() {
    var goTopSec2 = $("#introduce article").offset().top;
    var goTopSec3 = $("#clova article").offset().top;
    var goTopSec4 = $("#kickgoing article").offset().top;
    var goTopSec5 = $("#jenesis article").offset().top;
    var goTopSec6 = $("#invoa article").offset().top;
    var goTopSec7 = $("#contacts article").offset().top;
    var menuLi = $('#gnb ul li');

    console.log(goTopSec2);

    menuLi.eq(0).on('click', function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    menuLi.eq(1).on('click', function() {
        $("html,body").animate({ scrollTop: goTopSec2 + 1 }, 1000);
    });
    menuLi.eq(2).on('click', function() {
        $("html,body").animate({ scrollTop: goTopSec3 + 1 }, 1000);
    });
    menuLi.eq(3).on('click', function() {
        $("html,body").animate({ scrollTop: goTopSec4 + 1 }, 1000);
    });
    menuLi.eq(4).on('click', function() {
        $("html,body").animate({ scrollTop: goTopSec5 + 1 }, 1000);
    });
    menuLi.eq(5).on('click', function() {
        $("html,body").animate({ scrollTop: goTopSec6 + 1 }, 1000);
    });
    menuLi.eq(6).on('click', function() {
        $("html,body").animate({ scrollTop: goTopSec7 + 1 }, 1000);
    });
    menuLi.eq(6).on('click', function() {
        $("html,body").animate({ scrollTop: goTofoot + 1 }, 1000);
    });

    $('.mac-sub').click(function() {
        $('.mac-sub').hide();
    });
});

