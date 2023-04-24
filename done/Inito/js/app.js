// --------------------------------- BURGER MENU --------------------------------- //
const burger = document.querySelector(".burger__icon");
const menu = document.querySelector(".header__nav");
const body = document.body;



if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

// --------------------------------- FIXED HEADER --------------------------------- //

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
  });


  // --------------------------------- REvIEWS SLIDER --------------------------------- //

  const swiper = new Swiper(".reviews__slider", {
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    
  });
  

  // --------------------------------- ACCORDION FAQ --------------------------------- //

  let title = document.querySelectorAll('.faq__name');

for (i = 0; i < title.length; i++) {
  title[i].onclick = function () {
    this.classList.toggle("active");
    let box = this.nextElementSibling;
    if(box.style.maxHeight) {
      box.style.maxHeight = null;
    }else {
      box.style.maxHeight = box.scrollHeight + 'px';
    }
   for (j = 0; j < title.length; j++) {
    if(title[j] !== this) {
      title[j].classList.remove('active');
      title[j].nextElementSibling.style.maxHeight = null;
    }
   }
  }
}

  // --------------------------------- ACCORDION FOOTER --------------------------------- //


let footer = document.querySelectorAll('.footer__title');

for (i = 0; i < footer.length; i++) {
  footer[i].onclick = function () {
    if (window.innerWidth < 768) {
      this.classList.toggle("active");
      let box = this.nextElementSibling;
      if(box.style.maxHeight) {
        box.style.maxHeight = null;
      }else {
        box.style.maxHeight = box.scrollHeight + 'px';
      }
      for (j = 0; j < footer.length; j++) {
        if(footer[j] !== this) {
          footer[j].classList.remove('active');
          footer[j].nextElementSibling.style.maxHeight = null;
        }
       }
    }
   
  
  }
}

  // --------------------------------- AOS ANIMATION --------------------------------- //

  AOS.init({disable: 'mobile'});
  