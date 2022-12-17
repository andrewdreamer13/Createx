
  window.onload = function() {
    const titles = document.querySelectorAll('.hero-title');
     titles.forEach((title) => {
       title.classList.add('hero-title--transform');
      })

      const descriptions = document.querySelectorAll('.hero-descr');
      descriptions.forEach((descr) => {
        descr.classList.add('hero-descr--transform');
       })

       const homeDescrs = document.querySelectorAll('.home-hero__descr');
       homeDescrs.forEach((descr) => {
        descr.classList.add('home-hero-descr--transform');
       })

       const portfolioButtons = document.querySelectorAll('.portfolio__button');
       portfolioButtons.forEach((button) => {
        button.classList.add('portfolio__button--transform');
       })
  }
