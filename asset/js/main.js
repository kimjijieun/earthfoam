$(function(){

// 메인슬라이드

    var mainSlide = new Swiper(".sc-mainSlide", {
        autoplay: {
            delay: 1500,
        },
        loop: true,
        // resistance : false,
    });


    // let idx = 0;
    // i = $('.slide-area .slide-img').length
    // setInterval(() => {
    //     opacity:1,
    //     console.log(i);
    // }, 200);

    i = $('.slide-area .slide-img').length
    let slide = gsap.timeline({
        repeat:-1, //무한
        delay:1.5,
        // translateX:-50,

    })

    slide
    .to('.slide-area .img1',{
        delay:5,
        opacity:1,
        translateX:50,
    })
    .to('.slide-area .img2',{
        delay:5,
        opacity:1,
        translateX:50,
    })
    .to('.slide-area .img3',{
        delay:5,
        opacity:1,
        translateX:50,
    })
    .to('.slide-area .img4',{
        delay:5,
        opacity:1,
        translateX:50,
    })



    // sc-slide
    var swiper = new Swiper('.sc-slide .slide-swiper', {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        // speed: 800,

    });
    // 호버
    $('.swiper-pagination-bullet').hover(function() {
        $( this ).trigger( "click" );
     });


    //.sc-sleep .btn
    $('.btn-open').click(function(){
        $(this).children('.btn-open .open').toggleClass('active')

        if ($(this).siblings('.test-info').css('display') == 'none') {
            $('.test-info').stop().slideUp();
            $(this).siblings('.test-info').stop().slideDown();
            
        } else {
            $('.test-info').stop().slideUp();
        }
    })

    







})