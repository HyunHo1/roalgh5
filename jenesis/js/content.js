$('.content').on('click', searchbtn4)

function searchbtn4() {
    $('.sub-Gu4').fadeOut(0)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
}


//gaelley


var ga11li = $('.content .inner-con>ul>li');
var itemsli = $('.content .iteme>ul>li');
ga11li.eq(0).show().siblings().hide();
var idx = 0;

function auto() {

    if (idx >= ga11li.length - 1) {
        idx = -1;
    }
    idx++;


    ga11li.eq(idx).fadeIn(500).siblings().fadeOut(500);

    itemsli.eq(idx).addClass('on').siblings().removeClass('on');
    if (idx >= ga11li.length - 1) {
        idx = -1;
    }
}
var setin = setInterval(auto, 5000);

//items

itemsli.on('click', itemsliclick);

function itemsliclick() {
    var idthis = $(this).index();
    ga11li.eq(idthis).fadeIn().siblings().fadeOut();
    $(this).addClass('on').siblings().removeClass('on');
    idx = idthis;

}

// $(function() {
//     $('span.start').click(function() {
//         $('span.start').attr('src', 'img/stop.png')
//     })
// })

var arrow1 = $('span.left');
var arrow2 = $('span.right');

arrow1.on('click', arrowfunc);

function arrowfunc() {
    if (idx <= 0) idx = ga11li.length;
    idx--;
    ga11li.eq(idx).fadeIn(400).siblings().fadeOut();
    itemsli.eq(idx).addClass('on').siblings().removeClass('on');
}
arrow2.on('click', arrowfunc2);

function arrowfunc2() {
    if (idx >= ga11li.length - 1) idx = -1;
    idx++;
    ga11li.eq(idx).fadeIn(400).siblings().fadeOut();
    itemsli.eq(idx).addClass('on').siblings().removeClass('on');
}

var arrow3 = $('span.arrow');

arrow3.hover(
    function() { //over
        clearInterval(setin);
    },
    function() { //out

    }
);

var play = $('span.start');
var stop = $('span.stop');

play.click(
    function() { //over
        clearInterval(setin);
        $('span.start').css("display", "none");
        $('span.stop').css("display", "block");
    }
);

stop.click(
    function() { //over
        setin = setInterval(auto, 5000);
        $('span.stop').css("display", "none");
        $('span.start').css("display", "block");
    }
);