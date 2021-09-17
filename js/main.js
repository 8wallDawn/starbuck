//HEADER SEARCH BAR
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

//BADGES DISPLAY ON OFF
const badgesEl = document.querySelector('header .badges');
//BADGES DISPLAY ON OFF
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    // console.log(window.scrollY); 
    //scrollY 값을 console.log 를 통해서 값을 알아낸 후에 적용 위치를 아래 코드에 명시 *500을 초과 했을 때 해당 function 작동
    if (window.scrollY > 644) {
        // badgesEl.style.display="none";
        gsap.to(badgesEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .6, {
            x:0 // x축을 rotate(0px, 0px) 즉 원래 자리로 0.6s 동안 이동
        });
    } else {
        // badgesEl.style.display="block";
        gsap.to(badgesEl, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .6, {
            x:100 // x축을 rotate(100px, 0px)로 0.6s 동안 이동
        });
    }
}, 300));

// #to-top 클릭시 최상단으로 브라우저 스크롤 이동
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

//VISUAL SECTION 이미지 순차적으로 보이기(순차적 애니메이션)
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        /* index값에 의해 순차적으로 진행될 수 있도록 한다. 1stEl .7 2ndEl 1.4 3rdEl 2.1 4thEl 2.7 순으로 opacity 값이 1초에 걸쳐 1이 된다.*/
        opacity: 1
    })
});


//SWIPER JS
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: true,

});
//PROMOTION SLIDE <SWIPER JS>
new Swiper('.promotion .swiper', {
    slidesPerView: 3, //한번에 보여지는 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데에 출력되도록
    loop: true,
    // autoplay: {
    //     delay: 5000 //100당 0.1s
    // },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

//INNER RIGHT BTN CHANGE rotate(180deg) & toggle class promotion area
const prmtnToggle = document.querySelector('.notice .toggle-promotion');
const iconBtn = prmtnToggle.querySelector('.material-icons');

const prmtnEl = document.querySelector('.promotion');
let isHidePrmtn = false;

prmtnToggle.addEventListener('click', function () {
    iconBtn.classList.toggle('active'); // toggle class name for btn change rotate

    isHidePrmtn = !isHidePrmtn // make isHidePrmtn boolean false to true, true to false
    if (isHidePrmtn) { // if isHidePrmtn true
        prmtnEl.classList.add('hide'); //to Hide 숨김처리
    } else {
        prmtnEl.classList.remove('hide'); //to apear 보임처리
    }
});

//YOUTUBE FLOATING IMG
    // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
    gsap.to(
        selector, 
        random(1.5, 2.5), // 애니메이션 동작 시간
        {
            y: size, //y축 이동범위
            repeat: -1, // 무한 반복
            yoyo: true, // 반복
            ease: Power1.easeInOut, // gasp easing 에서의 power1 easeInOut의 ease설정
            delay: random(0, delay)
        }
    );
}
floatingObj('.floating1', 1, 15);
floatingObj('.floating2', .5, 15);
floatingObj('.floating3', 1.5, 20);


//scrollMagic CDN
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
    new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 // 브라우저의 80% 지점에서부터 보여지는 영역을 감지한다.
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수요소)
})

// AWARDS SWIPPER
new Swiper('.awards .swiper', {
    slidesPerView:5,
    spaceBetween:30,
    loop:true,
    autoplay: {
        delay: 5000
    },

    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

