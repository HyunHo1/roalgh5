$(window).scroll(function() {
    lt2 = $('.content2 .inner-con2 .left-text2');
    if (window.pageYOffset + $(window).height() > lt2.offset().top + 20 && window.pageYOffset < lt2.offset().top + lt2.height() - 20) {
        lt2.addClass('active');
    } else {
        lt2.removeClass('active');
    }
})