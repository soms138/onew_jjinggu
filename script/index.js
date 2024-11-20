// home
// const mv_slide = new Swiper('#mv_slide',{
//     slidesPerView: 1,
//     centeredSlides:true,
//     direction: 'horizontal',
//     loop:true,
//     spaceBetween: 10,
//     scrollbar:{el:'#mv_slide .swiper-scrollbar'},
// })

// album
const album_slide = new Swiper('#album_slide',{
    init: true,
    initialSlide: 0,
    loopedSlides: 3,
    slidesPerView: 'auto',
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    breakpoints:{
        400:{slidesPerView:2},
        500:{slidesPerView:2.5},
        600:{slidesPerView:3},
        650:{slidesPerView:3.5},
        770:{slidesPerView:4},
    }
})

// official_slide
const official_slide = new Swiper('#video_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    loop:true,
    spaceBetween: 0,
    pagination : { // 페이징 설정
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
})

// shorts_slide
const shorts_slide = new Swiper('#shorts_slide',{
    slidesPerView: 'auto',
    centeredSlides:true,
    direction: 'horizontal',
    loop:true,
    loopedSlides: 2,
    spaceBetween: 10,
    slidesOffsetAfter: 10,
    breakpoints:{
        345:{centeredSlides:false,},
        450:{centeredSlides:true,},
        590:{centeredSlides:false,},
        700:{centeredSlides:true,},
        750:{centeredSlides:false,},
    }
})

// play_slide
const play_tab = new Swiper('#play_tab',{
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 10,
    slidesOffsetAfter: 20,
    freeMode : false,
    // watchSlidesProgress: true

})
const tab_title = document.querySelectorAll('.tab_title div > a')
const tab_contents = document.querySelectorAll('.list')
const moreBtn = document.querySelectorAll('.more')
const contents = document.querySelectorAll('.list > ul')
const play_slide = new Swiper('#play_slide',{
    slidesPerView: 'auto',
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    centeredSlides:true,
    breakpoints:{
        320:{slidesPerView:1},
        370:{slidesPerView:1.5},
        530:{slidesPerView:2},
    },
    thumbs: {
        swiper: play_tab
    },
    on:{
        init:function(){
            // 슬라이드가 변경되기 전 초기 실행함수
            // this = #play_slide
            // this.slides = .swiper-slide
            // this.activeIndex = 현재 활성화된 slide
            
            // this.slides[this.activeIndex].querySelector('.slide_txt').style.opacity = '1';
            tab_title.forEach(function(t,i){
                t.addEventListener('click', function(e){
                    e.preventDefault()
                    for(let i of tab_title){i.classList.remove('active')}
                    t.classList.add('active')
                    // tab_contents[i].
                })
            })
            moreBtn.forEach(function(target){
                target.addEventListener('click',function(e){
                    e.preventDefault()
                    for(let j of moreBtn){j.style.display = 'none'}
                    for(let j of contents){j.style.height = '378px'}
                    for(let j of contents){j.style.overflow = 'auto'}
                })
            })
        },
        // slideChange:function(){
        //     // 슬라이드 변경될 때 인식되는 실행함수
        //     // 1. 활성화(가운데) 전 모든 슬라이드 opacity:0
        //     this.slides[this.activeIndex].querySelector('.tab_title').classList.add = 'active';
        // }


        
        // slideChange:function(){
        //     // 슬라이드 변경될 때 인식되는 실행함수
        //     // 1. 활성화(가운데) 전 모든 슬라이드 opacity:0
        //     this.slides.forEach(target => {
        //         target.querySelector('.slide_txt').style.opacity = '0';
        //         target.querySelector('.slide_txt').style.transform = 'translateX(40%)';
        //     })
        //     // 2. 활성화(가운데) 슬라이드 opacity:1
        //     this.slides[this.activeIndex].querySelector('.slide_txt').style.opacity = '1';
        //     this.slides[this.activeIndex].querySelector('.slide_txt').style.transform = 'translateX(0)';
        // }
        
    },
})



// shinee 앨범
$(function() {
    var audio1 = new Audio('./audio/shinee_lovelikeoxygen.mp3');
    var audio_state = 0;
    document.querySelector(".lovelikeoxygen").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio1.loop = false;// 반복재생하지 않음
            audio1.volume = 0.5;// 음량 설정
            audio1.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio1.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio2 = new Audio('./audio/shinee_view.mp3');
    var audio_state = 0;
    document.querySelector(".view").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio2.loop = false;// 반복재생하지 않음
            audio2.volume = 0.5;// 음량 설정
            audio2.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio2.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio3 = new Audio('./audio/shinee_standbyme.mp3');
    var audio_state = 0;
    document.querySelector(".standbyme").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio3.loop = false;// 반복재생하지 않음
            audio3.volume = 0.5;// 음량 설정
            audio3.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio3.pause();
            audio_state = 0;
        }
    });
})

// ost
$(function() {
    var audio4 = new Audio('./audio/ost_mindwarning.mp3');
    var audio_state = 0;
    document.querySelector(".mindwarning").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio4.loop = false;// 반복재생하지 않음
            audio4.volume = 0.5;// 음량 설정
            audio4.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio4.pause();
            audio_state = 0;
        }
    });
})

