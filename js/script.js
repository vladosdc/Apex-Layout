let menuIcon = document.querySelector('.header__table__menu-mobile-icon-img');
let menuItems = document.querySelector('.header__table__menu-mobile-items');

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('header__table__menu-mobile-items-active');

    if (menuItems.classList.contains('header__table__menu-mobile-items-active')) {
        menuIcon.classList.toggle('header__table__menu-mobile-icon-img-cross')
        menuIcon.src = 'img/menu_close.png';
    } else {
        menuIcon.classList.remove('header__table__menu-mobile-icon-img-cross')
        menuIcon.src = 'img/menubar.svg';
    }
});
