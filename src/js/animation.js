const projects = document.querySelector(".projects");
const project = document.querySelectorAll(".projects__project");
const skills = document.querySelector(".skills");
const skill = document.querySelectorAll(".skills__item .fab");
const windowHeight = window.innerHeight;

document.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;

  if (scrollPosition > projects.offsetTop - windowHeight) {
    project.forEach((pro, index) => {
      setTimeout(() => {
        pro.style.transform = "translateX(0)";
      }, 1000 * index);
    });
  }
});

document.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;

  if (scrollPosition > skills.offsetTop - windowHeight) {
    skill.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transform = "translateX(0) rotate(360deg)";
      }, 300 * index);
    });
  }
});
