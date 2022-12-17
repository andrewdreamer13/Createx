/* Sliders */

const homeHeroSlider = new Swiper('.home-hero__slider', {
  slidesPerView: 1,
  slidesPerScroll: 1,
  speed: 500,
  navigation: {
    nextEl: '.home-hero__next-button',
    prevEl: '.home-hero__prev-button',
  },
  pagination: {
    el: '.home-hero__pagination',
    type: 'bullets',
    clickable: true,
  },
});

const projectsSlider = new Swiper('.projects-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.projects-next-button',
    prevEl: '.projects-prev-button',
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
const relatedProjectsSlider = new Swiper('.related-projects-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.related-projects-next-button',
    prevEl: '.related-projects-prev-button',
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const similarProjectsSlider = new Swiper('.similar-projects-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.similar-projects-next-button',
    prevEl: '.similar-projects-prev-button',
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const partnersSlider = new Swiper('.partners-slider', {
  slidesPerView: 2,
  loop: true,
  speed: 500,
  spaceBetween: 102,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 6,
    },
  },
});

const aboutPartnersSlider = new Swiper('.about-partners-slider', {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  loop: true,
  speed: 500,
  spaceBetween: 102,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
 
  breakpoints: {
    550: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 6,
    },
  },
});

const testimonialsSlider = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  slidesPerScroll: 1,
  loop: true,
  speed: 500,
  // spaceBetween: 30,
  navigation: {
    nextEl: '.testimonials-next-button',
    prevEl: '.testimonials-prev-button',
  },
});




const workImages = document.querySelector('.work-1-slider');

if (workImages) {
  const workSlidernav = new Swiper(".work-1-nav", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      500: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 6,
        spaceBetween: 15,
      },

      768: {
        spaceBetween: 20,
        slidesPerView: 6.5,
      },
      860: {
        slidesPerView: 7.5,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      1060: {
        slidesPerView: 9,
        spaceBetween: 20,
      },
      1260: {
        slidesPerView: 10.5,
        spaceBetween: 20,
      },

    }
  });
  const workSlider = new Swiper(".work-1-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-1-slider__next-button",
      prevEl: ".work-1-slider__prev-button",
    },
    thumbs: {
      swiper: workSlidernav,
    },

  });
}

const historySlider = new Swiper('.history__slider', {
  slidesPerView: 1,
  slidesPerScroll: 1,
  speed: 500,
  navigation: {
    nextEl: '.history-next-button',
    prevEl: '.history-prev-button',
  },

});
historySlider.on('slideChange', function () {
  historyBullets.forEach((bullet) => {
    bullet.classList.remove('history__pagination-bullet--active')
  });
  document.querySelector(`.history__pagination-bullet[data-index="${historySlider.realIndex}"]`).classList.add('history__pagination-bullet--active');
});

const historyBullets = document.querySelectorAll('.history__pagination-bullet');
historyBullets.forEach((bullet, bulletIndex) => {
  bullet.setAttribute('data-index', bulletIndex);
  bullet.addEventListener('click', (e) => {
    const index = e.currentTarget.dataset.index;
    historyBullets.forEach((bullet) => {
      bullet.classList.remove('history__pagination-bullet--active')
    });
    e.currentTarget.classList.add('history__pagination-bullet--active');
    historySlider.slideTo(index);

  })
});
