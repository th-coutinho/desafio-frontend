const aboutMeSectionTopPosition   = document.querySelector(".about-me").offsetTop;;
const challengeSectionTopPosition = document.querySelector(".challenge").offsetTop;;

const identifySection = () => {
    let scrollPosition = window.scrollY;
    
    if (scrollPosition < aboutMeSectionTopPosition) {
        return 'main';
    }
    else if (scrollPosition >= challengeSectionTopPosition) {
        return 'challenge';
    }
    else {
        return 'about-me';
    }
}

const markCurrentSectionLink = () => {
    let currentSection = identifySection();

    document.querySelector(`.side-menu .active`).classList.remove('active');
    document.querySelector(`#side-menu-link-${currentSection}`).classList.add('active');
}

export { markCurrentSectionLink };