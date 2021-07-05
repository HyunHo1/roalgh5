$('.left-menu>ul>li').eq(0).on('click', gnbfunc);
$('.left-menu>ul>li').eq(1).on('click', gnbfunc1);
$('.left-menu>ul>li').eq(2).on('click', gnbfunc2);
$('.left-menu>ul>li').eq(3).on('click', gnbfunc3);
$('.left-menu>ul>li').eq(4).on('click', gnbfunc4);
$('.right-menu>ul>li').eq(0).on('click', gnbfunc5);

function gnbfunc() {
    $('.sub-menu').slideToggle(400)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-Gu4').fadeOut(0)
}

function gnbfunc1() {
    $('.sub-Gu').slideToggle(400);
    $('.sub-menu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-Gu4').fadeOut(0)
}

function gnbfunc2() {
    $('.sub-Gu1').slideToggle(400);
    $('.sub-menu').fadeOut(0)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-Gu4').fadeOut(0)
}

function gnbfunc3() {
    $('.sub-Gu2').slideToggle(400);
    $('.sub-menu').fadeOut(0)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-Gu4').fadeOut(0)
}

function gnbfunc4() {
    $('.sub-Gu3').slideToggle(400);
    $('.sub-menu').fadeOut(0)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
    $('.sub-Gu4').fadeOut(0)
}

function gnbfunc5() {
    $('.sub-Gu4').slideToggle(400)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-menu').fadeOut(0)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
}



/*search jquery*/

$('.right-menu>ul>li').eq(2).on('click', searchbtn1)

function searchbtn1() {
    $('#search').fadeToggle(400)
}

$('.right-menu>ul>li').eq(3).on('click', searchbtn2)

function searchbtn2() {
    $('.Bar').slideToggle(500)
    $('.sub-Gu4').fadeOut(0)
    $('.sub-Gu3').fadeOut(0)
    $('.sub-menu').fadeOut(0)
    $('.sub-Gu').fadeOut(0)
    $('.sub-Gu1').fadeOut(0)
    $('.sub-Gu2').fadeOut(0)
}

$('.close').on('click', searchbtn3)

function searchbtn3() {
    $('.Bar').fadeOut(100)
}

$(document).ready(function() {
    $('.midea-menu-bar').click(function() {
        $('.left-menu').slideToggle(400);
        $('#search').slideToggle(400);
    });
});