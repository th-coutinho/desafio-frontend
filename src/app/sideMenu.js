let sideMenuIsOpen = false;

const blurDivs = () => {
    const divs = [
        '.main',
        '.about-me',
        '.challenge',
        '.footer'
    ]

    divs.forEach(selector => {
        document.querySelector(selector).classList.toggle('blur');
    });
}

const closeMenuOnOutsideClick = () => {
    if (sideMenuIsOpen) {
        toggleMobileMenu();
    }
}

const toggleMobileMenu = () => {
    sideMenuIsOpen = !sideMenuIsOpen;
    document.querySelector(".side-menu").classList.toggle('visible');
    document.querySelector(".side-menu-shadow").classList.toggle('visible');
    document.querySelector(".side-menu .side-menu-logo").classList.toggle('show');
    blurDivs();
}

export { toggleMobileMenu, closeMenuOnOutsideClick }