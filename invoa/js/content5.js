$(window).scroll(function() {
    lt5 = $('.content5 .inner-con5 .text-con');
    if (window.pageYOffset + $(window).height() > lt5.offset().top + 20 && window.pageYOffset < lt5.offset().top + lt5.height() - 20) {
        lt5.addClass('active');
    } else {
        lt5.removeClass('active');
    }
})