
const projectsList = document.querySelector(".projects__list");

const projects = [
  {
    name: "Portfolio Page",
    description:
      "Created with Vanilla Javascript and JQuery for Navigation animation.Styled with Sass",
    img: "../assets/portfolio.png",
    site: "",
    code: ""
  },
  {
    name: "ReefTime - Marine Tanks",
    description:
      "Build with Create React App. SPA using React Router, andContentful as CMS. Deployed with Firebase.",
    img: '../assets/page1.png',
    site: "",
    code: ""
  }
];

projects.forEach(project => {
  const oneProject = document.createElement("li");
  oneProject.classList.add("projects__project");
  oneProject.innerHTML = `
  <div class="projects__header">
    <h4 class="projects__name">${project.name}</h4>
    </div>
    <p class="projects__text">${project.description}</p>
      <div class="projects__image" style="background-image:url(${
    project.img
    })">  <div class="projects__links">        
    <p class="projects__site">
      <a href= ${project.site} class="projects__link">
      <i class="projects__icon fas fa-desktop style"></i></a></p>                                           
    <p class="projects__code">                                
      <a href= ${project.code} class="projects__link">
      <i class="projects__icon fab fa-github"></i></a></p> </div>    </div>
   
  `;

  projectsList.appendChild(oneProject);
});
