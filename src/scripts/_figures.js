/* figures animate circle */
import {mainPage} from './_vars';
 function progressCircles() {
  if (mainPage) {
    progressClientsCircle();
    function progressClientsCircle() {
      const clientsCircle = document.querySelector('.clients-semi-circle');
      const clientsBox = document.querySelector('#clients-item');
      const clientsCircleRadius = clientsCircle.r.baseVal.value;
      const clientsCircumference = 2 * Math.PI * clientsCircleRadius;
      clientsCircle.style.strokeDasharray = `${clientsCircumference } ${clientsCircumference }`;
      clientsCircle.style.strokeDashoffset = clientsCircumference;
      let counter = 0;

      document.addEventListener('scroll', function () {
        let windowCenter = window.innerHeight + window.scrollY;
        let scrollOffSet = clientsCircle.closest('section').offsetTop + (clientsCircle.closest('section').offsetHeight / 1.3);

        if (windowCenter >= scrollOffSet) {
          setInterval(() => {
            const offset = clientsCircumference - counter / 110 * clientsCircumference;
            clientsCircle.style.strokeDashoffset = offset;
            if (counter == 98) {
              clearInterval();
            } else {
              counter += 2;
              document.querySelector('#out-1').textContent = counter;
            }
          }, 50)
        }

      });
    };

    progressExperienceCircle()

    function progressExperienceCircle() {
      const clientsCircle = document.querySelector('.experience-semi-circle');
      const clientsCircleRadius = clientsCircle.r.baseVal.value;
      const clientsCircumference = 2 * Math.PI * clientsCircleRadius;
      clientsCircle.style.strokeDasharray = `${clientsCircumference } ${clientsCircumference }`;
      clientsCircle.style.strokeDashoffset = clientsCircumference;
      let counter = 0;
      document.addEventListener('scroll', function () {
        let windowCenter = window.innerHeight + window.scrollY;
        let scrollOffSet = clientsCircle.closest('section').offsetTop + (clientsCircle.closest('section').offsetHeight / 1.1);

        if (windowCenter >= scrollOffSet) {
          setInterval(() => {
            const offset = clientsCircumference - counter / 27 * clientsCircumference;
            clientsCircle.style.strokeDashoffset = offset;
            if (counter == 20) {
              clearInterval();
            } else {
              counter += 1;
              document.querySelector('#out-2').textContent = counter;
            }
          }, 50)
        }
      });


    };


    progressHoursCircle();

    function progressHoursCircle() {
      const clientsCircle = document.querySelector('.hours-semi-circle');
      const clientsCircleRadius = clientsCircle.r.baseVal.value;
      const clientsCircumference = 2 * Math.PI * clientsCircleRadius;
      clientsCircle.style.strokeDasharray = `${clientsCircumference } ${clientsCircumference }`;
      clientsCircle.style.strokeDashoffset = clientsCircumference;
      let counter = 0;

      function interval() {
        setInterval(() => {
          const offset = clientsCircumference - counter / 11500 * clientsCircumference;
          clientsCircle.style.strokeDashoffset = offset;
          if (counter == 9500) {
            clearInterval();
          } else {
            counter += 250;
            document.querySelector('#out-3').textContent = counter;
          }
        }, 50)
      }

      document.addEventListener('scroll', function () {
        let windowCenter = window.innerHeight + window.scrollY;
        let scrollOffSet = clientsCircle.closest('section').offsetTop + (clientsCircle.closest('section').offsetHeight / 1.08);
        if (windowCenter >= scrollOffSet) {
          interval();
        }
      });

    };

    progressProjectsCircle();

    function progressProjectsCircle() {
      const clientsCircle = document.querySelector('.projects-semi-circle');
      const clientsCircleRadius = clientsCircle.r.baseVal.value;
      const clientsCircumference = 2 * Math.PI * clientsCircleRadius;
      clientsCircle.style.strokeDasharray = `${clientsCircumference } ${clientsCircumference }`;
      clientsCircle.style.strokeDashoffset = clientsCircumference;
      let counter = 0;

      function interval() {
        setInterval(() => {
          const offset = clientsCircumference - counter / 100 * clientsCircumference;
          clientsCircle.style.strokeDashoffset = offset;
          if (counter == 100) {
            clearInterval();
          } else {
            counter += 2;
            document.querySelector('#out-4').textContent = counter;
          }
        }, 50)

      }
      document.addEventListener('scroll', function () {
        let windowCenter = window.innerHeight + window.scrollY;
        let scrollOffSet = clientsCircle.closest('section').offsetTop + (clientsCircle.closest('section').offsetHeight / 1.06);
        if (windowCenter >= scrollOffSet) {

          interval()
        }
      });

    };

  }
}
progressCircles();