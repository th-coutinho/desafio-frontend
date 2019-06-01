const navbar = document.querySelector(".navbar");

const isDesktopView = () => {
    let browserWidth = window.innerWidth;
    
    return (browserWidth >= 992);
}

const crossedMainDivLimit = () => {
    let scrollPosition = window.scrollY;
    let mainDivTopPosition = document.querySelector(".about-me").offsetTop;

    return (scrollPosition >= mainDivTopPosition);
}

const isAlreadyFixed = () => {
    return navbar.classList.contains('fixed');
}

const fixNavbar = () => {
    navbar.classList.add('fixed');
}

const unfixNavbar = () => {
    navbar.classList.remove('fixed');
    navbar.classList.add('unfixed');
    setTimeout (() => {
        navbar.classList.remove('unfixed');
    }, 400)
}

const toggleNavbarFixedStatus = () => {
    if (isDesktopView()) {
        if (crossedMainDivLimit()) {
            fixNavbar();
        }
        else if (isAlreadyFixed()) {
            unfixNavbar();
        }
    }
}

export { toggleNavbarFixedStatus };