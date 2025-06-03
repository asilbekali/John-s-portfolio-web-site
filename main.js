window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-section ul");
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
