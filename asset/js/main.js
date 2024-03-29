$(function(){
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


    gsap.to('.svg-box',{
        delay:2.4,
        background:'transparent',
        onComplete:function(){
            mainSlide.autoplay.start();
        }
    })

    gsap.to('.dimmed',{
        delay:2.4,
        opacity:0,
        display:'none',
        background:'transparent',
        onComplete:function(){
            mainSlide.autoplay.start();
        }
    })
    









    $('.btn-menu').click(function(){
        $('.btn-menu, .header .menu-area, .container, .footer').toggleClass('active');

        $(window).resize(function(){ 
            if (window.innerWidth < 767) {
                
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



    $('.info-menu').hover(function(){
        $('.sc-story .info-box').addClass('open');
    },function(){
        $('.sc-story .info-box').removeClass('open');
    })
    

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        storyHeight = $('.sc-story').offset().top;

        if (curr > storyHeight ) {
            $('.sc-story .info-box, .btn-more').removeClass('show');
        } else {
            $('.sc-story .info-box, .btn-more').addClass('show');
        }

        $(window).resize(function(){ 
            if (window.innerWidth < 1023) {
            
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
        },
    })




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

    });

    $('.swiper-pagination-bullet').hover(function() {
        slide2.slideToLoop($(this).index());
     });


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



    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;
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