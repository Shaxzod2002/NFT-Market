'use strict'

AOS.init();

var swiper = new Swiper(".mySwiper", {
    loop: true,
    clickable: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 920px
        920: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

var swiper = new Swiper(".swiper-box", {
    loop: true,
    clickable: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },

        450: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});

var swiper = new Swiper(".nft-images", {
    loop: true,
    clickable: true,
    grabCursor: true,
    autoplay: true,
    breakpoints: {
        300: {
            slidesPerView: 3,
        },

        450: {
            slidesPerView: 4,
            spaceBetween: 10,
        },

        600: {
            slidesPerView: 6,
            spaceBetween: 10,
        },

        750: {
            slidesPerView: 7,
            spaceBetween: 10,
        },

        900: {
            slidesPerView: 9,
            spaceBetween: 10,
        },

        1150: {
            slidesPerView: 12,
            spaceBetween: 10,
        }
    }
});

document.querySelectorAll('.discover .btn__group button').forEach(btn => btn.addEventListener('click', () => {
    document.querySelector('button.active').classList.remove('active');
    btn.classList.add('active')
}))
const darkMoode = document.getElementById('dark-moode');
const darkMoodeIcon = document.getElementById('dark-moode-icon');
const topLineVector = document.getElementById('top-line-vector');
const darkMoodeBoxs = document.querySelectorAll('.dark-moode-box');
const barsIcon = document.getElementById('bars-icon')

const showMenu = () => {
    document.getElementById('menu').classList.toggle('active');
    barsIcon.className === "fas fa-bars" ? barsIcon.className = "fas fa-times" : barsIcon.className = "fas fa-bars"
}

darkMoode.addEventListener('click', () => {
    darkMoodeIcon.className === "far fa-moon" ? darkMoodeIcon.className = "fas fa-sun" : darkMoodeIcon.className = "far fa-moon";

    darkMoodeBoxs.forEach(box => box.classList.toggle('active'));

    topLineVector.src === "https://nft-market-web.netlify.app/Image/Auctions/Join%20Now/Vector.png" ? topLineVector.src = "Image/Footer/Vector.png" : topLineVector.src = "Image/Auctions/Join Now/Vector.png";
})