$(document).ready(function() {
    $('.right-box').click(function() {
        console.log('click');
        $('.sub-header-bar').show();
        $('.sub-inner').addClass('active');
    });

    $('.sub-inner .close').click(function() {
        $('.sub-inner').removeClass('active');
        $('.sub-header-bar').hide();
    });

    $('.left-box .ENG').click(function() {
        $('.left-box .KOR').css("color", "#fff");
        $('.left-box .ENG').css("color", "#ad6b38")
    });
    $('.left-box .KOR').click(function() {
        $('.left-box .ENG').css("color", "#fff");
        $('.left-box .KOR').css("color", "#ad6b38")
    })



});