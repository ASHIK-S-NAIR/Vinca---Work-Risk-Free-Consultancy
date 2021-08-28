// sticky header
window.addEventListener('scroll', () => {
    const navigationSection = document.querySelector('.navigation-section');
    if(pageYOffset > 100){
        navigationSection.classList.add('sticky');
    }else{
        navigationSection.classList.remove('sticky');
    }
})