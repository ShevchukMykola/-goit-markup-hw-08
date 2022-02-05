(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenubtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("mobile__menu]"),
    };
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenubtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-open");
    }
})();