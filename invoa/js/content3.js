$(window).scroll(function() {
    lt3 = $('.content3 .inner-con3 .Pe');
    if (window.pageYOffset + $(window).height() > lt3.offset().top + 20 && window.pageYOffset < lt3.offset().top + $('.content3 .inner-con3').height() - 20) {
        lt3.addClass('active');
    } else {
        lt3.removeClass('active');
    }
})