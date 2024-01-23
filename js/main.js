let line = document.querySelector('.icon-menu');
let links = document.querySelectorAll('.menu__link');
let menu = document.querySelector('.menu__body');

line.addEventListener('click', toogleMenu);
for (let link of links) { 
  link.addEventListener('click', closeMenu);
}

function toogleMenu() {
  line.classList.toggle('active');  
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');   
}

function closeMenu() {
  line.classList.remove('active');  
  menu.classList.remove('active');
  document.body.classList.remove('lock');   
}


//Section portfolios================================//
new Swiper('.portfolios-swiper', {  
  //loop: true,
  autoHeight: false,    
  watchOverflow: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  
  },

  // Navigation arrows
  navigation: {
    nextEl: '.portfolio__arrow-right',
    prevEl: '.portfolio__arrow-left',
  },

  breakpoints: {
    320: {
        slidesPerView: 1, 
        spaceBetween: 20,                         
    },
    576: {
      slidesPerView: 2, 
      spaceBetween: 15,                         
    },
    768: {        
        slidesPerView: 3,
        spaceBetween: 30,                              
    },
    992: {        
        slidesPerView: 3,
        spaceBetween: 30, 
    },
}
});


//Section experience================================//
document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  //Tabs
  if (targetElement.closest('.experience__companies')){
    const tabNavItem = targetElement.closest('.experience__companies');
    if (!tabNavItem.classList.contains('active')){
      const activeTabNavItem = document.querySelector('.experience__companies.active');
      activeTabNavItem.classList.remove('active');
      tabNavItem.classList.add('active');

      const tabItems = document.querySelectorAll('.experience__detail');
      const activeTabItem = document.querySelector('.experience__detail.active');

      activeTabItem.classList.remove('active');
      tabItems[getIndex(tabNavItem)].classList.add('active');
    }
  }
}

function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
}
