let previousScrollTop;
let isScrolling;
const btn = document.querySelector(".nav-mobile__button");
const navi = document.querySelector(".nav");
const upnav = document.querySelector(".btnUp");

function hasScrolled() {
    let scrollTop = window.scrollY;

    if (scrollTop > previousScrollTop) {
        btn.classList.add("nav-mobile__button--up");
        navi.classList.add("nav--up");
        upnav.classList.add("btnUp--down");
    } else {
        navi.classList.remove("nav--up");
        upnav.classList.remove("btnUp--down");
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

