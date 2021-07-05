//gaelley

function gallery1() {
    $('.gallery_nav .gallery-bg').fadeOut();
    $('.gallery_nav .gallery-1').fadeIn();
}

function gallery2() {
    $('.gallery_nav .gallery-bg').fadeOut();
    $('.gallery_nav .gallery-2').fadeIn();
}

function gallery3() {
    $('.gallery_nav .gallery-bg').fadeOut();
    $('.gallery_nav .gallery-3').fadeIn();
}

function gallery4() {
    $('.gallery_nav .gallery-bg').fadeOut();
    $('.gallery_nav .gallery-4').fadeIn();
}

function animate1() {
    console.log('1 play');
    $('.bottom-slide .border-slide').animate({ left: '0px', width: '0px' }, 0, function() {
        $('.Ho').removeClass('non');
        $('.slide1').addClass('non');
        gallery1();
        $('.bottom-slide .border-slide').stop().animate({
            width: '405.75px'
        }, 3000, function() {
            gallery2();
            $('.bottom-slide .border-slide').animate({ left: '405.75px', width: '0px' }, 0, function() {
                $('.Ho').removeClass('non');
                $('.slide2').addClass('non');
                $('.bottom-slide .border-slide').stop().animate({
                    width: '405.75px'
                }, 3000, function() {
                    gallery3();
                    $('.bottom-slide .border-slide').animate({ left: '811.5px', width: '0px' }, 0, function() {
                        $('.Ho').removeClass('non');
                        $('.slide3').addClass('non');
                        $('.bottom-slide .border-slide').stop().animate({
                            width: '405.75px'
                        }, 3000, function() {
                            gallery4();
                            $('.bottom-slide .border-slide').animate({ left: '1217.25px', width: '0px' }, 0, function() {
                                $('.Ho').removeClass('non');
                                $('.slide4').addClass('non');
                                $('.bottom-slide .border-slide').stop().animate({
                                    width: '405.75px'
                                }, 3000, function() {
                                    $('.bottom-slide .border-slide').animate({ left: '0px', width: '0px' }, 0, function() {
                                        $('.Ho').removeClass('non');
                                        $('.slide1').addClass('non');
                                        animate1();
                                    });
                                });
                            });
                        });
                    });
                });
            })
        })
    })
}

function animate2() {
    console.log('2 play');

    $('.bottom-slide .border-slide').animate({ left: '405.75px', width: '0px' }, function() {
        $('.Ho').removeClass('non');
        $('.slide2').addClass('non');
        gallery2();
        $('.bottom-slide .border-slide').stop().animate({
            width: '405.75px'
        }, 3000, function() {
            gallery3();
            $('.bottom-slide .border-slide').animate({ left: '811.5px', width: '0px' }, 0, function() {
                $('.Ho').removeClass('non');
                $('.slide3').addClass('non');
                $('.bottom-slide .border-slide').stop().animate({
                    width: '405.75px'
                }, 3000, function() {
                    gallery4();
                    $('.bottom-slide .border-slide').animate({ left: '1217.25px', width: '0px' }, 0, function() {
                        $('.Ho').removeClass('non');
                        $('.slide4').addClass('non');
                        $('.bottom-slide .border-slide').stop().animate({
                            width: '405.75px'
                        }, 3000, function() {
                            gallery1();
                            $('.bottom-slide .border-slide').animate({ left: '0px', width: '0px' }, 0, function() {
                                $('.Ho').removeClass('non');
                                $('.slide1').addClass('non');
                                $('.bottom-slide .border-slide').stop().animate({
                                    width: '405.75px'
                                }, 3000, function() {
                                    $('.bottom-slide .border-slide').animate({ left: '405.75px', width: '0px' }, 0, function() {
                                        $('.Ho').removeClass('non');
                                        $('.slide2').addClass('non');
                                        animate2();
                                    })
                                })
                            });
                        });
                    });
                });
            });
        });
    });
}

