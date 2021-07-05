$(document).ready(function() {
    $('.sec1_text1').delay(1000).fadeIn(0, function() {
        $('.sec1_text1').animate({ width: "100%" }, 4000);
        $('.sec1_text1').fadeOut(0);
        $('.sec1_text2').delay(4500).fadeIn(0, function() {
            $('.sec1_text2').animate({ width: "100%" }, 4000);
            $('.inner-sec1').fadeIn(2000);
        })
    });
})