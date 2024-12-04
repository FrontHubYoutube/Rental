const header = document.querySelector(".header");
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn i");
const shadow = document.querySelector(".header .navbar .shadow");
const priceEl = document.getElementById("select-price");
const viewDetails = document.getElementById("view-details");
const selectInfo = document.querySelectorAll('.select__info')

window.onscroll = () => {
  menuBtn.setAttribute("class", "ri-menu-line");
  navbar.classList.remove("active");
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};
shadow.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuBtn.setAttribute("class", "ri-menu-line");
  header.classList.remove("active");
});

menuBtn.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
  const isOpen = navbar.classList.contains("active");
  menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  menuBtn.classList.contains("ri-close-line")
    ? header.classList.add("active")
    : header.classList.remove("active");
});

const price = ["225", "455", "275", "625", "395"];
const cars = ['urus', 'bmwX', 'bmw5', 'ferrari', 'cullinun']


const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },
});

swiper.on("slideChange", function () {
  priceEl.innerText = price[swiper.realIndex];
  selectInfo.forEach(item => {
    item.classList.remove('active')
    selectInfo[swiper.realIndex].classList.add('active')
  })
  viewDetails.href = `cars/${cars[swiper.realIndex]}.html`
});

var review = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
  },
});