$(window).scroll(function() {
    left1 = $('.section2 .inner-sec2 .left-box');
    right = $('.section2 .inner-sec2 .right-box');
    left_bar = $('.section2 .inner-sec2 .left-bar ul li');
    left2 = $('.section3 .inner-sec3 .sec3-left-box');
    right1 = $('.section3 .inner-sec3 .sec3-right-box');
    left3 = $('.section4 .inner-sec4 .sec4-left-box');
    right2 = $('.section4 .inner-sec4 .sec4-right-box');
    left4 = $('.section5 .inner-sec5 .sec5-left-box');
    right3 = $('.section5 .inner-sec5 .sec5-right-box');
    if (window.pageYOffset + $(window).height() > left1.offset().top + 20 && window.pageYOffset < left1.offset().top + $('.section2 .left-box').height() - 20) {
        left1.addClass('active');
    } else {
        left1.removeClass('active');
    }
    if (window.pageYOffset + $(window).height() > right.offset().top + 20 && window.pageYOffset < right.offset().top + $('.section2 .right-box').height() - 20) {
        right.addClass('active');
    } else {
        right.removeClass('active');
    }

    if (window.pageYOffset + $(window).height() > left_bar.offset().top + 20 && window.pageYOffset < left_bar.offset().top + $('.section2 .left-box').height() - 20) {
        left_bar.addClass('active');
    } else {
        left_bar.removeClass('active');
    }

    if (window.pageYOffset + $(window).height() > left2.offset().top + 20 && window.pageYOffset < left2.offset().top + $('.section3 .sec3-left-box').height() - 20) {
        left2.addClass('active');
    } else {
        left2.removeClass('active');
    }
    if (window.pageYOffset + $(window).height() > right1.offset().top + 20 && window.pageYOffset < right1.offset().top + $('.section3 .sec3-right-box').height() - 20) {
        right1.addClass('active');
    } else {
        right1.removeClass('active');
    }
    if (window.pageYOffset + $(window).height() > left3.offset().top + 20 && window.pageYOffset < left3.offset().top + $('.section4 .sec4-right-box').height() - 20) {
        left3.addClass('active');
    } else {
        left3.removeClass('active');
    }
    if (window.pageYOffset + $(window).height() > right2.offset().top + 20 && window.pageYOffset < right2.offset().top + $('.section4 .sec4-right-box').height() - 20) {
        right2.addClass('active');
    } else {
        right2.removeClass('active');
    }

    if (window.pageYOffset + $(window).height() > left4.offset().top + 20 && window.pageYOffset < left4.offset().top + left4.height() - 20) {
        left4.addClass('active');
    } else {
        left4.removeClass('active');
    }
    if (window.pageYOffset + $(window).height() > right3.offset().top + 20 && window.pageYOffset < right3.offset().top + right3.height() - 20) {
        right3.addClass('active');
    } else {
        right3.removeClass('active');
    }

})