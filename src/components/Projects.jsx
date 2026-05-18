import React from "react";
import '../styles/Component.css';
import fafImg from "../static/fafproject.png";
import weatherImg from "../static/weather.png";
import todoImg from "../static/todolist.png";
import karentaImg from "../static/karenta.png";
import robotMascot from "../static/flirty.png";

function Projects () {
    const myProjects = [
    {
      id: 1,
      title: "F.A.F.",
      subtitle: "Robotai draugai su asmenybėmis",
      description: "Smagus, „Flask“ pagrindu sukurtas pokalbių roboto žiniatinklio programėlės projektas su keliomis asmenybėmis (flirtingas, piktas, juokingas), paremtas „Google Gemini“ API.",
      techStack: ["Python", "Flask", "Gemini API", "JavaScript"],
      image: fafImg
    },
    {
      id: 2,
      title: "Orų prognozės puslapis",
      subtitle: "Orų prognozės",
      description: "Tai „React + Node.js“ orų programa, kuri, naudodama „Meteo.lt“ API, rodo dabartinę orų informaciją miestuose.",
      techStack: ["React", "Bootstrap", "Node.js", "JavaScript"],
      image: weatherImg
    },
    {
      id: 3,
      title: "To-Do",
      subtitle: "Minimalistinis darbų sąrašas",
      description: "Modernus, minimalistinis darbų sąrašas, sukurtas naudojant „React“ ir stilizuotas naudojant CSS.",
      techStack: ["JavaScript", "HTML", "Sass"],
      image: todoImg
    },
    {
      id: 4,
      title: "Karenta",
      subtitle: "Darbininkų apgyvendinimas Klaipėdoje",
      description: "Puslapis, kuris skirtas apgyvendinimo funkcijoms. Administratoriaus pusė, vartotojo pusė.",
      techStack: ["React", "Laravel", "MySQL", "JavaScript"],
      image: karentaImg
    },
  ];

    return(
        <div className="projects-container h-100 px-4 py-3 position-relative">
      
        <div className="projects-scroll-wrapper">
            {myProjects.map((project) => (
            <div key={project.id} className="project-card-custom">
                
                <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-img" />
                </div>

                <div className="project-info mt-3">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h3 className="project-title fw-bold m-0">{project.title}</h3>
                    <span className="project-subtitle text-muted small">{project.subtitle}</span>
                </div>
                
                <p className="project-desc mt-2 text-dark">
                    {project.description}
                </p>

                <div className="tech-stack d-flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, index) => (
                    <span key={index} className="badge bg-dark text-white px-2 py-1">
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            ))}
        </div>

        <img 
            src={robotMascot} 
            alt="Robotas" 
            className="projects-mascot d-none d-lg-block"
        />

    </div>
    )
}

export default Projects;