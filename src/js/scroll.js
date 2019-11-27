let previousScrollTop;
let isScrolling;
const btn = document.querySelector(".nav-mobile__button");
const navi = document.querySelector(".nav");

function hasScrolled() {
    let scrollTop = window.scrollY;

    if (scrollTop > previousScrollTop) {
        btn.classList.add("nav-mobile__button--up");
        navi.classList.add("nav--up");
    } else {
        navi.classList.remove("nav--up");
        btn.classList.remove("nav-mobile__button--up");
    }

    previousScrollTop = scrollTop;
}

document.addEventListener(
    "scroll",
    function () {
        isScrolling = true;
    },
    false
);

setInterval(function () {
    if (isScrolling) {
        hasScrolled();
        isScrolling = false;
    }
}, 100);