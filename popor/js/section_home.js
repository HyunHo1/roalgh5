$('.next_title_one').delay(2500).fadeIn(0, function() {
    $('.next_title_one').animate({ width: "100%" }, 4000);
    $('.next_title_one').fadeOut(0);
    $('.next_title_two').delay(4200).fadeIn(0, function() {
        $('.next_title_two').animate({ width: "100%" }, 4000);
        $('.bg_gradient').fadeIn(2000);
    })
});