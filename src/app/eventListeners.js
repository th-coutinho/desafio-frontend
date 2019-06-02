import { toggleNavbarFixedStatus } from "./fixedNavbar";
import { markCurrentSectionLink } from "./scrollBehaviour";
import { toggleMobileMenu, closeMenuOnOutsideClick } from "./sideMenu";

const addAllEventListeners = () => {
    window.addEventListener('scroll', markCurrentSectionLink);
    window.addEventListener('scroll', toggleNavbarFixedStatus);

    document.querySelector("#mobile-button").addEventListener('click', toggleMobileMenu);
    document.querySelector(".side-menu-shadow").addEventListener('click', closeMenuOnOutsideClick);
    document.querySelectorAll('.side-menu-link').forEach(element => {
       element.addEventListener('click', toggleMobileMenu);
    });
}

export { addAllEventListeners }