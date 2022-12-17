/* tabs working */
const tabs = document.querySelectorAll('.categories__button');
const targets = document.querySelectorAll('.category__article-box');

tabs.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('categories__button--active');
    });
    tab.classList.add('categories__button--active');
   
    targets.forEach((target, targetIndex) => {
      target.classList.remove('category__article-box--show');
      targetIndex = tabIndex;
      targets[targetIndex].classList.add('category__article-box--show');
    });
  });
});

