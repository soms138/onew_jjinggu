// home
const mv_slide = new Swiper('#mv_slide',{
    slidesPerView: 1,
    centeredSlides:true,
    direction: 'horizontal',
    loop:true,
    spaceBetween: 0,
    scrollbar:{el:'#mv_slide .swiper-scrollbar'},
})

// album
const album_slide = new Swiper('#album_slide',{
    init: true,
    initialSlide: 0,
    // loopedSlides: 1,
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
    slidesPerView: 1.5,
    direction: 'horizontal',
    spaceBetween: 10,
    slidesOffsetAfter: 10,
    breakpoints:{
        350:{slidesPerView:2},
        450:{slidesPerView:2.5},
        590:{slidesPerView:3},
        700:{slidesPerView:3.5},
    }
})

// play_slide
const play_slide_t = new Swiper('#play_slide_t',{
    slidesPerView: 5,
    direction: 'horizontal',
    spaceBetween: 10,
})
const play_slide = new Swiper('#play_slide',{
    slidesPerView: 1.5,
    direction: 'horizontal',
    loop:true,
    spaceBetween: 10,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    centeredSlides:true,
})
