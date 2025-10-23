document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.nav__toggle');
    const mobileMenu = document.querySelector('.nav__mobile');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('nav__mobile--active');
        });
    }
});