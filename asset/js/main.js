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


    // idx = 0;
    // setInterval(() => {
    //     $('.slide-area').html(i[idx])
    //     idx++;
    //     console.log(idx);
    // }, 200);



    $(window).resize(function(){
        if (window.innerWidth < 767) {
            gsap.to('.sc-mainslide .slide-area .svg-wrap',{
                opacity:0,
                visibility: 'hidden'
            })
            // $('.slide-area .svg-wrap').animate({opacity:'0'}, 500);

            // gsap.to('.sc-mainslide .slide-area .svg-wrap',{
            //     opacity:0,
            //     visibility: 'hidden'
            // })
        }
    })

    i = $('.slide-area .slide-img').length;
    let slide = gsap.timeline({
        repeat:-1, //무한
        // delay:1.2,
        repeatDelay: 2, //애니메이션 동작 후 s초 이따가 동작
        // translateX:-50,

    })

    slide
    .addLabel('a')
    // .fromTo('.slide-area .img-box',{
    //     opacity:0,
    //     },{
    //     delay:0.5,
    //     opacity:1
    // })
    .to('.slide-area .img1',{
        delay:6,
        opacity:1,
        translateX:50,
    })
    .to('.slide-area .img2',{
        delay:6,
        opacity:1,
        translateX:50,
    })
    .to('.slide-area .img3',{
        delay:6,
        opacity:1,
        translateX:50,
    })
    .to('.slide-area .img4',{
        delay:6,
        opacity:1,
        translateX:50,
    })






    // btn-menu

    $('.btn-menu').click(function(){
        $('.btn-menu, .header .menu-area, .container').toggleClass('active');

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

    $('.btn-more').hover(function(){
        $('.sc-story .info-box').toggleClass('open')
        // $('.sc-story .info-box').animate({
        //     width: '300px',
        //     opacity: '1'
        // },300)
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

//     const reveal = gsap.utils.toArray('.reveal');
    //   reveal.forEach((text,i)=>{
    //     ScrollTrigger.create({
    //      trigger:text,
    //      toggleClass:'active',
    //      start:"top 90%",
    //      end:"top 20%",
    //      markers:true,
    //      scrub:true
    //   });
    // });

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