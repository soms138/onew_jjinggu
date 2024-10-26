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
    loopedSlides: 2,
    slidesPerView: 1.5,
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
    slidesPerView: 1,
    direction: 'horizontal',
    loop:true,
    loopedSlides: 2,
    spaceBetween: 10,
    slidesOffsetAfter: 10,
    breakpoints:{
        345:{slidesPerView:1.5},
        450:{slidesPerView:2},
        590:{slidesPerView:2.5},
        700:{slidesPerView:3},
        750:{slidesPerView:3.5},
    }
})

// play_slide
// const play_slide_t = new Swiper('#play_slide_t',{
//     slidesPerView: 5,
//     direction: 'horizontal',
//     spaceBetween: 10,
// })
const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.list > ul > li')
const moreBtn = document.querySelectorAll('.more')
const contents = document.querySelectorAll('.list > ul')
const play_slide = new Swiper('#play_slide',{
    slidesPerView: 1,
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    centeredSlides:true,
    breakpoints:{
        360:{slidesPerView:1.5},
        530:{slidesPerView:2},
    },
    on:{
        init:function(){
            // 슬라이드가 변경되기 전 초기 실행함수
            // this = #play_slide
            // this.slides = .swiper-slide
            // this.activeIndex = 현재 활성화된 slide
            
            // this.slides[this.activeIndex].querySelector('.slide_txt').style.opacity = '1';
            tab_title.forEach(function(t){
                t.addEventListener('click', function(e){
                    e.preventDefault()
                    for(let i of tab_title){i.classList.remove('active')}
                    t.classList.add('active')
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
