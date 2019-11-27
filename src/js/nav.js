const nav = document.querySelector(".nav");

document.addEventListener("scroll", function (e) {

    let scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
        nav.classList.add("nav--fixed");
    } else {
        nav.classList.remove("nav--fixed");
    }
});


