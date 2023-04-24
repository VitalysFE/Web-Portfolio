// ----------------------------- BURGER MENU ----------------------------- //

const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav__menu");
const body = document.body;

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

// ----------------------------- ACCORDION MENU ----------------------------- //

let title = document.querySelectorAll('.accordion__title');

for (i = 0; i < title.length; i++) {
  title[i].onclick = function () {
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

// ----------------------------- FIXED HEADER ----------------------------- //

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
  });


// ----------------------------- SLIDER ----------------------------- //

const team = new Swiper(".team__slider", {
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
  
// ----------------------------- BLOG SLIDER ----------------------------- //

const blog = new Swiper(".blog__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
     spaceBetween: 30
     },
     768: {
      slidesPerView: 2,
     spaceBetween: 30
     },
   }
});


// ----------------------------- CLIENTS SLIDER ----------------------------- //

const clients = new Swiper(".clients__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

// ----------------------------- BRANDS SLIDER ----------------------------- //

const brands = new Swiper(".brands__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
     768: {
      slidesPerView: 4,
     spaceBetween: 30
     },
     992: {
      slidesPerView: 5,
     spaceBetween: 30
     },
   }
});

/* ------------------------------ FLATPICKR ------------------------------------ */

flatpickr(".appointment__input_date", {});


// ----------------------------- INPUT ----------------------------- //

let selectMenu = document.querySelectorAll('.select__menu');
// let index = 1;
selectMenu.forEach(function(e) {
	e.querySelector('.select__btn').addEventListener('click', function() {
		this.nextElementSibling.classList.toggle('active');
		// this.nextElementSibling.style.zIndex = index++;
		this.classList.toggle('active');
	});
	e.querySelectorAll('.select__option').forEach(function(b) {
		b.addEventListener('click', function() {
			this.parentElement.classList.remove('active');
			this.closest('.select__menu').children[0].classList.remove('active');
			this.closest('.select__menu').children[0].setAttribute('data-type', this.getAttribute('data-type'));
			this.closest('.select__menu').children[0].innerText = this.innerText;
		});
	});
});

// ----------------------------- MODAL VIDEO ----------------------------- //

const btn = document.querySelector('.modal__video');
const modalBox = document.querySelector('.modal__box');
const close = document.querySelector(".modal__close");


btn.addEventListener("click", () => {
  modalBox.classList.toggle("active");
  body.classList.toggle("lock");
});
close.addEventListener("click", () => {
  modalBox.classList.remove("active")
  body.classList.remove("lock");
});


