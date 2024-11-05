//Swiper 플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider',
    slideClass:'view',
    loop:true,
    slidesPerView: 1,

    autoplay: { //자동슬라이드
      delay: 5000, //하나의 슬라이드가 보여주는 시간
    },
    speed:800, //슬라이드가 전환되는(움직이는) 시간
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination', //버튼영역 대상
      type:"fraction",
      //bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
      clickable:true, //클릭 시 슬라이드 이동
    },

      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });

  const swiper2 = new Swiper('.m2_content', {
    // Optional parameters
    wrapperClass:'s_slider',
    slideClass:'s_view',
    loop:true,
    //slidesPerView: 3,

    autoplay: { //자동슬라이드
      delay: 5000, //하나의 슬라이드가 보여주는 시간
    },
    speed:800, //슬라이드가 전환되는(움직이는) 시간
    

  });
