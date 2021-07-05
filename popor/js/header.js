var flag = false;

$('.mac').click(function() {
    console.log('click');
    flag ? $('.mac-sub').fadeIn() : $('.mac-sub').fadeOut();

    $('.mac-inner').toggleClass('active', flag);
    flag = !flag;
});

$(window).scroll(function() {
    mac_bottom = $('.section2');
    if (window.pageYOffset > mac_bottom.offset().top) {
        $('.mac span').addClass('active');
    } else {
        $('.mac span').removeClass('active');
    }
    if (window.pageYOffset > mac_bottom.offset().top + 1000) {
        $('.mac-inner').addClass('.active');
    } else {
        $('.mac-inner').removeClass('.active');
    }

});
$(document).ready(function() {
    var goTopSec2 = $(".sec .inner-sec2").offset().top;
    var goTopSec3 = $(".sec .inner-sec3").offset().top;
    var goTopSec4 = $(".sec .inner-sec4").offset().top;
    var goTopSec5 = $(".sec .inner-sec5").offset().top;
    var goTopSec6 = $(".sec .inner-sec6").offset().top;
    var menuLi = $('.mac-inner ul li');

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
        $("html,body").animate({ scrollTop: goTofoot + 1 }, 1000);
    });

    $('.mac-sub').click(function() {
        $('.mac-sub').hide();
    });
});