// sm
$(function() {
    var audio5 = new Audio('./audio/sm_starrynight.mp3');
    var audio_state = 0;
    document.querySelector(".starrynight").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio5.loop = false;// 반복재생하지 않음
            audio5.volume = 0.5;// 음량 설정
            audio5.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio5.pause();
            audio_state = 0;
        }
    });
})

// voice 앨범
$(function() {
    var audio6 = new Audio('./audio/voice_yourscent.mp3');
    var audio_state = 0;
    document.querySelector(".yourscent").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio6.loop = false;// 반복재생하지 않음
            audio6.volume = 0.5;// 음량 설정
            audio6.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio6.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio7 = new Audio('./audio/voice_underthestarlight.mp3');
    var audio_state = 0;
    document.querySelector(".underthestarlight").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio7.loop = false;// 반복재생하지 않음
            audio7.volume = 0.5;// 음량 설정
            audio7.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio7.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio8 = new Audio('./audio/voice_sign.mp3');
    var audio_state = 0;
    document.querySelector(".sign").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio8.loop = false;// 반복재생하지 않음
            audio8.volume = 0.5;// 음량 설정
            audio8.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio8.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio9 = new Audio('./audio/voice_illusion.mp3');
    var audio_state = 0;
    document.querySelector(".illusion").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio9.loop = false;// 반복재생하지 않음
            audio9.volume = 0.5;// 음량 설정
            audio9.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio9.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio10 = new Audio('./audio/voice_shineonyou.mp3');
    var audio_state = 0;
    document.querySelector(".shineonyou").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio10.loop = false;// 반복재생하지 않음
            audio10.volume = 0.5;// 음량 설정
            audio10.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio10.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio11 = new Audio('./audio/voice_timepiece.mp3');
    var audio_state = 0;
    document.querySelector(".timepiece").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio11.loop = false;// 반복재생하지 않음
            audio11.volume = 0.5;// 음량 설정
            audio11.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio11.pause();
            audio_state = 0;
        }
    });
})

// dice 앨범
$(function() {
    var audio12 = new Audio('./audio/dice_dice.mp3');
    var audio_state = 0;
    document.querySelector(".dice").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio12.loop = false;// 반복재생하지 않음
            audio12.volume = 0.5;// 음량 설정
            audio12.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio12.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio13 = new Audio('./audio/dice_sunshine.mp3');
    var audio_state = 0;
    document.querySelector(".sunshine").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio13.loop = false;// 반복재생하지 않음
            audio13.volume = 0.5;// 음량 설정
            audio13.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio13.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio14 = new Audio('./audio/dice_ontheway.mp3');
    var audio_state = 0;
    document.querySelector(".ontheway").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio14.loop = false;// 반복재생하지 않음
            audio14.volume = 0.5;// 음량 설정
            audio14.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio14.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio15 = new Audio('./audio/dice_lovephobia.mp3');
    var audio_state = 0;
    document.querySelector(".lovephobia").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio15.loop = false;// 반복재생하지 않음
            audio15.volume = 0.5;// 음량 설정
            audio15.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio15.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio16 = new Audio('./audio/dice_yeowoobi.mp3');
    var audio_state = 0;
    document.querySelector(".yeowoobi").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio16.loop = false;// 반복재생하지 않음
            audio16.volume = 0.5;// 음량 설정
            audio16.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio16.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio17 = new Audio('./audio/dice_inthewhale.mp3');
    var audio_state = 0;
    document.querySelector(".inthewhale").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio17.loop = false;// 반복재생하지 않음
            audio17.volume = 0.5;// 음량 설정
            audio17.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio17.pause();
            audio_state = 0;
        }
    });
})

// circle 앨범
$(function() {
    var audio18 = new Audio('./audio/circle_circle.mp3');
    var audio_state = 0;
    document.querySelector(".circle").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio18.loop = false;// 반복재생하지 않음
            audio18.volume = 0.5;// 음량 설정
            audio18.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio18.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio19 = new Audio('./audio/circle_cough.mp3');
    var audio_state = 0;
    document.querySelector(".cough").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio19.loop = false;// 반복재생하지 않음
            audio19.volume = 0.5;// 음량 설정
            audio19.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio19.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio20 = new Audio('./audio/circle_rainonme.mp3');
    var audio_state = 0;
    document.querySelector(".rainonme").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio20.loop = false;// 반복재생하지 않음
            audio20.volume = 0.5;// 음량 설정
            audio20.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio20.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio21 = new Audio('./audio/circle_caramel.mp3');
    var audio_state = 0;
    document.querySelector(".caramel").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio21.loop = false;// 반복재생하지 않음
            audio21.volume = 0.5;// 음량 설정
            audio21.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio21.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio22 = new Audio('./audio/circle_anywhere.mp3');
    var audio_state = 0;
    document.querySelector(".anywhere").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio22.loop = false;// 반복재생하지 않음
            audio22.volume = 0.5;// 음량 설정
            audio22.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio22.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio23 = new Audio('./audio/circle_paradise.mp3');
    var audio_state = 0;
    document.querySelector(".paradise").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio23.loop = false;// 반복재생하지 않음
            audio23.volume = 0.5;// 음량 설정
            audio23.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio23.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio24 = new Audio('./audio/circle_expectations.mp3');
    var audio_state = 0;
    document.querySelector(".expectations").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio24.loop = false;// 반복재생하지 않음
            audio24.volume = 0.5;// 음량 설정
            audio24.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio24.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio25 = new Audio('./audio/circle_noparachute.mp3');
    var audio_state = 0;
    document.querySelector(".noparachute").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio25.loop = false;// 반복재생하지 않음
            audio25.volume = 0.5;// 음량 설정
            audio25.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio25.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio26 = new Audio('./audio/circle_always.mp3');
    var audio_state = 0;
    document.querySelector(".always").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio26.loop = false;// 반복재생하지 않음
            audio26.volume = 0.5;// 음량 설정
            audio26.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio26.pause();
            audio_state = 0;
        }
    });
})

