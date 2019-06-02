const toggleMobileMenu = () => {
    document.querySelector(".side-menu").classList.toggle('visible');
    document.querySelector(".side-menu .side-menu-logo").classList.toggle('show');
}

export { toggleMobileMenu }