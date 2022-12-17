/* burger menu */

const burger = document.querySelector('.burger');
const spanOne = document.querySelector('.burger__span--one');
const spanTwo = document.querySelector('.burger__span--two');
const spanThree = document.querySelector('.burger__span--three');
const menu = document.querySelector('.header__nav');
const items = document.querySelectorAll('.header__nav-item');

burger.addEventListener('click',function(){
  spanOne.classList.toggle('burger__span-one-active');
  spanTwo.classList.toggle('burger__span-two-active');
  spanThree.classList.toggle('burger__span-three-active');
  menu.classList.toggle('header__nav--active');
  document.querySelector('body').classList.toggle('no-scroll');
  items.forEach((item)=>{
    item.classList.toggle('header__nav-item-transform');
  })
});
