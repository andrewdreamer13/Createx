
TransformSectionTitle();
function TransformSectionTitle() {
  document.addEventListener('scroll', () => {
    const titles = document.querySelectorAll('.section-title');
    
    function showTitle() {
      titles.forEach((title) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = title.offsetTop + (title.offsetHeight * 2);

        if (windowCenter >= scrollOffSet) {
          title.classList.add('section-title--transform');
        
        } else {
          title.classList.remove('section-title--transform');
          
        }

      })
    }
    showTitle();
  })
} // end of transform for section titles

TransformSectionDescr();
function TransformSectionDescr() {
  document.addEventListener('scroll', () => {
    const descrs = document.querySelectorAll('.section-descr');
    
    function showDescr() {
      descrs.forEach((descr) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = descr.offsetTop + (descr.offsetHeight * 2);

        if (windowCenter >= scrollOffSet) {
          descr.classList.add('section-descr--transform');
        
        } else {
          descr.classList.remove('section-descr--transform');
          
        }

      })
    }
    showDescr();
  })
} // end of transform for section descr

TransformValue();
function TransformValue() {
  document.addEventListener('scroll', () => {
    const values = document.querySelectorAll('.value');
    
    function showValue() {
      values.forEach((value) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = value.offsetTop + (value.offsetHeight);

        if (windowCenter >= scrollOffSet) {
          value.classList.add('value--transform');
        
        } else {
          value.classList.remove('value--transform');
          
        }

      })
    }
    showValue();
  })
} // end of transform for section descr


TransformService();
function TransformService() {
  document.addEventListener('scroll', () => {
    const services = document.querySelectorAll('.service');
    
    function showService() {
      services.forEach((service) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = service.offsetTop + (service.offsetHeight / 2);

        if (windowCenter >= scrollOffSet) {
          service.classList.add('service--transform');
        
        } else {
          service.classList.remove('service--transform');
          
        }

      })
    }
    showService();
  })
} // end of transform for section descr

TransformContentBox();
function TransformContentBox() {
  document.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('.content-box');
    
    function showContent() {
      contents.forEach((content) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = content.offsetTop + (content.offsetHeight / 2);

        if (windowCenter >= scrollOffSet) {
          content.classList.add('content-box--transform');
        
        } else {
          content.classList.remove('content-box--transform');
          
        }

      })
    }
    showContent();
  })
} // end of transform for sect

TransformHowWeDo();
function TransformHowWeDo() {
  document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.how-we-do__item');
    
    function showContent() {
      items.forEach((item) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = item.offsetTop + (item.offsetHeight);

        if (windowCenter >= scrollOffSet) {
          item.classList.add('how-we-do__item--transform');
        
        } else {
          item.classList.remove('how-we-do__item--transform');
          
        }

      })
    }
    showContent();
  })
} // end of transform for sect

TransformName();
function TransformName() {
  document.addEventListener('scroll', () => {
    const names = document.querySelectorAll('.team__card-name');
    
    function showContent() {
      names.forEach((name) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = name.closest('.team__card').offsetTop + (name.closest('.team__card').offsetHeight);

        if (windowCenter >= scrollOffSet) {
          name.classList.add('team__card-name--transform');
        
        } else {
          name.classList.remove('team__card-name--transform');
          
        }

      })
    }
    showContent();
  })
} // end of transform for sect

TransformPosition();
function TransformPosition() {
  document.addEventListener('scroll', () => {
    const positions = document.querySelectorAll('.team__card-position');
    
    function showPosition() {
      positions.forEach((position) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = position.closest('.team__card').offsetTop + (position.closest('.team__card').offsetHeight);

        if (windowCenter >= scrollOffSet) {
          position.classList.add('team__card-position--transform');
        
        } else {
          position.classList.remove('team__card-position--transform');
          
        }

      })
    }
    showPosition();
  })
} // end of transform for sect