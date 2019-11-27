

const mobileNav = document.querySelector(".nav");
const mobileBtn = document.querySelector(".nav-mobile__button");

const showMenu = e => {
  mobileNav.classList.toggle("active");
  mobileBtn.classList.toggle("active-btn");
  e.stopPropagation();
};

const hideMenu = () => {
  mobileNav.classList.remove("active");
  mobileBtn.classList.remove("active-btn");
};

mobileBtn.addEventListener("click", showMenu);
document.body.addEventListener("click", hideMenu);


