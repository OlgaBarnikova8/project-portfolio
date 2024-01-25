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


//Form============================================//
const form = document.forms["form-contacts"];
const { name, email, message } = form;
const buttonSubmit = document.getElementById("submit-btn");
const errorName = document.querySelector(".error-name");
const errorPhone = document.querySelector(".error-phone");
const error = document.querySelector(".error");
const errorMessage = document.querySelector(".error-message");
const popupMessage = document.querySelector(".popup")
const closeButton = document.querySelector('.popup__close');

//Validations
function validateName(name) {
    let res = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+$/;
    return res.test(name);
}

// function validatePhone(phone) {
//     //let res = /\b\d{12}\b/;
//     let res = /\b\d\b/;
//     return res.test(phone);
// }

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Validations
    if (!validateName(name)) {
        console.log('error');
        name.classList.add("error");  
        errorName.innerHTML = "The name must contain only letters";
        errorName.classList.add("error-message");             
    }

    // if (!validatePhone(phone.value) && phone.value.trim().length !== 13) {
    //     console.log('error');
    //     phone.classList.add("error");  
    //     errorPhone.innerHTML = "Невірний номер телефону. Телефонний номер має складатись з 10 цифр";
    //     errorPhone.classList.add("error-message"); 
    // }

    const isValidForm = Array.from(form.elements).every(
        (element) => !element.classList.contains("error")
    );

    if (isValidForm) {
        const formData = new FormData(form); 
        const info = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        }    
        console.log(info);
        //popupMessage.classList.add('opened');      
    }  

    name.onfocus = () => {
        const isErrorField = name.classList.contains("error");
        if (isErrorField) {
            name.classList.remove("error");
            errorName.innerHTML = "";
            errorName.classList.remove("error-message"); 
        } 
    }
    
    // phone.onfocus = () => {
    //     const isErrorField = phone.classList.contains("error");
    //     if (isErrorField) {
    //         phone.classList.remove("error");
    //         errorPhone.innerHTML = "";
    //         errorPhone.classList.remove("error-message"); 
    //     } 
    // } 
    
    // closeButton.onclick = () => {                  
    //     popupMessage.classList.remove('opened');
    //     popupMessage.classList.add('closen');            
    // }

    form.reset();  
});
