
/* tabs working */
const tabs = document.querySelectorAll('.portfolio__button');
const targets = document.querySelectorAll('.portfolio__view-item');
const loadMoreButtons = document.querySelectorAll('.portfolio__load-more-button');
tabs.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('portfolio__button--active');
    });
    tab.classList.add('portfolio__button--active');
    document.querySelectorAll('.load-card').forEach((card) => {
      card.classList.add('hide-load')
    })
    loadMoreButtons.forEach((button) => {
      button.classList.remove('hide-load')
    })
    targets.forEach((target, targetIndex) => {
      target.classList.remove('show');
      targetIndex = tabIndex;
      targets[targetIndex].classList.add('show');
    });
  });
});

loadMoreButtons.forEach((button) => {
  button.addEventListener('click',(event) => {
    let path = event.target.getAttribute('data-path');
   
     document.querySelectorAll(`[data-target="${path}"]`).forEach((card) => {
      card. classList.remove('hide-load');
     })
     button.classList.add('hide-load');
  })
})