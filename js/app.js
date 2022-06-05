// swiper slider initialize hero section
// =====================================
let swiper = new Swiper('.mySwiper', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next-slide',
    prevEl: '.prev-slide',
  },
});
// swiper slider initialize what clients say
let swiperTwo = new Swiper('.mySwipertwo', {
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.next-review',
    prevEl: '.prev-review',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// swiper slider functionality end
// =====================================
// wow js initialization
new WOW().init();

// navigation bar functions
const offCanvasMenu = document.querySelector('.offCanvasMenu');
const openOffCanvasMenu = document.querySelector('.openMobileMenu');
const closeOffCanvasMenu = document.querySelector('.closeMenu');
const closeOffCanvasMenuLinks = document.querySelectorAll('.offCanvasMenu > ul > li');
const dropdownMenuLinks = document.querySelectorAll('.offCanvasMenu > ul > li > ul > li');
// off canvas menu function start
// =====================================
openOffCanvasMenu.addEventListener('click', () => {
  offCanvasMenu.style.width = '100%';
  document.body.classList.add('scrollDisabled');
});
closeOffCanvasMenu.addEventListener('click', () => {
  offCanvasMenu.style.width = '0px';
  document.body.classList.remove('scrollDisabled');
});
closeOffCanvasMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    offCanvasMenuClose(link);
  });
});
// onLink click if dropdown is false then menu is closed else open
function offCanvasMenuClose(link) {
  let ul = link.querySelector('ul');
  if (ul) {
    offCanvasMenu.style.width = '100%';
    document.body.classList.add('scrollDisabled');
  } else {
    offCanvasMenu.style.width = '0px';
    document.body.classList.remove('scrollDisabled');
  }
}
// offCanvasMenu active style
closeOffCanvasMenuLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // pull out previous active menu class and styles
    const cM = document.querySelector('.mobileNavActive');
    cM.classList.remove('mobileNavActive');
    const cMul = cM.querySelector('ul');
    if (cMul) {
      cMul.style.height = 0 + 'px';
    }
    // add active class to current element and styles
    link.classList.add('mobileNavActive');
    let ul = link.querySelector('ul');
    if (ul) {
      ul.style.height = ul.scrollHeight + 'px';
    }
  });
});
// off canvas menu function end
// =====================================

// tab functionality start
// =======================================
const tooltipData = [
  {
    id: 'paint',
    title: 'Graphic Design',
    text1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has since the 1500s.',
    notice:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type It has survived not only five centuries, but also the leap into electronic typesetting, ",
    text2:
      't has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.remaining essentially unchanged.',
    img: 'images/heroimg.png',
    animate: 'animate__animated animate__fadeInUp',
  },
  {
    id: 'code',
    title: 'web Design',
    text1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has since the 1500s.',
    notice:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type It has survived not only five centuries, but also the leap into electronic typesetting, ",
    text2:
      't has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.remaining essentially unchanged.',
    img: 'images/heroimg.png',
    animate: 'animate__animated animate__fadeInDown',
  },
  {
    id: 'chart',
    title: 'chart Design',
    text1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has since the 1500s.',
    notice:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type It has survived not only five centuries, but also the leap into electronic typesetting, ",
    text2:
      't has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.remaining essentially unchanged.',
    img: 'images/heroimg.png',
    animate: 'animate__animated animate__fadeInLeft',
  },
  {
    id: 'android',
    title: 'android Design',
    text1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has since the 1500s.',
    notice:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type It has survived not only five centuries, but also the leap into electronic typesetting, ",
    text2:
      't has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.remaining essentially unchanged.',
    img: 'images/heroimg.png',
    animate: 'animate__animated animate__fadeInRight',
  },
  {
    id: 'marketChart',
    title: 'market Design',
    text1:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has since the 1500s.',
    notice:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type It has survived not only five centuries, but also the leap into electronic typesetting, ",
    text2:
      't has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.remaining essentially unchanged.',
    img: 'images/heroimg.png',
    animate: 'animate__animated animate__fadeInDown',
  },
];
// tooltip functions
const viewContainer = document.querySelector('.tab-data-container');
const allBtn = document.querySelectorAll('.tab-button-groups > div > button');
allBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    let c = document.querySelector('.tab-active');
    c.classList.remove('tab-active');
    btn.parentNode.classList.add('tab-active');
    tooltipData.forEach((item) => {
      if (item.id == btn.id) {
        viewData(item);
      }
    });
  });
});
// view data fucntion
function viewData(data) {
  viewContainer.innerHTML = '';
  let view = `
  <div class="tab-card row  ${data.animate}">
    <div class="col-lg-8 col-md-6">
      <h4 class="card-title font-droid font-24 fw-bold text-capitalize">${data.title}</h4>
      <p class="card-text font-roboto font-14 fw-normal">${data.text1}</p>
      <p class="border-start border-5 fst-italic font-14 border-secondary ps-3 my-3 notice-text">
      ${data.notice}
      </p>
      <p class="card-text font-14 fw-normal">${data.text2}</p>
      <div class="mt-3">
        <button class="btn btn-transparent px-0">
          Learn more
          <span class="iconify" data-icon="bi:arrow-right"></span>
        </button>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 d-flex align-items-center mt-4 mt-md-0">
      <img src="${data.img}" alt="icon" />
    </div>
  </div>
  `;
  viewContainer.innerHTML = view;
}
// first tab item with function call
viewData(tooltipData[0]);
// tab functionality end
// =======================================

// onScroll window sticky navigation menu functions
// ==================================================
const navigationHeader = document.querySelector('.navigationHeader');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    navigationHeader.classList.add('scrolled');
  } else {
    navigationHeader.classList.remove('scrolled');
  }
});

// desktop menu active function
const allNavLinks = document.querySelectorAll('.navigation > ul > li');
allNavLinks.forEach((link) => {
  link.addEventListener('click', function () {
    let cA = document.querySelector('.navActive');
    cA.classList.remove('navActive');
    link.classList.add('navActive');
  });
});

// backto top button
const backToTOp = document.querySelector('.backToTop');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
    backToTOp.classList.add('d-flex');
  } else {
    backToTOp.classList.remove('d-flex');
  }
});
