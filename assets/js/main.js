const navMenu = document.getElementById('nav-menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')
const navItem = document.querySelectorAll('.nav__item')

/* Open navigation menu */
navOpen.addEventListener('click', () => {
    navMenu.classList.add('nav__menu--open')
})

/* Close navigation menu */
navClose.addEventListener('click', ()=> {
     navMenu.classList.remove('nav__menu--open')
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
         navMenu.classList.remove('nav__menu--open')
    })
})

// Header scroll
const header = document.getElementById('l-header')

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('l-header--scroll')
    }else{
        header.classList.remove('l-header--scroll')
    }
})

// Swiper
const testimonialSwiper = new Swiper(".testimonial__wrapper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

// bg colors

// const btn = document.getElementById('color-btn');
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// btn.addEventListener('click', function() {
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = randomColor;
// });
