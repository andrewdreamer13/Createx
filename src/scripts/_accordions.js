/* accordions */
accordion()

function accordion() {
  document.querySelectorAll('.design-offer__accordion-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      let content = btn.nextElementSibling;
      let plus = btn.children[1];
    
      if (content.style.maxHeight) {
        document.querySelectorAll('.design-offer__accordion-content').forEach((element) => {
          element.style.maxHeight = null;
        })
        plus.classList.remove('visible');
      } else {
        document.querySelectorAll('.design-offer__accordion-content').forEach((element) => {
          element.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        })
        document.querySelectorAll('.design-offer__accordion-plus').forEach((element) => {
          element.classList.remove('visible');
        })
        plus.classList.add('visible');
      }

    })
  })
} //end of accordion function