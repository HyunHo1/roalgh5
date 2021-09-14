$(window).scroll(function(){
    left_box = $('#introduce .inner_left');
    left_bar = $('#introduce .s_bar .bar');
    right_box = $('#introduce .inner_right');
    clova = $('#clova article');
    kickgoing = $('#kickgoing article');
    jenesis = $('#jenesis article');
    invoa = $('#invoa article');

    if (window.pageYOffset + $(window).height() > left_box.offset().top + 20 && window.pageYOffset < left_box.offset().top + $('#introduce .inner_left').height() - 20) {
        left_box.addClass('active');
    } 
    if (window.pageYOffset + $(window).height() > right_box.offset().top + 20 && window.pageYOffset < right_box.offset().top + $('#introduce .inner_right').height() - 20) {
        right_box.addClass('active');
    } 
    if (window.pageYOffset + $(window).height() > left_bar.offset().top + 20 && window.pageYOffset < left_bar.offset().top + $('#introduce .s_bar .bar').height() - 20) {
        left_bar.addClass('active');
    }
    if (window.pageYOffset + $(window).height() > clova.offset().top + 20 && window.pageYOffset < clova.offset().top + $('#clova article').height() - 20) {
        clova.addClass('active');
    }
    if (window.pageYOffset + $(window).height() > kickgoing.offset().top + 20 && window.pageYOffset < kickgoing.offset().top + $('#kickgoing article').height() - 20) {
        kickgoing.addClass('active');
    }
    if (window.pageYOffset + $(window).height() > jenesis.offset().top + 20 && window.pageYOffset < jenesis.offset().top + $('#jenesis article').height() - 20) {
        jenesis.addClass('active');
    }
    if (window.pageYOffset + $(window).height() > invoa.offset().top + 20 && window.pageYOffset < invoa.offset().top + $('#invoa article').height() - 20) {
        invoa.addClass('active');
    }
})