// 일본 앨범
$(function() {
    var audio27 = new Audio('./audio/japan_uroco.mp3');
    var audio_state = 0;
    document.querySelector(".uroco").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio27.loop = false;// 반복재생하지 않음
            audio27.volume = 0.5;// 음량 설정
            audio27.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio27.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio28 = new Audio('./audio/japan_beauty.mp3');
    var audio_state = 0;
    document.querySelector(".beauty").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio28.loop = false;// 반복재생하지 않음
            audio28.volume = 0.5;// 음량 설정
            audio28.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio28.pause();
            audio_state = 0;
        }
    });
})

// flow 앨범
$(function() {
    var audio29 = new Audio('./audio/flow_beatdrum.mp3');
    var audio_state = 0;
    document.querySelector(".beatdrum").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio29.loop = false;// 반복재생하지 않음
            audio29.volume = 0.5;// 음량 설정
            audio29.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio29.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio30 = new Audio('./audio/flow_hola.mp3');
    var audio_state = 0;
    document.querySelector(".hola").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio30.loop = false;// 반복재생하지 않음
            audio30.volume = 0.5;// 음량 설정
            audio30.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio30.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio31 = new Audio('./audio/flow_maestro.mp3');
    var audio_state = 0;
    document.querySelector(".maestro").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio31.loop = false;// 반복재생하지 않음
            audio31.volume = 0.5;// 음량 설정
            audio31.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio31.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio32 = new Audio('./audio/flow_shapeofmyheart.mp3');
    var audio_state = 0;
    document.querySelector(".shapeofmyheart").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio32.loop = false;// 반복재생하지 않음
            audio32.volume = 0.5;// 음량 설정
            audio32.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio32.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio33 = new Audio('./audio/flow_focus.mp3');
    var audio_state = 0;
    document.querySelector(".focus").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio33.loop = false;// 반복재생하지 않음
            audio33.volume = 0.5;// 음량 설정
            audio33.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio33.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio34 = new Audio('./audio/flow_allday.mp3');
    var audio_state = 0;
    document.querySelector(".allday").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio34.loop = false;// 반복재생하지 않음
            audio34.volume = 0.5;// 음량 설정
            audio34.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio34.pause();
            audio_state = 0;
        }
    });
})

// 타가수
$(function() {
    var audio35 = new Audio('./audio/other_asitwas.mp3');
    var audio_state = 0;
    document.querySelector(".asitwas").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio35.loop = false;// 반복재생하지 않음
            audio35.volume = 0.5;// 음량 설정
            audio35.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio35.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio36 = new Audio('./audio/other_sung.mp3');
    var audio_state = 0;
    document.querySelector(".sung").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio36.loop = false;// 반복재생하지 않음
            audio36.volume = 0.5;// 음량 설정
            audio36.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio36.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio37 = new Audio('./audio/other_rainyblue.mp3');
    var audio_state = 0;
    document.querySelector(".rainyblue").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio37.loop = false;// 반복재생하지 않음
            audio37.volume = 0.5;// 음량 설정
            audio37.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio37.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio38 = new Audio('./audio/other_lielielie.mp3');
    var audio_state = 0;
    document.querySelector(".lielielie").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio38.loop = false;// 반복재생하지 않음
            audio38.volume = 0.5;// 음량 설정
            audio38.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio38.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio39 = new Audio('./audio/other_bibi.mp3');
    var audio_state = 0;
    document.querySelector(".bibi").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio39.loop = false;// 반복재생하지 않음
            audio39.volume = 0.5;// 음량 설정
            audio39.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio39.pause();
            audio_state = 0;
        }
    });
})
$(function() {
    var audio40 = new Audio('./audio/other_iu.mp3');
    var audio_state = 0;
    document.querySelector(".iu").addEventListener("click",function(e){
        e.preventDefault()
        if(audio_state == 0){
            audio40.loop = false;// 반복재생하지 않음
            audio40.volume = 0.5;// 음량 설정
            audio40.play();// mp3 재생
            audio_state = 1;
        }else if(audio_state == 1){
            audio40.pause();
            audio_state = 0;
        }
    });
})