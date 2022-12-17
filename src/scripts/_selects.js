
let select = function() {

let selectHeaders = document.querySelectorAll('.contact-us__select-header');
let selectItems = document.querySelectorAll('.contact-us__select-item');
let selects = document.querySelectorAll('.contact-us__select');

  selectHeaders.forEach((header) => {
    header.addEventListener('click',selectToggle);
  }); 

  selectItems.forEach((item) => {
    item.addEventListener('click',chooseItem);
  }); 

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
    this.children[1].classList.toggle('contact-us__svg--rotate');
  }

  function chooseItem() {
    let text = this.innerText;
    let select = this.closest('.contact-us__select');
    let currentText = select.querySelector('.contact-us__select-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
    select.querySelector('.contact-us__svg').classList.remove('contact-us__svg--rotate');
  }

}
select();

let selectCV = function() {

  let selectHeaders = document.querySelectorAll('.send-cv-form__select-header');
  let selectItems = document.querySelectorAll('.send-cv-form__select-item');
  let selects = document.querySelectorAll('.send-cv-form__select');
  
    selectHeaders.forEach((header) => {
      header.addEventListener('click',selectToggle);
    }); 
  
    selectItems.forEach((item) => {
      item.addEventListener('click',chooseItem);
    }); 
  
    function selectToggle() {
      this.parentElement.classList.toggle('is-active');
      this.children[1].classList.toggle('send-cv-form__svg--rotate');
    }
  
    function chooseItem() {
      let text = this.innerText;
      let select = this.closest('.send-cv-form__select');
      let currentText = select.querySelector('.send-cv-form__select-current');
      currentText.innerText = text;
      select.classList.remove('is-active');
      select.querySelector('.send-cv-form__svg').classList.remove('send-cv-form__svg--rotate');
    }
  
  }
  selectCV();