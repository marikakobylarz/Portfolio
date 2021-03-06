const projectsList = document.querySelector(".projects__list");

const projects = [
  {
    name: "Portfolio Page",
    description:
      "Created with Vanilla Javascript and JQuery for Navigation animation. Styled with Sass",
    img: "../assets/portfolio.png",
    site: "https://marika-kobylarz.now.sh/",
    code: "https://github.com/marikakobylarz/Portfolio"
  },
  {
    name: "My Music App",
    description:
      "Aplication build with Create-React-App for searching and streaming videos from YouTube. Deployed with now.sh.",
    img: "../assets/mymusicapp.png",
    site: "https://mymusicapp.now.sh/",
    code: "https://github.com/marikakobylarz/mymusicapp"
  },
  {
    name: "Weather app",
    description:
      "Simple weather application build with Create React App. Data is being downloaded from http://api.openweathermap.org/. Deployed with Firebase.",
    img: "../assets/weatherapp.png",
    site: "https://weather-app-d0bfd.web.app/",
    code: "https://github.com/marikakobylarz/WeatherApp"
  },
  {
    name: "ReefTime - Marine Tanks",
    description:
      "Build with Create React App. SPA using React Router. Deployed with Firebase.",
    img: "../assets/page1.png",
    site: "https://reef-time-marine-tanks.web.app/",
    code: "https://github.com/marikakobylarz/ReefTime-MarineTanks"
  }
];

projects.forEach(project => {
  const oneProject = document.createElement("li");
  oneProject.classList.add("projects__project");
  oneProject.innerHTML = `
  <div class="projects__header">
    <h4 class="projects__name">${project.name}</h4>
    </div>
    <div class="projects__text"><p class="projects__description">${project.description}</p></div>
    <div class="projects__image" style="background-image:url(${project.img})">
    <div class="projects__links">        
    <p class="projects__site">
      <a href= ${project.site} class="projects__link">
      <i class="projects__icon fas fa-desktop style"></i></a></p>                                           
    <p class="projects__code">                                
      <a href= ${project.code} class="projects__link">
      <i class="projects__icon fab fa-github"></i></a></p> </div>    </div>
   
  `;

  projectsList.appendChild(oneProject);
});
