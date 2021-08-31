// sticky header
window.addEventListener('scroll', () => {
    const navigationSection = document.querySelector('.navigation-section');
    if(pageYOffset > 100){
        navigationSection.classList.add('sticky');
    }else{
        navigationSection.classList.remove('sticky');
    }
})

// nav toggler
const navToggler = document.querySelector(".nav-toggler");
const navSection = document.querySelector(".nav-section");
navToggler.addEventListener('click', () => {
    navToggler.classList.toggle("active");
    navSection.classList.toggle("open");
})

// nav select
document.addEventListener('click', (e) => {
    if(e.target.closest(".nav-li")){
        navToggler.classList.toggle("active");
        navSection.classList.toggle("open");
    } 
})