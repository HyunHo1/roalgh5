var bannerli = $(".banner-area>ul>li");

var arrowLeft = $("span.arrow.left");
var arrowRight = $("span.arrow.right");

arrowLeft.on("click", arrowLeftFunc);

function arrowLeftFunc() {
    var bannerli = $(".banner-area>ul>li");
    $(".banner-area>ul").append(bannerli.eq(0));
}
arrowRight.on("click", arrowRightFunc);

function arrowRightFunc() {
    var bannerli = $(".banner-area>ul>li");
    $(".banner-area>ul").prepend(bannerli.last());
}