function animate3() {
    console.log('3 play');

    $('.bottom-slide .border-slide').animate({ left: '811.5px', width: '0px' }, 0, function() {
        $('.Ho').removeClass('non');
        $('.slide3').addClass('non');
        gallery3();
        $('.bottom-slide .border-slide').stop().animate({
            width: '405.75px'
        }, 3000, function() {
            gallery4();
            $('.bottom-slide .border-slide').animate({ left: '1217.25px', width: '0px' }, 0, function() {
                $('.Ho').removeClass('non');
                $('.slide4').addClass('non');
                $('.bottom-slide .border-slide').stop().animate({
                    width: '405.75px'
                }, 3000, function() {
                    gallery1();
                    $('.bottom-slide .border-slide').animate({ left: '0px', width: '0px' }, 0, function() {
                        $('.Ho').removeClass('non');
                        $('.slide1').addClass('non');
                        $('.bottom-slide .border-slide').stop().animate({
                            width: '405.75px'
                        }, 3000, function() {
                            gallery1();
                            $('.bottom-slide .border-slide').animate({ left: '405.75px', width: '0px' }, 0, function() {
                                $('.Ho').removeClass('non');
                                $('.slide2').addClass('non');
                                $('.bottom-slide .border-slide').stop().animate({
                                    width: '405.75px'
                                }, 3000, function() {
                                    $('.bottom-slide .border-slide').animate({ left: '811.5px', width: '0px' }, 0, function() {
                                        $('.Ho').removeClass('non');
                                        $('.slide3').addClass('non');
                                        animate3();
                                    })
                                })
                            })
                        })
                    });
                });
            });
        });
    });
}

function animate4() {
    console.log('4 play');
    $('.bottom-slide .border-slide').animate({ left: '1217.25px', width: '0px' }, 0, function() {
        $('.Ho').removeClass('non');
        $('.slide4').addClass('non');
        gallery4();
        $('.bottom-slide .border-slide').stop().animate({
            width: '405.75px'
        }, 3000, function() {
            gallery1();
            $('.bottom-slide .border-slide').animate({ left: '0px', width: '0px' }, 0, function() {
                $('.Ho').removeClass('non');
                $('.slide1').addClass('non');
                $('.bottom-slide .border-slide').stop().animate({
                    width: '405.75px'
                }, 3000, function() {
                    gallery2();
                    $('.bottom-slide .border-slide').animate({ left: '405.75px', width: '0px' }, 0, function() {
                        $('.Ho').removeClass('non');
                        $('.slide2').addClass('non');
                        $('.bottom-slide .border-slide').stop().animate({
                            width: '405.75px'
                        }, 3000, function() {
                            gallery3();
                            $('.bottom-slide .border-slide').animate({ left: '811.5px', width: '0px' }, 0, function() {
                                $('.Ho').removeClass('non');
                                $('.slide3').addClass('non');
                                $('.bottom-slide .border-slide').stop().animate({
                                    width: '405.75px'
                                }, 3000, function() {
                                    $('.bottom-slide .border-slide').animate({ left: '1217.25px', width: '0px' }, 0, function() {
                                        $('.Ho').removeClass('non');
                                        $('.slide4').addClass('non');
                                        animate4();
                                    });
                                });
                            })
                        })
                    })
                })
            })
        })
    });

}



$(function() {
    var i = 1;
    var myint;

    function start() {

        animate1();
    }

    start();

    $('.Ho').on('click', function() {
        $('.bottom-slide .border-slide').stop()
        $('.bottom-slide .border-slide').queue(function() {
            $(this).clearQueue();
        })
        clearInterval(myint);
        i = parseInt($(this).attr("id"));
        console.log(i);
        if (i == 2) {
            animate2();
        } else if (i == 3) {
            animate3();
        } else if (i == 4) {
            animate4();
        } else {
            animate1();
        }
    })
})
$(function() {
    animate();
})

var lineno = $('.content3 .bottom-slide>ul>li');

lineno.on('click', slidenonbtn);

function slidenonbtn() {
    var slideways = $(this).index();
    lineno.eq(slideways).fadeIn().siblings();
    $(this).addClass('non').siblings().removeClass('non');
    idx = slideways;

}