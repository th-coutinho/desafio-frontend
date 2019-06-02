import './styles/main.scss';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { fillBoardData } from "./app/fillBoardData";
import { ajaxRequest } from "./app/ajaxRequest";
import { toggleNavbarFixedStatus } from "./app/fixedNavbar";
import { markCurrentSectionLink } from "./app/scrollBehaviour";
import { toggleMobileMenu, closeMenuOnOutsideClick } from "./app/sideMenu";

window.addEventListener('scroll', markCurrentSectionLink);
window.addEventListener('scroll', toggleNavbarFixedStatus);
document.querySelector("#mobile-button").addEventListener('click', toggleMobileMenu);
document.querySelector(".side-menu-shadow").addEventListener('click', closeMenuOnOutsideClick);

ajaxRequest ("https://api.github.com/users/th-coutinho", fillBoardData);