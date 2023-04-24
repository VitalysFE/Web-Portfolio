

/* ------------------------------ MENU CATEGORIES ------------------------------------ */

const menuBtns = document.querySelectorAll(".menu__categories-item");

const foodItems = document.querySelectorAll(".menu__list_2");

let activeBtn = "morning";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add("menu-btn__active");
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove("menu-btn__active");
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}

/* ------------------------------ SMOOTH SCROLL TO BLOCKS ------------------------------------ */

const menuLinks = document.querySelectorAll(".pages-menu__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelectorAll(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

/* ------------------------------ FIXED HEADER ------------------------------------ */

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("fixed-header", window.scrollY > 0);
});

/* ------------------------------ DROPDOWN MENU ------------------------------------ */

const menuLink = document.getElementById("menuLink");
const dropDownMenuBox = document.getElementById("dropdown-menu__box");

const toggleMenuBox = () => {
  dropDownMenuBox.classList.toggle("active-menu");
  menuLink.classList.toggle("icon-arrow__open");
};

menuLink.addEventListener("click", (e) => {
  e.stopPropagation();

  toggleMenuBox();
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let menu = target == dropDownMenuBox || dropDownMenuBox.contains(target);
  let link = target == menuLink;
  let active = dropDownMenuBox.classList.contains("active-menu");
  if (!menu && !link && active) {
    toggleMenuBox();
  }
});

/* ------------------------------ DROPDOWN MOBILE MENU ------------------------------------ */

const mobileMenu = document.getElementById("mobileMenu");
const dropDownMobile = document.getElementById("dropdown-mobile");

mobileMenu.onclick = function () {
  mobileMenu.classList.toggle("mobile-arrow__open");
  mobileMenu.classList.toggle("active-mobile__link");
  dropDownMobile.classList.toggle("mobile-open");
};

/* ------------------------------ HEADER SLIDER ------------------------------------ */

new Swiper(".header-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 700,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

/* ------------------------------ BURGER MENU ------------------------------------ */

const menu = document.querySelector(".mobile__bar");
const menuBtn = document.querySelector(".burger__btn");
const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  });
}

/* ------------------------------ SECTION SPECIAL SLIDER ------------------------------------ */

new Swiper(".special-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    speed: 700,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

/* ------------------------------ SECTION TESTIMONIALS SLIDER ------------------------------------ */

new Swiper(".testimonials-slider__first", {
  loop: true,
  autoplay: {
    delay: 5000,
    speed: 700,
  },
  thumbs: {
    swiper: {
      el: ".testimonials-slider__second",
      slidesPerView: 3,
      autoplay: {
        delay: 5000,
        speed: 700,
      },
      centeredSlides: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    },
  },
});

/* ------------------------------ SECTION TESTIMONIALS-2 SLIDER ------------------------------------ */

new Swiper(".testemonials-2__slider", {
  pagination: {
    el: ".testemonials-2__bullets",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    speed: 700,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

/* ------------------------------ SECTION ABOUT | GALLEY SLIDER ------------------------------------ */

new Swiper(".gallery__slider", {
  pagination: {
    el: ".gallery__bullets",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    speed: 700,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

/* ------------------------------ FLATPICKR ------------------------------------ */

flatpickr(".service__date", {});

/* ------------------------------ COUNTER ------------------------------------ */

const counters = document.querySelectorAll(".counter__num");

counters.forEach((counter__num) => {
  counter__num.innerText = "0";

  const updateCounter = () => {
    const target = +counter__num.getAttribute("data-target");
    const c = +counter__num.innerText;
    const increment = target / 200;

    if (c < target) {
      counter__num.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter__num.innerText = target;
    }
  };
  updateCounter();
});

const activeLinks = document.querySelectorAll(".lower__link");

activeLinks.onclick = function () {
  activeLinks.classList.toggle(".link__marker");
};

/* ------------------------------ PAGES MENU ------------------------------------ */

const pagesLink = document.getElementById("pagesLink");
const pagesMenu = document.getElementById("pagesMenu");

const toggleMenu = () => {
  pagesMenu.classList.toggle("active-pages");
  pagesLink.classList.toggle("icon-arrow__open");
};

pagesLink.addEventListener("click", (e) => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let itsMenu = target == pagesMenu || pagesMenu.contains(target);
  let itsLink = target == pagesLink;
  let pagesActive = pagesMenu.classList.contains("active-pages");
  if (!itsMenu && !itsLink && pagesActive) {
    toggleMenu();
  }
});
