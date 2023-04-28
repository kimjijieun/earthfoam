$(function(){

// 메인슬라이드

    var mainSlide = new Swiper(".sc-mainslide", {
        effect:'fade',
        speed : 1000,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
    });
    mainSlide.autoplay.stop();

    gsap.to('.sc-mainslide .svg-box',{
        delay:1.5,
        background:'transparent',
        onComplete:function(){
            mainSlide.autoplay.start();
        }
    })


    $(window).resize(function(){
        if (window.innerWidth < 767) {
            gsap.to('.sc-mainslide .slide-area .svg-wrap',{
                opacity:0,
                visibility: 'hidden'
            })
        }
    })







    // btn-menu

    $('.btn-menu').click(function(){
        $('.btn-menu, .header .menu-area, .container, .footer').toggleClass('active');

        $(window).resize(function(){ 
            if (window.innerWidth < 767) {  // 다바이스 크기가 480이상일때 
                // $('.header .menu-side').toggleClass('active');
                
                if ($('.btn-menu').hasClass('active') ) {
                    $('.header .menu-area, .container').removeClass('active');
                    $('.header .menu-side').addClass('active')
                } else {
                    $('.header .menu-area, .container').removeClass('active');
                    $('.header .menu-side').removeClass('active')
                }
            }
            
            }).resize(); 

        $('body').toggleClass('hidden');
    })

    // btn-more

    $('.info-menu').hover(function(){
        $('.sc-story .info-box').addClass('open');
    },function(){
        $('.sc-story .info-box').removeClass('open');
    })
    
    // more버튼 바뀌기
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        // storyHeight = $('.sc-story').outerHeight();
        storyHeight = $('.sc-story').offset().top;

        if (curr > storyHeight ) {
            $('.sc-story .info-box, .btn-more').removeClass('show');
        } else {
            $('.sc-story .info-box, .btn-more').addClass('show');
        }

        $(window).resize(function(){ 
            if (window.innerWidth < 1023) {  // 다바이스 크기가 480이상일때 
            
            if (curr > storyHeight ) {
                $('.sc-story .info-box, .btn-more').addClass('show');
            }
        }
            
            }).resize(); 
    })


    const up = gsap.utils.toArray('.up');
    up.forEach((up) => {
        gsap.fromTo(up,{
            y: 20,
            opacity: 0
        },{
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: up,
                start: 'top+=30% 70%',
                end: 'bottom top',
                // markers: true,
            },
        })
    })


    gsap.from('.sleep-wrap .item-up',{
        y: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: '.sleep-wrap',
            start: 'top 70%',
            end: 'bottom top',
            stagger:0.1,
            // markers: true,
        },
    })

    gsap.from('.benefits-list .benefits-item',{
        y: 20,
        opacity: 0,
        stagger:0.2,
        scrollTrigger: {
            trigger: '.benefits-list .benefits-item',
            start: 'top bottom',
            end: 'bottom top',
            stagger:0.1,
            // markers: true,
        },
    })




    // sc-slide
    var slide2 = new Swiper('.sc-slide .slide-swiper', {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        // loopedSlides: 1
        // speed: 800,

    });
    // 호버
    $('.swiper-pagination-bullet').hover(function() {
        slide2.slideToLoop($(this).index());
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

    


    $(window).resize(function(){     

        if ($('.sc-story .info-menu').width() == 1023 ){
 
            $('.sc-story .info-box, .btn-more').removeClass('show');
 
        }
 
    });


    // 커서

    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;
// console.log(xVal+'//'+yVal);
        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
        
    })


    $('.sc-mattres .mattres-list .mattres-box').mouseover(function(){

        gsap.to('.cursor',{
            opacity:1,
            visibility: 'visible'
        })

    })
    $('.sc-mattres .mattres-list .mattres-box').mouseleave(function(){

        gsap.to('.cursor',{
            opacity:0,
            visibility: 'hidden'
        })
    })


})