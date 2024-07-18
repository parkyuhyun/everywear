$(window).on("scroll", function () {
    AOS.init();
});

/* Cursor
===========================================================================*/
document.addEventListener("mousemove", (e) => {
    const cursorDefaultInner = document.querySelector('.cursor-defalult-inner')
    cursorDefaultInner.style.top = e.clientY + 'px'
    cursorDefaultInner.style.left = e.clientX + 'px'
})

// 애니메이션을 위한 변수
let animationTimeout

// 크기 변화 함수
function animateCursorSize(element, desiredWidth, desiredHeight, duration) {
    const startTime = performance.now()

    // 시작 크기 저장
    const startWidth = parseFloat(getComputedStyle(element).width)
    const startHeight = parseFloat(getComputedStyle(element).height)

    // 애니메이션 함수
    function animationStep() {
        // 경과 시간 및 진행률 계산
        const elapsedTime = performance.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1)

        // 새로운 크기 계산 및 적용
        const newWidth = startWidth + (desiredWidth - startWidth) * progress;
        const newHeight = startHeight + (desiredHeight - startHeight) * progress;
        element.style.width = `${newWidth}px`
        element.style.height = `${newHeight}px`

        // 애니메이션이 완료되지 않은 경우 계속 진행
        if (progress < 1) {
            requestAnimationFrame(animationStep)
        }
    }

    // 애니메이션 시작
    requestAnimationFrame(animationStep)
}

document.addEventListener("mousemove", (e) => {
    const cursorDefaultInner = document.querySelector(".cursor-defalult-inner")
    cursorDefaultInner.style.top = e.clientY + "px"
    cursorDefaultInner.style.left = e.clientX + "px"

    // 마우스 이동 시 크기 줄임
    clearTimeout(animationTimeout);
    animateCursorSize(cursorDefaultInner, 10, 10, 300)

    // 마우스 멈출 때 원래 크기로 복원
    animationTimeout = setTimeout(() => {
        animateCursorSize(cursorDefaultInner, 25, 25, 300);
    }, 200)
});


/* Header Scroll Animation
===========================================================================*/


/* Background Color Scroll Animation 
===========================================================================*/



window.addEventListener('scroll', function(){
    let backgroundValue = 10000
    let wrapper = document.querySelector('.wrapper')

    if(window.pageYOffset >= backgroundValue){
        wrapper.style.background = 'white'
    } else {
        wrapper.style.background = 'black'
    }
    })

window.addEventListener('scroll', function(){
    let overviewText = document.querySelector('.overview')
    let backgroundValue = 400

    if(window.pageYOffset >= backgroundValue){
        overviewText.style.color = 'black'
    } else {
        overviewText.style.color = 'white'
    }
    })


let Top = document.querySelector('#top')

window.addEventListener('scroll', function() {
    if(this.scrollY > 200) {
        Top.classList.add('on')
    } else {
        Top.classList.remove('on')
    }
})

Top.addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
})


/* Horizontal Scroll
===========================================================================*/
// const container = document.querySelector('.horizontalScroll')


// container.addEventListener('wheel', (e) => {
//   e.preventDefault()
//   container.scrollLeft += e.deltaY

//   if (isEndOfHorizontalScroll && Math.abs(e.deltaY) > 0) {
//     container.scrollTop += e.deltaY
//   }
// })
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".page");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontalScroll",
    start: "0% 50%",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontalScroll").offsetWidth
  }
});


$(document).ready(function() {
    $('#bt1').click(function() {
      var offset = $('#window1').offset(); // Get the position of the selected element
      $('html').animate({
        scrollTop: offset.top
      }, 1000, 'linear'); // Scroll to the specified location smoothly
    });
  
    $('#bt2').click(function() {
      var offset = $('#window2').offset(); // Get the position of the selected element
      $('html').animate({
        scrollTop: offset.top
      }, 1000, 'linear'); // Scroll to the specified location smoothly
    });
  
    $('#bt3').click(function() {
      var offset = $('#window3').offset(); // Get the position of the selected element
      $('html').animate({
        scrollTop: offset.top
      }, 1000, 'linear'); // Scroll to the specified location smoothly
    });
  });