document.addEventListener('DOMContentLoaded', function() {

    eventListeners();
});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    const button = document.querySelector('.btn');

    navegacion.classList.toggle('mostrar');
    button.classList.toggle('hidden');
}