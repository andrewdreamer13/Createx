
// modal windows
openModalWindows();

function openModalWindows() {
  const modalWindow = document.querySelector('.modal-window');
  const closeButtons = document.querySelectorAll('.modal-window-close-button');
  const openButtons = document.querySelectorAll('.modal-button');

  openButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      let path = event.currentTarget.getAttribute('data-path');
      modalWindow.classList.add('modal-window--visible');
      document.body.style.overflow = 'hidden';
      document.querySelector(`[data-target="${path}"]`).classList.add('modal-window__inner--visible');

      closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          modalWindow.classList.remove('modal-window--visible');
          document.querySelector(`[data-target="${path}"]`).classList.remove('modal-window__inner--visible');
          document.body.style.overflow = 'scroll';
        })
      })
      
      window.addEventListener('click', (e) => {
        if (e.target == modalWindow) {
          modalWindow.classList.remove('modal-window--visible');
          document.querySelector(`[data-target="${path}"]`).classList.remove('modal-window__inner--visible');
          document.body.style.overflow = 'scroll';
        }
      })
    })
  }) // end of openButtons
} // end of openModalWindows