// ----------------------------- BURGER MENU ----------------------------- //

const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__list");
const body = document.body;



if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
}



// ----------------------------- FIXED HEADER ----------------------------- //

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
   
  });



// ----------------------------- BANNER SLIDER ----------------------------- //

const banner = new Swiper(".banner__slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ----------------------------- OUR SLIDER ----------------------------- //

const our = new Swiper(".our__slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});

// ----------------------------- GALLERY SLIDER ----------------------------- //

const gallery = new Swiper(".gallery__slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});

// ----------------------------- ACCORDION ----------------------------- //




const title = document.querySelectorAll('.footer__name');

for (i = 0; i < title.length; i++) {
    title[i].onclick = function () {
        if (window.innerWidth < 992) {
            this.classList.toggle("active");
            let box = this.nextElementSibling;
            if(box.style.maxHeight) {
              box.style.maxHeight = null;
            }else {
              box.style.maxHeight = box.scrollHeight + 'px';
            }
           for (j = 0; j< title.length; j++) {
            if(title[j] !== this) {
              title[j].classList.remove('active');
              title[j].nextElementSibling.style.maxHeight = null;
            }
           }
        }
    
    }
  }