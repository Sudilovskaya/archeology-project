//плавная прокрутка до якоря
$(function(){

    $('.link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
      e.preventDefault();
    });
 });

//анимация стрелки при наведении на ссылку
const animLinks = document.querySelectorAll('.hero-details')
const arrows = document.querySelectorAll('.arrow-1')

animLinks.forEach(link => {
  link.addEventListener('mouseover', () =>{
    arrows.forEach(arrow => {
      arrow.classList.add('animation')
    })
  })
    link.addEventListener('mouseout', () =>{
      arrows.forEach(arrow => {
        arrow.classList.remove('animation')
      })
  })
})

//анимация
const animItems = document.querySelectorAll('._anim-items')

if  (animItems.length > 0) {
    
    const animOnScroll = () => {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active')
            }
          }
        }
    }

    const offset = (el) => {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll()
    window.addEventListener('scroll', animOnScroll)
}

//кнопка наверх
function backToTop () {
  let topButton = $('.top-button')

  $(window).on('scroll', () => {
      if($(this).scrollTop() >= 50){
        topButton.fadeIn()
      } else {
        topButton.fadeOut()
      }
      })
      topButton.on('click', (event) =>{
        event.preventDefault()
        $('html').animate({scrollTop:0}, 1000)
      })
}

backToTop()

// мобильное меню
const burgerBtn = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

burgerBtn.addEventListener('click', () => {
    document.body.classList.toggle('_lock')
    mobileMenu.classList.toggle('_active')
    burgerBtn.classList.toggle('_active')
})

//выпадающий список

const listArrow = document.querySelector('.list-button')
const listBtn = document.querySelector('.menu-button')
const subMenu = document.querySelector('.sub-menu')

listBtn.addEventListener('click', () => {
    subMenu.classList.toggle('open')
    listArrow .classList.toggle('rotate')

      if(subMenu.classList.contains('open')){
        subMenu.style.height = ''
      } else {
        subMenu.style.height = subMenu.scrollHeight + 'px'
      }
})