$(document).ready(function() {
    $('.Qw').mouseover(function() {
        $(this).children('.Ho').show();
    });
    $('.Qw').mouseout(function() {
        $(this).children('.Ho').hide();
    });
});

//=======================================================

$(document).ready(function() {
    $('.content6>.plus').click(function() {
        $('.content6>.section2').show();
        $('.content6>.plus').hide();
        $('.content6>.plus1').show();
    });
    $('.content6>.plus1').click(function() {
        $('.content6>.section3').show();
        $('.content6>.plus1').hide();
    });
});