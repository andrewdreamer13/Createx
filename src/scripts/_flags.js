
const flags = document.querySelectorAll('.flag-link');
const countries = document.querySelectorAll('.country');

flags.forEach((flag,flagIndex)=>{
flag.addEventListener('mouseenter',()=>{
  console.log(flagIndex)
  countries.forEach((country,countryIndex)=>{
    countryIndex = flagIndex;
    country.classList.remove('fill-bg');
    countries[countryIndex].classList.add('fill-bg');
  })
  
});
});
flags.forEach((flag)=>{
  flag.addEventListener('mouseleave',()=>{
    countries.forEach((country)=>{
      country.classList.remove('fill-bg');
    })
  });
});