var nav = document.querySelector('.header__nav'),
    open = document.querySelector('.open'),
    close = document.querySelector('.close');
// header navigation 
open.addEventListener('click', () => {
    nav.classList.toggle('active');
});
close.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// header search buttons 
var search = document.querySelector('#searchBtn'),
    searchWindow = document.querySelector('#modalSearch'),
searchClose = document.querySelector('#searchClose');

    search.addEventListener('click', () => {
        searchWindow.style = 'top: 0 !important';
    });

    searchClose.addEventListener('click', () => {
        searchWindow.style = 'top: -100% !important';
    });

    // header contact modal window
    var contactBtn = document.querySelector('.header__right-content-btn'),
        contactModal = document.querySelector('#hContact'),
        contactClose = document.querySelector('#contactClose');

    contactBtn.addEventListener('click', () => {
        contactModal.style = 'top: 0 !important';
    })

    contactClose.addEventListener('click', () => {
        contactModal.style = 'top: -100% !important';
    })

    // mobile navbar

    var burgerIcon = document.querySelector('.burger__icon'),
        burgerList = document.querySelector('.burger__list'),
        navbar = document.querySelector('.navbar__mobile'),
        body = document.querySelector('body'),
        navSearch = document.querySelector('.navbar__mobile-search');

    burgerIcon.addEventListener('click', () => {
        navbar.classList.toggle('top');
        body.classList.toggle('lock');
    })

    navSearch.addEventListener('click', () => {
        searchWindow.style = 'top: 0 !important';
    })







