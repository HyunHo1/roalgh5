$(document).ready(function() {
    audio1 = document.getElementById('audio1');
    arrAudioSrc = ["./mp3/1.mp3", "./mp3/2.mp3", "./mp3/3.mp3", "./mp3/4.mp3", "./mp3/5.mp3", "./mp3/6.mp3", "./mp3/7.mp3"];
    $('.content4 .Al span.start').click(function() {
        $('.content4 .Al span.stop').hide();
        $('.content4 .Al span.start').show().css("display", "block");
        $(this).hide();
        $(this).next('span.stop').show().css("display", "block");


        $('#audio1').attr('src', arrAudioSrc[$(this).attr('id') - 1]);
        console.log($('#audio'));
        audio1.play();
        console.log($('#audio'));

    });
    $('.content4 .Al span.stop').click(function() {
        $('.content4 .Al span.start').show();
        $('.content4 .Al span.stop').hide();
        $(this).css('display', "block");
        $(this).hide();
        audio1.pause();
    });
});

